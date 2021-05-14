import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartItemsContext } from "../../context/CartItemsContext";
import Loading from "../Loading";
import QuantityField from "../QuantityField";
import Container from "../wrapper/Container";

const ProductPage = () => {
    const { id } = useParams();
    const { cartItems, setCartItems } = useContext(CartItemsContext);
    const [isLoading, setIsLoading] = useState(false);
    const [productDetails, setProductDetails] = useState(null);
    const [currentQuantity, setCurrentQuantity] = useState(1);
    const [indexToUpdate, setIndexToUpdate] = useState(null);

    const handleChange = e => {
        const qty = e.target.value;
        const maxValue = 99;

        if (qty <= maxValue) {
            setCurrentQuantity(parseInt(qty));
        }
    }

    const handleAddToCart = e => {
        e.preventDefault();

        const productId = e.target.closest(".grid--product-page").id;
        const existingOrderIndex = cartItems.findIndex(item => item.id === parseInt(productId));

        if (existingOrderIndex !== -1) {
            setCurrentQuantity(currentQuantity);
            setIndexToUpdate(existingOrderIndex);
        } else {
            const newItem = {
                id: productDetails.id,
                name: productDetails.title,
                image: productDetails.image,
                price: productDetails.price,
                quantity: currentQuantity
            };
    
            setCartItems([...cartItems, newItem]);
        }
    }

    //fetch product details
    useEffect(() => {
        const fetchProductDetails = async () => {
            setIsLoading(true);

            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            const data = await response.json();

            setProductDetails(data);
            setIsLoading(false);
        }

        fetchProductDetails();
    }, [id])

    //update cart item
    useEffect(() => {
        if (indexToUpdate !== null) {
            const currentCartItems = [...cartItems];
            const currentCartItem = currentCartItems[indexToUpdate];
            const updatedCartItem = { ...currentCartItem, quantity: currentCartItem.quantity + currentQuantity }

            currentCartItems.splice(indexToUpdate, 1, updatedCartItem);

            setCartItems(currentCartItems);
            setIndexToUpdate(null);
        }
        
    }, [indexToUpdate, cartItems, currentQuantity, setCartItems])

    return (
        <Container>
            { isLoading && <Loading /> }

            { productDetails && 
            <div className="grid grid--product-page" id={productDetails.id}>
            
                <img src={productDetails.image} alt={productDetails.title} className="product__image"/>

                <div className="product__details">
                    <h3 className="product__main-text">
                        { productDetails.title }
                    </h3>

                    <p className="product__text">
                        { productDetails.description }
                    </p>

                    <p className="product__text">
                        Category: { productDetails.category }
                    </p>

                    <div className="flex flex--sb-c">
                        <QuantityField 
                            currentQuantity={currentQuantity}
                            handleChange={handleChange}
                        />
                        <button 
                            className="button"
                            onClick={handleAddToCart}
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
            }
        </Container>
    );
}
 
export default ProductPage;