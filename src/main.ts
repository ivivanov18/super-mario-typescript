import SpriteSheet from "./spriteSheet";
import Vector2 from "./utils/vector2";
import { loadLevel } from "./utils/loaders";
import { loadBackgroundSprites, loadCharactersSprites } from "./sprites";

const canvas = <HTMLCanvasElement>document.getElementById("screen");
const context = canvas.getContext("2d");

Promise.all([
  loadBackgroundSprites(),
  loadLevel("1-1"),
  loadCharactersSprites(),
]).then(([backgrounds, level, character]: any) => {
  const backgroundBuffer: HTMLCanvasElement = document.createElement("canvas");
  backgroundBuffer.width = 256;
  backgroundBuffer.height = 240;

  level.backgrounds.forEach((background: any) => {
    drawBackground(background, backgroundBuffer.getContext("2d"), backgrounds);
  });

  const pos = new Vector2(64, 64);
  update();

  function update() {
    context.drawImage(backgroundBuffer, 0, 0);
    character.draw("mario-idle", context, pos);
    pos.x += 2;
    pos.y += 2;
    requestAnimationFrame(update);
  }
});

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
