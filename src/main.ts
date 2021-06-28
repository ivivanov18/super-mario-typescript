import { loadLevel } from "./utils/loaders";
import { loadBackgroundSprites } from "./sprites";
import Compositor from "./compositor";
import { createBackgroundLayer, createSpriteLayer } from "./layers";
import { createMario } from "./entities";
import Timer from "./timer";

const canvas = <HTMLCanvasElement>document.getElementById("screen");
const context = canvas.getContext("2d");

Promise.all([loadBackgroundSprites(), loadLevel("1-1"), createMario()]).then(
  ([backgrounds, level, mario]: any) => {
    const compositor = new Compositor();
    compositor.layers.push(
      createBackgroundLayer(level.backgrounds, backgrounds)
    );

    const gravity = 30;
    const marioLayer = createSpriteLayer(mario);
    compositor.layers.push(marioLayer);

    const timer = new Timer();
    timer.update = function update(deltaTime: number) {
      compositor.draw(context);
      mario.update(deltaTime);
      mario.velocity.y += gravity;
    };
    timer.start();
  }
);
