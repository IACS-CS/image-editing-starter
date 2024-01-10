import filters from "../filters";
import React, { FC } from "react";
import type { Filter } from "../types";
// Define the props expected by the ImageFilterChooser component
interface ImageFilterChooserProps {
  onInput: (selectedFilter: Filter | null) => void;
}

const ImageFilterChooser: React.FC<ImageFilterChooserProps> = ({ onInput }) => {
  // This function will be called when a new option is selected
  const updateSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedFilterName = event.target.value;
    const selectedFilter = filters.find(
      (filter) => filter.name == selectedFilterName
    );
    onInput(selectedFilter || null);
  };

  return (
    <main>
      <select onInput={updateSelect}>
        {filters.map((filter) => (
          <option key={filter.name} value={filter.name}>
            {filter.name}
          </option>
        ))}
      </select>
    </main>
  );
};

export default ImageFilterChooser;
