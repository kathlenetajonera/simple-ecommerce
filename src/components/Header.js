import "../css/header.css";

const Header = () => {
    return (
        <header className="header">
            <h1 className="header__store-name">
                Store 101
            </h1>

            <div className="header__bag">
                <i className="header__icon fas fa-shopping-bag" />
            </div>
        </header>
    );
}
 
export default Header;