const SearchBar = () => {
    return (
        <div className="search">
            <i className="search__icon fas fa-search" />
            <input type="text" className="search__input" placeholder="Search product..." />
        </div>
    );
}
 
export default SearchBar;