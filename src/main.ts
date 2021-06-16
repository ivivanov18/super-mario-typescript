import SpriteSheet from "./spriteSheet";
import Vector2 from "./utils/vector2";
import { loadImage } from "./utils/loaders";

const canvas = <HTMLCanvasElement>document.getElementById("screen");
const context = canvas.getContext("2d");

loadImage("/img/tileset.png").then((img) => {
  const sprites = new SpriteSheet(img, 16, 16);
  sprites.define("ground", new Vector2());
  sprites.define("sky", new Vector2(3, 23));

  for (let x = 0; x < 25; x++) {
    for (let y = 0; y < 14; y++) {
      sprites.drawTile("sky", context, new Vector2(x, y));
    }
  }

  for (let x = 0; x < 25; x++) {
    for (let y = 13; y < 14; y++) {
      sprites.drawTile("ground", context, new Vector2(x, y));
    }
  }
});
