import "../../css/cart.css";
import CartTable from "../CartTable";
import Container from "../wrapper/Container";

const Cart = () => {
    return (
        <Container>
            <div className="cart">
                <h1 className="cart__main-text">Cart</h1>
                
                <CartTable />
            </div>
        </Container>
    );
}
 
export default Cart;