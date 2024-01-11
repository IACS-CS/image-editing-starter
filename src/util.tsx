/* Take a 6 or 8 digit hex code and convert it into an RGBA string */
export const hexToRGBA: (hex: string) => [number, number, number, number] = (
  hex
) => {
  if (hex[0] === "#") {
    hex = hex.substring(1);
  }
  // If we have a 6 digit hex code, we need to add the alpha channel
  if (hex.length === 6) {
    hex = hex + "ff";
  }

  // Now we can split the hex code into 4 parts
  let r = parseInt(hex.slice(0, 2), 16);
  let g = parseInt(hex.slice(2, 4), 16);
  let b = parseInt(hex.slice(4, 6), 16);
  let a = parseInt(hex.slice(6, 8), 16);

  return [r, g, b, a];
};
