export enum Keystate {
  Released,
  Pressed,
}

export default class KeyboardState {
  private keyStates: Map<string, Keystate>;
  private keyMap: Map<string, (ks: Keystate) => void | undefined>;

  constructor() {
    this.keyStates = new Map();
    this.keyMap = new Map();
  }

  addMapping(code: string, callback: (ks: Keystate) => void) {
    this.keyMap.set(code, callback);
  }

  handleEvent(event: KeyboardEvent): void {
    const { code }: { code: string } = event;

    if (!this.keyMap.has(code)) {
      return;
    }

    event.preventDefault();

    const keyState =
      event.type === "keydown" ? Keystate.Pressed : Keystate.Released;

    if (this.keyStates.get(code) === keyState) {
      return;
    }

    this.keyStates.set(code, keyState);
    this.keyMap.get(code)(keyState);
  }

  listenTo(window: any) {
    ["keydown", "keyup"].forEach((eventName) => {
      window.addEventListener(eventName, (event: KeyboardEvent) => {
        this.handleEvent(event);
      });
    });
  }
}
