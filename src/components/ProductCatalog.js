import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import ProductList from "./ProductList";
import SearchFilter from "./SearchFilter";
import Container from "./wrapper/Container";

const ProductCatalog = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [allProducts, setAllProducts] = useState([]);
    const [productsToRender, setProductsToRender] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    //fetch all products on initial mount
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);

            const response = await fetch("https://fakestoreapi.com/products")
            const data = await response.json();

            setAllProducts(data);
            setProductsToRender(data);
            setIsLoading(false);
        }

        fetchData();
    }, [])

    //resets the page number per product list update
    useEffect(() => {
        setCurrentPage(1);
    }, [productsToRender])

    return (
        <Container>
            <SearchFilter 
                allProducts={allProducts}
                setProductsToRender={setProductsToRender}
            />
            <ProductList 
                isLoading={isLoading}
                productsToRender={productsToRender}
                currentPage={currentPage}
                postsPerPage={postsPerPage}
            />
            <Pagination 
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalProducts={productsToRender.length}
                postsPerPage={postsPerPage}
            />
        </Container>
    );
}
 
export default ProductCatalog;