import { useState } from "react";
import { allIconsData } from "../../../data/all-icons-data";

const Searchbar = ({ onSearch, placeholder }) => {
  const { search } = allIconsData;
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value); // Pass search term to parent component
  };

  return (
    <div className="flex justify-center items-center gap-1 max-w-[80dvw] mb-4">
      <div className="text-xl text-secondary">{search}</div>
      <input
        className="w-full rounded-sm p-2 bg-primary focus:outline-none text-secondary"
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Searchbar;
