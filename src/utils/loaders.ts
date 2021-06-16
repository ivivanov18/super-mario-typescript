import { Level } from "../types";

export function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const image: HTMLImageElement = new Image();
    image.addEventListener("load", () => {
      resolve(image);
    });
    image.src = src;
  });
}

export function loadLevel(src: string): Promise<Level> {
  return fetch(`/levels/${src}.json`).then((r) => r.json());
}
