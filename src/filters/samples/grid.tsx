import type { Filter } from "../../types";
export default {
  name: "Apply Grid",
  apply: (pixels: Uint8ClampedArray, width: number, height: number) => {
    /*
     * We want to make stripes... so if we're making 10 stripes in a 200 x 300 image,
     * We have 10 stripes wide of 20px width
     * and we have 10 stripes tall of 30px height
     * So if we know we're at row 44, we should know we're in stripe 4, so we need to
     * divide by stripe width and take the modulo...
     */
    let nstripes = 10;
    let stripeWidth = width / nstripes;
    let stripeHeight = height / nstripes;

    // Now iterate through each row and columns...
    for (let row = 0; row < height; row++) {
      for (let col = 0; col < width; col++) {
        // Get the indices of R,G,B,A pixels
        // for row and col
        const redIndex = row * 4 * width + col * 4;
        const greenIndex = redIndex + 1;
        const blueIndex = redIndex + 2;
        const alphaIndex = redIndex + 3;

        // Now we want to draw stripes -- figure out if we're "on" or "off"
        let inHorizontalStripe = Math.floor(row / stripeHeight) % 2;
        let inVerticalStripe = Math.floor(col / stripeWidth) % 2;

        // Apply special logic for horizontal and vertical striping...
        if (inHorizontalStripe) {
          // make redder...
          pixels[redIndex] += 100;
          pixels[greenIndex] -= 50;
          pixels[blueIndex] -= 50;
        }
        if (inVerticalStripe) {
          // Make bluier
          pixels[blueIndex] += 100;
          pixels[redIndex] -= 50;
          pixels[greenIndex] -= 50;
        }
      }
    }

    return pixels;
  },
} as Filter;
