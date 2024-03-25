/**
 * This starter code for image editing work was authored by
 * Tom Hinkle (https://www.tomhinkle.net) and is provided as is
 * for use by any students or teachers interested in doing basic
 * image filtering with TypeScript.
 *
 * This starter code was provided by my teacher.
 *
 * This "template" is designed to be used to create simple
 * filters without any options.
 *
 */

import type { Filter } from "../types";

export const myFilter: Filter = {
  name: "My Filter",
  apply: (pixels, width, height) => {
    /* Modify pixels... */
    return pixels;
  },
};
