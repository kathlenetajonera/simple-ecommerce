import { useEffect, useState } from "react";
import Loading from "../Loading";
import Pagination from "../Pagination";
import ProductList from "../ProductList";
import SearchFilter from "../SearchFilter";
import Container from "../wrapper/Container";

const ProductCatalog = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [allProducts, setAllProducts] = useState([]);
    const [error, setError] = useState(null);
    const [productsToRender, setProductsToRender] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    //fetch all products on initial mount
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);

            try {
                const response = await fetch("https://fakestoreapi.com/products")
                const data = await response.json();

                setAllProducts(data);
                setProductsToRender(data);
            } catch (e) {
                setError("Could not fetch data..");
            }

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
            { isLoading && <Loading /> }
            { error && <p className="error__text">{error}</p> }
            
            { productsToRender.length > 0 && 
                <>
                <SearchFilter 
                    allProducts={allProducts}
                    setProductsToRender={setProductsToRender}
                />
                <ProductList 
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
                </>
            }
        </Container>
    );
}
 
export default ProductCatalog;