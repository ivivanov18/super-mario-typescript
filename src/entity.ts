import SpriteSheet from "./spriteSheet";
import Vector2 from "./utils/vector2";

export default class Entity {
  private _position: Vector2;
  private _velocity: Vector2;
  private _marioSprite: SpriteSheet;

  constructor(sprite: SpriteSheet) {
    this._position = new Vector2();
    this._velocity = new Vector2();
    this._marioSprite = sprite;
  }

  update(deltaTime: number) {
    this.position.x += this.velocity.x * deltaTime;
    this.position.y += this.velocity.y * deltaTime;
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

  set velocity(value: Vector2) {
    this._velocity = value;
  }

  get velocity(): Vector2 {
    return this._velocity;
  }

  get sprite(): SpriteSheet {
    return this._marioSprite;
  }
}
