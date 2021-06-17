import SpriteSheet from "./spriteSheet";
import Vector2 from "./utils/vector2";
import { loadImage, loadLevel } from "./utils/loaders";
import { Level } from "./types";

const canvas = <HTMLCanvasElement>document.getElementById("screen");
const context = canvas.getContext("2d");

Promise.all([
  loadBackgroundSprites(),
  loadLevel("1-1"),
  loadCharactersSprites(),
]).then(([backgrounds, level, characters]: any) => {
  level.backgrounds.forEach((background: any) => {
    drawBackground(background, context, backgrounds);
    drawBackground(background, context, backgrounds);
  });
  drawCharacter(context, characters);
});

function loadCharactersSprites(): Promise<SpriteSheet> {
  return loadImage("/img/characters.gif").then((img) => {
    const characters = new SpriteSheet(img, 16, 16);
    characters.define("mario-idle", new Vector2(276, 44), 16, 16);
    return characters;
  });
}
function loadBackgroundSprites(): Promise<SpriteSheet> {
  return loadImage("/img/tileset.png").then((img) => {
    const sprites = new SpriteSheet(img, 16, 16);
    sprites.defineTile("ground", new Vector2());
    sprites.defineTile("sky", new Vector2(3, 23));
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

function drawCharacter(
  context: CanvasRenderingContext2D,
  character: SpriteSheet
) {
  character.draw("mario-idle", context, new Vector2());
}
