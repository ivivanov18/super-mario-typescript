import SpriteSheet from "./spriteSheet";
import Vector2 from "./utils/vector2";
import { loadLevel } from "./utils/loaders";
import { loadBackgroundSprites, loadCharactersSprites } from "./sprites";
import Compositor from "./compositor";
import { createBackgroundLayer } from "./layers";

const canvas = <HTMLCanvasElement>document.getElementById("screen");
const context = canvas.getContext("2d");

function createSpriteLayer(sprite: any, position: Vector2) {
  return function drawSpriteLayer(context: CanvasRenderingContext2D) {
    sprite.draw("mario-idle", context, position);
  };
}

Promise.all([
  loadBackgroundSprites(),
  loadLevel("1-1"),
  loadCharactersSprites(),
]).then(([backgrounds, level, mario]: any) => {
  const compositor = new Compositor();
  compositor.layers.push(createBackgroundLayer(level.backgrounds, backgrounds));
  const pos = new Vector2(64, 64);
  const marioLayer = createSpriteLayer(mario, pos);
  compositor.layers.push(marioLayer);

  update();

  function update() {
    compositor.draw(context);
    pos.x += 2;
    pos.y += 2;
    requestAnimationFrame(update);
  }
});
