export type Background = {
  type: string;
  ranges: Array<Array<number>>;
};

export type Level = {
  backgrounds: Array<Background>;
};
