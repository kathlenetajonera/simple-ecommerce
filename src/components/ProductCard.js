import { Link } from "react-router-dom";
import useAddToCart from "./hooks/useAddToCart";
import "../css/product.css";

const ProductCard = ({ id, name, image, category, price }) => {
    const { handleAddToCart, isAddingToCart } = useAddToCart("product", { id, name, image, price });

    return (
        <div className="product" id={id}>
            <Link to={`/${id}`} className="product__link">
                <img src={image} alt={name} className="product__thumbnail"/>

                <div className="flex flex--sb-c">
                    <p className="product__main-text">
                        { name }
                    </p>

                    <p className="product__main-text product__main-text--price">
                        {`$ ${price}`}
                    </p>
                </div>
            </Link>

            <p className="product__text">
                {`Category: ${category}`}
            </p>

            <button 
                className={`button ${isAddingToCart ? 'button--loading': 'button--full'}`}
                onClick={handleAddToCart}
            >
                {`${isAddingToCart ? '' : 'Add to Cart'}`}
            </button>
        </div>
    );
}
 
export default ProductCard;