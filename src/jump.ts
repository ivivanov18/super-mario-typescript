import { Trait } from "./entity";
import Entity from "./entity";

export class Jump extends Trait {
  private _duration: number = 0.5;
  private _velocity: number = 200;
  private _engageTime: number = 0;

  constructor() {
    super("jump");
  }

  start(): void {
    this._engageTime = this._duration;
  }

  cancel(): void {
    this._engageTime = 0;
  }

  update(entity: Entity, deltaTime: number): void {
    if (this._engageTime > 0) {
      entity.vel.y = -this._velocity;
      this._engageTime -= deltaTime;
    }
  }
}
