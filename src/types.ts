export type Background = {
  tile: string;
  ranges: Array<Array<number>>;
};

export type Backgrounds = {
  backgrounds: Array<Background>;
};

export type Level = {
  backgrounds: Array<Background>;
};
