import { useState, useEffect, useContext } from "react";
import { CartItemsContext } from "../../context/CartItemsContext";

const useAddToCart = (targetParent, productDetails) => {
    const { cartItems, setCartItems } = useContext(CartItemsContext);
    const [newItem, setNewItem] = useState(null);
    const [indexToUpdate, setIndexToUpdate] = useState(null);
    const [isAddingToCart, setIsAddingToCart] = useState(false);

    const handleAddToCart = (e) => {
        e.preventDefault();
        setIsAddingToCart(true);

        const productId = e.target.closest(`.${targetParent}`).id;
        const existingOrderIndex = cartItems.findIndex(item => item.id === parseInt(productId));

        if (existingOrderIndex !== -1) {
            setTimeout(() => {
                setIndexToUpdate(existingOrderIndex);
            }, 1000)
        } else {
            const newItem = {
                id: productDetails.id,
                name: productDetails.name,
                image: productDetails.image,
                price: productDetails.price,
                quantity: targetParent === "product" ? 1 : productDetails.currentQuantity
            };

            setTimeout(() => {
                setNewItem(newItem);
            }, 1000)
        }
    }

    useEffect(() => {
        if (indexToUpdate !== null) {
            const currentCartItems = [...cartItems];
            const currentCartItem = currentCartItems[indexToUpdate];
            const updatedCartItem = { 
                ...currentCartItem, 
                quantity: targetParent === "product" 
                ? currentCartItem.quantity + 1 
                : currentCartItem.quantity + productDetails.currentQuantity 
            }

            currentCartItems.splice(indexToUpdate, 1, updatedCartItem);

            setCartItems(currentCartItems);
            setIndexToUpdate(null);
            setIsAddingToCart(false);
        }

        return () => {
            setIndexToUpdate(null);
            setIsAddingToCart(false);
        }
    }, [indexToUpdate, cartItems, setCartItems, targetParent, productDetails.currentQuantity])

    useEffect(() => {
        if (newItem) {
            setCartItems([...cartItems, newItem]);
            setIsAddingToCart(false);
            setNewItem(null);
        }

        return () => {
            setIsAddingToCart(false);
            setNewItem(null)
        }
    }, [newItem, cartItems, setCartItems])

    return { handleAddToCart, isAddingToCart }
}
 
export default useAddToCart;