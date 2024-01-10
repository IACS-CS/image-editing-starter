export type Filter = {
  name: string;
  apply: (
    pixels: Uint8ClampedArray,
    width: number,
    height: number
  ) => Uint8ClampedArray;
};
export type ImageInfo = {
  url: string;
  name: string;
  filename?: string;
  attribution?: JSX.Element;
};
