import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartItemsContext } from "../context/CartItemsContext";
import "../css/header.css";

const Header = () => {
    const { cartItems } = useContext(CartItemsContext);
    const cartQuantities = cartItems
    .map(item => item.quantity)
    .reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0);

    return (
        <header className="header">
            <Link to="/" style={{ textDecoration: "none" }}>
                <h1 className="header__store-name">
                    Store 101
                </h1>
            </Link>

            <Link to="/cart" style={{ textDecoration: "none" }}>
                <div className="header__bag">
                    <i className="header__icon fas fa-shopping-bag" />
                    { cartQuantities !== 0 && 
                        <span className="header__cart-count">{cartQuantities}</span> 
                    }
                </div>
            </Link>
        </header>
    );
}
 
export default Header;