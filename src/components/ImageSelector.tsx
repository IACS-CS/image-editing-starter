import React from "react";
import Select from "react-select";
import type { ImageInfo } from "../types";
import { images } from "../images";

type Props = {
  currentImage: ImageInfo;
  onImageSelect: (image: ImageInfo) => void;
};

const ImageSelector: React.FC<Props> = ({ currentImage, onImageSelect }) => {
  const options = images.map((image) => ({
    value: image,
    label: image.name,
  }));

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      display: "flex",
      alignItems: "center",
      padding: 10,
    }),
    singleValue: (provided, state) => ({
      ...provided,
      display: "flex",
      alignItems: "center",
    }),
  };

  const formatOptionLabel = (image) => (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img
        src={image.value.url}
        alt={image.label}
        style={{ width: 30, height: 30, marginRight: 10 }}
      />
      {image.label}
    </div>
  );

  const handleSelectChange = (selectedOption) => {
    onImageSelect(selectedOption.value);
  };

  const selectedOption = options.find(
    (option) => option.value.url === currentImage.url
  );

  return (
    <div>
      <Select
        value={selectedOption}
        onChange={handleSelectChange}
        options={options}
        styles={customStyles}
        formatOptionLabel={formatOptionLabel}
        isClearable
      />
    </div>
  );
};

export default ImageSelector;
