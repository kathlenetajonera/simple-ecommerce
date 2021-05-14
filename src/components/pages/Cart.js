import { useState } from "react";
import "../../css/cart.css";
import CartTable from "../CartTable";
import CheckOutButton from "../CheckOutButton";
import Container from "../wrapper/Container";

const Cart = () => {
    const [total, setTotal] = useState(0);

    return (
        <Container>
            <div className="cart">
                <h1 className="cart__main-text">Cart</h1>
                
                <CartTable
                    total={total}
                    setTotal={setTotal}
                />

                { total !== 0 &&
                    <CheckOutButton />
                }

            </div>
        </Container>
    );
}
 
export default Cart;