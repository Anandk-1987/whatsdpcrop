import imageCompression from 'browser-image-compression';

export async function optimizeImage(file: File): Promise<string> {
  try {
    const options = {
      maxSizeMB: 0.5,
      maxWidthOrHeight: 1024,
      useWebWorker: true,
    };

    const compressedFile = await imageCompression(file, options);
    const reader = new FileReader();

    return new Promise((resolve, reject) => {
      reader.onload = (e) => {
        if (e.target?.result) {
          resolve(e.target.result as string);
        } else {
          reject(new Error('Failed to read compressed file'));
        }
      };
      reader.onerror = () => reject(new Error('Failed to read file'));
      reader.readAsDataURL(compressedFile);
    });
  } catch (error) {
    console.error('Error optimizing image:', error);
    throw error;
  }
}

