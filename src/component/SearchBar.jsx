const SearchBar = ({ onSearch, query }) => {
  return (
    <div>
      <input
        type='text'
        placeholder='Search Country or Capital'
        onChange={(e) => {
          onSearch(e.target.value);
        }}
        value={query}
      />
    </div>
  );
};

export default SearchBar;
