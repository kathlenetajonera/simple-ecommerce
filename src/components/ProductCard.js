import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartItemsContext } from "../context/CartItemsContext";
import "../css/product.css";

const ProductCard = ({ id, name, image, category, price }) => {
    const { cartItems, setCartItems } = useContext(CartItemsContext);
    const [indexToUpdate, setIndexToUpdate] = useState(null);
    const [isAddingToCart, setIsAddingToCart] = useState(false);
    const handleAddToCart = (e) => {
        e.preventDefault();
        setIsAddingToCart(true);

        const productId = e.target.closest(".product").id;
        const existingOrderIndex = cartItems.findIndex(item => item.id === parseInt(productId));

        if (existingOrderIndex !== -1) {
            setIndexToUpdate(existingOrderIndex);
        } else {
            const newItem = {
                id: id,
                name: name,
                image: image,
                price: price,
                quantity: 1
            };
    
            setTimeout(() => {
                setCartItems([...cartItems, newItem]);
                setIsAddingToCart(false);
            }, 1000)
        }
    }

    useEffect(() => {
        if (indexToUpdate !== null) {
            const currentCartItems = [...cartItems];
            const currentCartItem = currentCartItems[indexToUpdate];
            const updatedCartItem = { ...currentCartItem, quantity: currentCartItem.quantity + 1 }

            currentCartItems.splice(indexToUpdate, 1, updatedCartItem);

            setTimeout(() => {
                setCartItems(currentCartItems);
                setIndexToUpdate(null);
                setIsAddingToCart(false);
            }, 1000)
        }
    }, [indexToUpdate, cartItems, setCartItems])

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