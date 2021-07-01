import Entity from "./entity";
import Vector2 from "./utils/vector2";
import { loadCharactersSprites } from "./sprites";
import Velocity from "./velocity";
import { Jump } from "./jump";

export function createMario(): Promise<Entity> {
  return loadCharactersSprites().then((sprite) => {
    const mario = new Entity(sprite);
    mario.addTrait(new Velocity());
    mario.addTrait(new Jump());
    mario.position = new Vector2(64, 180);
    // mario.vel = new Vector2(200, -600);
    return mario;
  });
}
