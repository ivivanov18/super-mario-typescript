export default class Timer {
  private updateProxy: (time: number) => void;
  update: (d: number) => void;

  constructor(deltaTime: number = 1 / 60) {
    let accumulatedTime = 0;
    let lastTime = 0;

    // decoupling internal frame rate of the game from the rendering framerate
    this.updateProxy = (time) => {
      accumulatedTime += (time - lastTime) / 1000;

      while (accumulatedTime > deltaTime) {
        this.update(deltaTime);
        accumulatedTime -= deltaTime;
      }
      lastTime = time;
      this.enqueue();
    };
  }

  enqueue() {
    requestAnimationFrame(this.updateProxy);
  }

  start() {
    requestAnimationFrame(this.updateProxy);
  }
}
