import { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { CartItemsContext } from "../context/CartItemsContext";
import QuantityField from "./QuantityField";

const CartItem = ({ id, image, name, quantity, price }) => {
    const history = useHistory();
    const [currentQuantity, setCurrentQuantity] = useState(quantity);
    const [indexToUpdate, setIndexToUpdate] = useState(null);
    const { cartItems, setCartItems } = useContext(CartItemsContext);

    const handleChange = e => {
        const productId = e.target.closest(".table__row").id;
        const qty = e.target.value;
        const existingOrderIndex = cartItems.findIndex(item => item.id === parseInt(productId));
        const maxValue = 99;

        if (qty <= maxValue && existingOrderIndex !== -1) {
            setCurrentQuantity(qty);
            setIndexToUpdate(parseInt(existingOrderIndex));
        } else return;
    }

    const handleDelete = e => {
        const productId = e.target.closest(".table__row").id;
        const currentCartItems = [...cartItems];
        const productIndexToDelete = currentCartItems.findIndex(item => item.id === parseInt(productId));

        currentCartItems.splice(productIndexToDelete, 1);
        
        setCartItems(currentCartItems);
    }

    const handleClick = e => {
        const productId = e.target.closest(".table__row").id;

        history.push(`/${productId}`);
    }

    useEffect(() => {
        if (indexToUpdate !== null) {
            const currentCartItems = [...cartItems];
            const existingCartItem = currentCartItems[indexToUpdate];
            const updatedCartItem = { ...existingCartItem, quantity: parseInt(currentQuantity) };
    
            currentCartItems.splice(indexToUpdate, 1, updatedCartItem);

            setCartItems(currentCartItems)
            setIndexToUpdate(null)
        }
    }, [currentQuantity, indexToUpdate, cartItems, setCartItems])

    return (
        <>
            <tr className="table__row" id={id}>
                <td className="table__data" data-label="">
                    <span className="table__remove-data" onClick={handleDelete}>
                        <i className="fas fa-times" />
                    </span>
                </td>
                <td className="table__data" data-label="">
                    <img src={ image } alt={name} className="table__img" onClick={handleClick} />
                </td>
                <td className="table__data" data-label="PRODUCT">{ name }</td>
                <td className="table__data" data-label="PRICE">{ price }</td>
                <td className="table__data" data-label="QUANTITY">
                    <QuantityField
                        currentQuantity={currentQuantity}
                        handleChange={handleChange}
                    />
                </td>
                <td className="table__data table__data--price" data-label="SUBTOTAL">{`PHP ${price * quantity}`}</td>
            </tr>
        </>
    );
}
 
export default CartItem;