import Vector2 from "./utils/vector2";

export default class SpriteSheet {
  private image: HTMLImageElement;
  private width: number;
  private height: number;
  private tiles: Map<string, HTMLCanvasElement>;

  constructor(image: HTMLImageElement, width: number, height: number) {
    this.image = image;
    this.width = width;
    this.height = height;
    this.tiles = new Map();
  }

  define(name: string, position: Vector2, width: number, height: number) {
    const buffer = document.createElement("canvas");
    buffer.width = width;
    buffer.height = height;
    buffer
      .getContext("2d")
      .drawImage(
        this.image,
        position.x,
        position.y,
        width,
        height,
        0,
        0,
        width,
        height
      );
    this.tiles.set(name, buffer);
  }

  defineTile(name: string, offset: Vector2) {
    this.define(
      name,
      new Vector2(offset.x * this.width, offset.y * this.height),
      this.width,
      this.height
    );
  }

  draw(name: string, context: CanvasRenderingContext2D, position: Vector2) {
    const buffer = this.tiles.get(name);
    context.drawImage(buffer, position.x, position.y);
  }

  drawTile(name: string, context: CanvasRenderingContext2D, offset: Vector2) {
    this.draw(
      name,
      context,
      new Vector2(offset.x * this.width, offset.y * this.height)
    );
  }
}
