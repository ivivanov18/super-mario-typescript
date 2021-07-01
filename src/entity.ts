import SpriteSheet from "./spriteSheet";
import Vector2 from "./utils/vector2";

export class Trait {
  private _NAME: string;

  constructor(name: string) {
    this._NAME = name;
  }

  update(entity: Entity, deltaTime: number) {
    throw new Error("Unhandled call in trait");
  }

  get NAME() {
    return this._NAME;
  }
}

export default class Entity {
  private _position: Vector2;
  private _velocity: Vector2;
  private _marioSprite: SpriteSheet;
  private _traits: Array<Trait>;
  [property: string]: any;

  constructor(sprite: SpriteSheet) {
    this._position = new Vector2();
    this._velocity = new Vector2();
    this._marioSprite = sprite;
    this._traits = [];
  }

  addTrait(trait: Trait): void {
    this._traits.push(trait);
    this[trait.NAME] = trait; // mario.run.start();
  }

  update(deltaTime: number) {
    this._traits.forEach((trait) => trait.update(this, deltaTime));
  }

  draw(context: CanvasRenderingContext2D) {
    this._marioSprite.draw("mario-idle", context, this.position);
  }

  set position(value: Vector2) {
    this._position = value;
  }

  get position(): Vector2 {
    return this._position;
  }

  set vel(value: Vector2) {
    this._velocity = value;
  }

  get vel(): Vector2 {
    return this._velocity;
  }

  get sprite(): SpriteSheet {
    return this._marioSprite;
  }
}
