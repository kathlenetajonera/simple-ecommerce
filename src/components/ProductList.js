import ProductCard from "./ProductCard";
import Loading from "./Loading";

const ProductList = ({ isLoading, productsToRender, currentPage, postsPerPage }) => {
    const indexOfLastProduct = currentPage * postsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - postsPerPage;
    const currentProducts = productsToRender.slice(indexOfFirstProduct, indexOfLastProduct);

    return (
        <div className="product-list grid">
            { isLoading && <Loading /> }

            { currentProducts.map(product => (
                <ProductCard 
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