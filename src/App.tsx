import { useState } from "react";
import "./App.css";
import ImageFilterChooser from "./components/ImageFilterChooser";

import filters from "./filters";
import type { Filter, ImageInfo } from "./types";
import { images } from "./images";
import { ImageDisplay } from "./components/ImageDisplay";
import { FilteredImageDisplay } from "./components/FilteredImageDisplay";
import ImageSelector from "./components/ImageSelector";
const defaultImage = images[0];
const App = () => {
  const [filter, setFilter] = useState<Filter | null>(filters[0]);
  const [image, setImage] = useState<ImageInfo>(defaultImage);
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const getSize = (width: number, height: number) => {
    setWidth(width);
    setHeight(height);
  };
  return (
    <main>
      <nav>
        <div>
          Filter: <ImageFilterChooser onInput={setFilter} />
        </div>
        <div>
          Image:
          <ImageSelector onImageSelect={setImage} currentImage={image} />
        </div>
      </nav>
      <h1>
        Filtering {image.name} image &nbsp;
        {(width && (
          <div className="size">
            ({width}x{height})
          </div>
        )) ||
          ""}{" "}
      </h1>
      <section className="side-by-side">
        <div>
          <h2>Original</h2>
          {image ? <ImageDisplay image={image} /> : "No image selected..."}
        </div>
        <div>
          <h2>Filtered</h2>
          {filter && image ? (
            <FilteredImageDisplay
              image={image}
              filter={filter}
              onImageLoad={getSize}
            />
          ) : (
            "waiting on filter/image..."
          )}
        </div>
      </section>
    </main>
  );
};

export default App;
