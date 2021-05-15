import { useState, useEffect } from "react";
import "../css/searchFilter.css";
import FilterBar from "./FilterBar";
import SearchBar from "./SearchBar";

const SearchFilter = ({ allProducts, setProductsToRender }) => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [keyword, setKeyword] = useState('');

    //filter products based on keyword
    useEffect(() => {
        if (keyword) {
            const filteredProducts = [...allProducts].filter(product => {
                const productTitle = product.title.toLowerCase();
    
                return productTitle.indexOf(keyword.toLowerCase()) !== -1;
            })
            
            setProductsToRender(filteredProducts);
            setSelectedCategory(null);
        }

    }, [keyword, allProducts, setProductsToRender])

    //filter products based on category
    useEffect(() => {
        const isSpecificCategory = selectedCategory && selectedCategory !== "all products";
        const isAllProducts = selectedCategory && selectedCategory === "all products";

        if (isSpecificCategory) {
            const filteredProducts = [...allProducts].filter(product => product.category === selectedCategory);

            setProductsToRender(filteredProducts);
            setKeyword('');
        } else if (isAllProducts) {
            setProductsToRender(allProducts);
            setKeyword('');
        }

    }, [selectedCategory, allProducts, setProductsToRender])

    return (
        <div className="flex flex--search-filter">
            <SearchBar 
                keyword={keyword}
                setKeyword={setKeyword}
            />
            <FilterBar 
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
            />
        </div>
    );
}
 
export default SearchFilter;