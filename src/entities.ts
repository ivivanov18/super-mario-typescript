import Entity from "./entity";
import Vector2 from "./utils/vector2";
import { loadCharactersSprites } from "./sprites";

export function createMario(): Promise<Entity> {
  return loadCharactersSprites().then((sprite) => {
    const mario = new Entity(sprite);
    mario.position = new Vector2(64, 180);
    mario.velocity = new Vector2(200, -600);
    return mario;
  });
}
