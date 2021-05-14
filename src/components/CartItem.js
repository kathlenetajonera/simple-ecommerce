import { useState, useEffect, useContext } from "react";
import { CartItemsContext } from "../context/CartItemsContext";
import QuantityField from "./QuantityField";

const CartItem = ({ id, image, name, price }) => {
    const [quantity, setQuantity] = useState(1);
    const [indexToUpdate, setIndexToUpdate] = useState(null);
    const { cartItems, setCartItems } = useContext(CartItemsContext);

    const handleChange = e => {
        const productId = e.target.closest(".table__row").id;
        const qty = e.target.value;
        const existingOrderIndex = cartItems.findIndex(item => item.id === parseInt(productId));
        const maxValue = 99;

        if (qty <= maxValue && existingOrderIndex !== -1) {
            setQuantity(qty);
            setIndexToUpdate(parseInt(existingOrderIndex));
        } else return;
    }

    useEffect(() => {
        if (indexToUpdate !== null) {
            const currentCartItems = [...cartItems];
            const existingCartItem = currentCartItems[indexToUpdate];
            const updatedCartItem = { ...existingCartItem, quantity: parseInt(quantity) };
    
            currentCartItems.splice(indexToUpdate, 1, updatedCartItem);

            setCartItems(currentCartItems)
            setIndexToUpdate(null)
        }
    }, [quantity, indexToUpdate, cartItems, setCartItems])

    return (
        <>
            <tr className="table__row" id={id}>
                <td className="table__data" data-label="">
                    <span className="table__remove-data">
                        <i className="fas fa-times" />
                    </span>
                </td>
                <td className="table__data" data-label="">
                    <img src={ image } alt={name} className="table__img" />
                </td>
                <td className="table__data" data-label="PRODUCT">{ name }</td>
                <td className="table__data" data-label="PRICE">{ price }</td>
                <td className="table__data" data-label="QUANTITY">
                    <QuantityField
                        quantity={quantity}
                        handleChange={handleChange}
                    />
                </td>
                <td className="table__data table__data--price" data-label="SUBTOTAL">{`PHP ${price * quantity}`}</td>
            </tr>
        </>
    );
}
 
export default CartItem;