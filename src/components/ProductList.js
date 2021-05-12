import ProductCard from "./ProductCard";
import Loading from "./Loading";

const ProductList = ({ isLoading, productsToRender, currentPage, postsPerPage }) => {
    const indexOfLastProduct = currentPage * postsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - postsPerPage;
    const currentProducts = productsToRender.slice(indexOfFirstProduct, indexOfLastProduct);

    return (
        <div className="grid grid--catalog">
            { isLoading && <Loading /> }

            { currentProducts.map(product => (
                <ProductCard 
                    id={product.id}
                    name={product.title}
                    image={product.image}
                    price={product.price}
                    category={product.category}
                    key={product.id}
                />
            )) }
        </div>
    );
}
 
export default ProductList;