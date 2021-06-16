const canvas = <HTMLCanvasElement>document.getElementById("screen");
const context = canvas.getContext("2d");
context.fillRect(0, 0, 50, 50);

loadImage("/img/tileset.png").then((img) => {
  context.drawImage(img, 0, 0);
});

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const image: HTMLImageElement = new Image();
    image.addEventListener("load", () => {
      resolve(image);
    });
    image.src = src;
  });
}
