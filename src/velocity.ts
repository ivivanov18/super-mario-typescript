import Entity from "./entity";
import { Trait } from "./entity";

export default class Velocity extends Trait {
  constructor() {
    super("velocity");
  }

  update(entity: Entity, deltaTime: number): void {
    entity.position.x += entity.vel.x * deltaTime;
    entity.position.y += entity.vel.y * deltaTime;
  }
}
