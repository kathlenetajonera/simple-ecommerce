import "../css/searchFilter.css";
import FilterBar from "./FilterBar";
import SearchBar from "./SearchBar";

const SearchFilter = ({ allProducts, setProductsToRender }) => {
    return (
        <div className="flex flex--search-filter">
            <SearchBar />
            <FilterBar 
                allProducts={allProducts}
                setProductsToRender={setProductsToRender}
            />
        </div>
    );
}
 
export default SearchFilter;