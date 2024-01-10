import React, { useEffect, useRef, useState } from "react";
import type { Filter, ImageInfo } from "../types";

type FilteredImageDisplayProps = {
  image: ImageInfo;
  filter: Filter;
  onImageLoad: (width: number, height: number) => void;
};

export const FilteredImageDisplay: React.FC<FilteredImageDisplayProps> = ({
  image,
  filter,
  onImageLoad,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const imgRef = useRef(new Image());

  useEffect(() => {
    const img = imgRef.current;
    setImageLoaded(false);
    img.onload = () => {
      setImageLoaded(true);
    };
    img.src = image.url;

    // Clean up
    return () => {
      img.onload = null;
    };
  }, [image.url]);

  useEffect(() => {
    if (imageLoaded) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      const img = imgRef.current;
      canvas.width = img.width;
      canvas.height = img.height;
      onImageLoad(img.width, img.height);
      ctx.drawImage(img, 0, 0);
      const imageData = ctx.getImageData(0, 0, img.width, img.height);
      const filteredData = filter.apply(imageData.data, img.width, img.height);
      const newImageData = new ImageData(filteredData, img.width, img.height);
      ctx.putImageData(newImageData, 0, 0);
    }
  }, [imageLoaded, filter]);

  return (
    <div className="filtered-image">
      <canvas ref={canvasRef} style={{ display: "block" }} />
      <img
        ref={imgRef}
        src={image.url}
        alt="source"
        style={{ display: "none" }}
      />
    </div>
  );
};
