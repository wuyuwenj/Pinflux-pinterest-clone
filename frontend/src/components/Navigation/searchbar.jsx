import { useState } from "react";
import "./searchbar.css";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const searchInput = document.querySelector('input[type="text"]');

  const handlesubmit = (e) => {
    e.preventDefault();
    const searchTerm = searchInput.value;
  };
  return (
    <form className="search" onSubmit={handlesubmit}>
      <i id="search" className="fas fa-search"></i>
      <input
        type="text"
        className="searchInput"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search:still in development, please try other functions!"
      />
    </form>
  );
};

export default SearchBar;
