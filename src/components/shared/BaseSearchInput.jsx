import PropTypes from "prop-types";
import React from "react";
import { SearchIcon } from "../../assets";

const BaseSearchInput = React.forwardRef(
  ({ placeholder, onChange, height, onSearch }, ref) => {
    const handleKeyPress = (event) => {
      if (event.code === "Enter") {
        onSearch();
      }
    };

    return (
      <div className="max-w-[774px] pr-1 w-full rounded-full shadow-custom bg-white flex items-center">
        <input
          ref={ref}
          className="w-full px-[14px] py-[10px] flex gap-2 bg-transparent text-base font-light disabled:cursor-not-allowed disabled:opacity-50 outline-none text-[#586667]"
          placeholder={placeholder}
          onChange={onChange}
          onKeyPress={handleKeyPress}
          height={height || "60px"}
        />
        <button
          type="submit"
          className="flex items-center justify-center rounded-full h-[40px] w-[40px] bg-black"
          onClick={onSearch}
        >
          <SearchIcon />
        </button>
      </div>
    );
  }
);

BaseSearchInput.displayName = "Search";

BaseSearchInput.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  height: PropTypes.string,
  onChange: PropTypes.func,
  onSearch: PropTypes.func,
};

export default BaseSearchInput;
