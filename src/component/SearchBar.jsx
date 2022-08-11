const SearchBar = ({ onSearch, query }) => {
  return (
    <div>
      <input
        type='text'
        placeholder='Search Country'
        onChange={(e) => {
          onSearch(e.target.value);
        }}
        value={query}
      />
    </div>
  );
};

export default SearchBar;
