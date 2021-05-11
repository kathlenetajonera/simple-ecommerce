import { useEffect, useState } from "react";

const FilterBar = ({ allProducts, setProductsToRender }) => {
    const [categories, setCategories] = useState([]);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const handleToggle = () => setIsFilterOpen(!isFilterOpen);
    const handleClick = e => {
        const category = e.target.dataset.category;

        setSelectedCategory(category);
    }

    //sets categories
    useEffect(() => {
        const fetchCategories = async () => {
            const response = await fetch("https://fakestoreapi.com/products/categories")
            const data = await response.json();

            setCategories(data);
        }

        fetchCategories();
    }, [])

    //handles click outside
    useEffect(() => {
        const clickOutsideListener = e => {
            const clickedFilterBar = e.target.closest(".filter");

            if (!clickedFilterBar) setIsFilterOpen(false);
        }

        document.addEventListener("click", clickOutsideListener)

        return () => document.removeEventListener("click", clickOutsideListener)
    })

    //filter products based on category
    useEffect(() => {
        if (selectedCategory && selectedCategory !== "all products") {
            const filteredProducts = [...allProducts].filter(product => product.category === selectedCategory);

            setProductsToRender(filteredProducts);
        } else {
            setProductsToRender(allProducts)
        }

    }, [selectedCategory, allProducts, setProductsToRender])

    return (
        <div className="filter">
            <p 
                className="filter__category" 
                onClick={handleToggle}
            >
                {`${selectedCategory ? selectedCategory : "Select Category"}`}
            </p>

            <div className={`filter__options ${isFilterOpen ? 'filter__options--active' : ''}`}>
                <p 
                    className="filter__option"
                    data-category="all products"
                    onClick={handleClick}
                >
                    All Products
                </p>

                { categories.map(category => (
                    <p 
                        className="filter__option" 
                        data-category={category}
                        onClick={handleClick}
                        key={category}
                    >
                        { category }
                    </p>
                )) }
            </div>
        </div>
    );
}
 
export default FilterBar;