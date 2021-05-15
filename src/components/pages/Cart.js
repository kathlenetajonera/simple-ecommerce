import { useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import "../../css/cart.css";
import CartTable from "../CartTable";
import CheckOutButton from "../CheckOutButton";
import CheckoutSuccess from "../CheckoutSuccess";
import Container from "../wrapper/Container";

const Cart = () => {
    const [total, setTotal] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const modalRef = useRef();

    return (
        <Container>
            <div className="cart">
                <h1 className="cart__main-text">Cart</h1>
                
                <CartTable
                    total={total}
                    setTotal={setTotal}
                />

                { total !== 0 &&
                    <CheckOutButton 
                        setIsModalOpen={setIsModalOpen}
                    />
                }
                
                <CSSTransition 
                    nodeRef={modalRef}
                    in={isModalOpen}
                    timeout={200}
                    classNames="modal"
                    unmountOnExit
                >
                    <CheckoutSuccess 
                        ref={modalRef}
                        isModalOpen={isModalOpen}
                        setIsModalOpen={setIsModalOpen}
                    />
                </CSSTransition>

            </div>
        </Container>
    );
}
 
export default Cart;