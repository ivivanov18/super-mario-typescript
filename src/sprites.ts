import { loadImage } from "./utils/loaders";
import SpriteSheet from "./spriteSheet";
import Vector2 from "./utils/vector2";

export function loadCharactersSprites(): Promise<SpriteSheet> {
  return loadImage("/img/characters.gif").then((img) => {
    const characters = new SpriteSheet(img, 16, 16);
    characters.define("mario-idle", new Vector2(276, 44), 16, 16);
    return characters;
  });
}

export function loadBackgroundSprites(): Promise<SpriteSheet> {
  return loadImage("/img/tileset.png").then((img) => {
    const sprites = new SpriteSheet(img, 16, 16);
    sprites.defineTile("ground", new Vector2());
    sprites.defineTile("sky", new Vector2(3, 23));
    return sprites;
  });
}
