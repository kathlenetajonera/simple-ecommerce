import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartItemsContext } from "../context/CartItemsContext";
import "../css/product.css";

const ProductCard = ({ id, name, image, category, price }) => {
    const { cartItems, setCartItems } = useContext(CartItemsContext);
    const handleAddToCart = (e) => {
        e.preventDefault();
        
        const newItem = {
            id: id,
            name: name,
            image: image,
            price: price
        };

        setCartItems([...cartItems, newItem])
    }

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
                className="button button--full"
                onClick={handleAddToCart}
            >
                Add to Cart
            </button>
        </div>
    );
}
 
export default ProductCard;