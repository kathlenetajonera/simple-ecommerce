import ProductCard from "./ProductCard";

const ProductList = ({ productsToRender, currentPage, postsPerPage }) => {
    const indexOfLastProduct = currentPage * postsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - postsPerPage;
    const currentProducts = productsToRender.slice(indexOfFirstProduct, indexOfLastProduct);

    return (
        <div className="grid grid--catalog">
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