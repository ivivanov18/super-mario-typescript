import SpriteSheet from "./spriteSheet";
import Vector2 from "./utils/vector2";
import { loadImage, loadLevel } from "./utils/loaders";
import { Level } from "./types";

const canvas = <HTMLCanvasElement>document.getElementById("screen");
const context = canvas.getContext("2d");

Promise.all([loadBackgroundSprites(), loadLevel("1-1")]).then(
  ([sprites, level]) => {
    level.backgrounds.forEach((background: any) => {
      drawBackground(background, context, sprites);
      drawBackground(background, context, sprites);
    });
  }
);

function loadBackgroundSprites(): Promise<SpriteSheet> {
  return loadImage("/img/tileset.png").then((img) => {
    const sprites = new SpriteSheet(img, 16, 16);
    sprites.define("ground", new Vector2());
    sprites.define("sky", new Vector2(3, 23));
    return sprites;
  });
}

function drawBackground(
  background: any,
  context: CanvasRenderingContext2D,
  sprites: SpriteSheet
) {
  background.ranges.forEach(([x1, x2, y1, y2]: any) => {
    for (let x = x1; x < x2; x++) {
      for (let y = y1; y < y2; y++) {
        sprites.drawTile(background.tile, context, new Vector2(x, y));
      }
    }
  });
}
