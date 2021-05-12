const SearchBar = ({ keyword, setKeyword }) => {
    const handleChange = e => setKeyword(e.target.value);
    
    return (
        <div className="search">
            <i className="search__icon fas fa-search" />
            <input 
                type="text" 
                className="search__input" 
                placeholder="Search product..."
                value={keyword}
                onChange={handleChange}
            />
        </div>
    );
}
 
export default SearchBar;