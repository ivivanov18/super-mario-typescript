export default class Compositor {
  private _layers: Array<(context: CanvasRenderingContext2D) => void>;

  constructor() {
    this._layers = [];
  }

  draw(context: CanvasRenderingContext2D) {
    this._layers.forEach((layer) => {
      layer(context);
    });
  }

  get layers() {
    return this._layers;
  }

  set layers(value) {
    this._layers = value;
  }
}
