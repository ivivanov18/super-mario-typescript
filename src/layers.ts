import { Background } from "./types";
import SpriteSheet from "./spriteSheet";
import Vector2 from "./utils/vector2";

function drawBackground(
  background: Background,
  context: CanvasRenderingContext2D,
  sprites: SpriteSheet
) {
  background.ranges.forEach(([x1, x2, y1, y2]: Array<number>) => {
    for (let x = x1; x < x2; x++) {
      for (let y = y1; y < y2; y++) {
        sprites.drawTile(background.tile, context, new Vector2(x, y));
      }
    }
  });
}

export function createBackgroundLayer(
  backgrounds: any,
  sprites: SpriteSheet
): (context: CanvasRenderingContext2D) => void {
  const buffer: HTMLCanvasElement = document.createElement("canvas");
  buffer.width = 256;
  buffer.height = 240;

  backgrounds.forEach((background: any) => {
    drawBackground(background, buffer.getContext("2d"), sprites);
  });

  return function drawBackgroundLayer(context: CanvasRenderingContext2D) {
    context.drawImage(buffer, 0, 0);
  };
}
