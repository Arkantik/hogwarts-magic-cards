import PropTypes from "prop-types";

// assets
import glass from "../../public/assets/icon/glass.svg";

function SearchBar({ handleSearch }) {
  return (
    <div className="flex items-center relative">
      <input
        onChange={handleSearch}
        type="search"
        placeholder="Search..."
        className="outline-none py-2 pl-9 pr-4 rounded-md w-80 bg-dark"
      />
      <img src={glass} className="pl-2 absolute" alt="loupe" />
    </div>
  );
}

SearchBar.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default SearchBar;
