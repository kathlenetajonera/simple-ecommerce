import { useContext, useEffect, useState } from "react";
import { CartItemsContext } from "../context/CartItemsContext";
import CartItem from "./CartItem";

const CartTable = () => {
    const { cartItems } = useContext(CartItemsContext);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        if (cartItems.length > 0) {
            const subtotalPerProduct = cartItems.map(item => item.price * item.quantity);
            const cartTotal = subtotalPerProduct.reduce((accumulator, currentValue) => {
                return accumulator + currentValue;
            })
            
            setTotal(cartTotal);
        }
    }, [cartItems])

    return (
        <table className="table">
            <thead className="table__header">
                <tr className="table__colored-row">
                    <th className="table__main-text table__main-text--hidden">DELETE</th>
                    <th className="table__main-text table__main-text--hidden">IMAGE</th>
                    <th className="table__main-text">PRODUCT</th>
                    <th className="table__main-text">PRICE</th>
                    <th className="table__main-text">QUANTITY</th>
                    <th className="table__main-text">SUBTOTAL</th>
                </tr>
            </thead>
            <tbody>
                { cartItems.map(item => (
                    <CartItem 
                        id={item.id}
                        image={item.image}
                        name={item.name}
                        price={item.price}
                        key={item.id}
                    />
                )) }
            </tbody>
            <tfoot>
                { total !== 0 && 
                    <tr className="table__colored-row">
                        <td 
                            colSpan="6" 
                            className="table__main-text table__main-text--total"
                        >
                            {`Php ${total}`}
                        </td>
                    </tr>
                }
            </tfoot>
        </table>
    );
}
 
export default CartTable;