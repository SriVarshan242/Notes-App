import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const SearchBar = ({ value, onChange, handleSearch, onClearsearch }) => {
  return (
    <div className="relative flex items-center bg-white border border-gray-300 rounded-full px-4 py-2 w-96 mx-auto">
      <input
        type="text"
        placeholder="Search Notes"
        className="w-full outline-none text-gray-700"
        value={value}
        onChange={onChange}
      />
      {value && (
        <IoMdClose
          className="text-gray-500 cursor-pointer hover:text-black ml-2"
          onClick={onClearsearch}
        />
      )}
      <FaMagnifyingGlass
        className="text-gray-500 cursor-pointer hover:text-black ml-3"
        onClick={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
