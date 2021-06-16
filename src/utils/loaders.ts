export function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const image: HTMLImageElement = new Image();
    image.addEventListener("load", () => {
      resolve(image);
    });
    image.src = src;
  });
}
