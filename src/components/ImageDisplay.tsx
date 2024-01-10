import React from "react";

import type { ImageInfo } from "../types";
export const ImageDisplay: React.FC<{ image: ImageInfo }> = ({ image }) => {
  return (
    <figure>
      <img src={image.url} />
      <figcaption>{image.attribution}</figcaption>
    </figure>
  );
};
