import "../css/product.css";

const ProductCard = ({ name, image, category, price }) => {
    return (
        <div className="product">
            <img src={image} alt={name} className="product__image"/>

            <div className="flex flex--sb-c">
                <p className="product__main-text">
                    { name }
                </p>

                <p className="product__main-text product__main-text--price">
                    {`$ ${price}`}
                </p>
            </div>

            <p className="product__text">
                {`Category: ${category}`}
            </p>

            <button className="button">
                Add to Cart
            </button>
        </div>
    );
}
 
export default ProductCard;