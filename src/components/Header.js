import { Link } from "react-router-dom";
import "../css/header.css";

const Header = () => {
    return (
        <header className="header">
            <Link to="/" style={{ textDecoration: "none" }}>
                <h1 className="header__store-name">
                    Store 101
                </h1>
            </Link>

            <Link to="/cart">
                <div className="header__bag">
                    <i className="header__icon fas fa-shopping-bag" />
                </div>
            </Link>
        </header>
    );
}
 
export default Header;