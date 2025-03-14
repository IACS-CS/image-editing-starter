/** 
 * These challenges introduce conditional logic to your filters.
 * e.g.
 * 1. **Threshold Filter**: Implement a filter that sets all pixels to either black or white, depending on a brightness threshold.
 * 2. **Invert Colors**: Create a filter that inverts the colors of the image.
 * 3. **Sepia Tone**: Apply a sepia effect to give the image a warm, brownish tone.
 * 4. **Posterize**: Create a filter that replaces all pixels with colors from a fixed
   palette based on proximity, creating the equivalent of e.g. a "4 color" poster. 
   
   */

import { percentageOption } from "../filterOptions";
import type { Filter, FilterOption, FilterFunction } from "../types";
import { hexToRGBA } from "../utils";

const filterImage: FilterFunction = (pixels, width, height) => {
  // Now try to write a loop that goes through each pixel and
  // applies the filter to it using an *if* statement!
  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      const redIndex = row * 4 * width + col * 4;
      const greenIndex = redIndex + 1;
      const blueIndex = redIndex + 2;
      // Now maybe add an if statement
      // to add conditional logic based on the pixel's color
      // or position...
    }
  }
  return pixels;
};

export const challengeOneFilter: Filter = {
  name: "Challenge #1",
  apply: filterImage,
};
