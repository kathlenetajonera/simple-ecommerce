import React, { useEffect, useRef, useCallback } from "react";
import ReactDOM from "react-dom";
import "../css/modal.css";

const CheckoutSuccess = React.forwardRef(({ isModalOpen, setIsModalOpen }, ref) => {
    const overlayRef = useRef();
    const handleClose = useCallback(() => setIsModalOpen(false), [setIsModalOpen]);

    useEffect(() => {
        const clickOutsideListener = (e) => {
            if (e.target.contains(overlayRef.current)) {
                handleClose();
            }
        }

        document.addEventListener("click", clickOutsideListener);

        return () => document.removeEventListener("click", clickOutsideListener)
    }, [handleClose])
    
    return ReactDOM.createPortal(
        <>
        <div className="modal" ref={ref}>
            <p className="modal__text">
                Thank you for shopping with us!
            </p>

            <button 
                className="button button--full"
                onClick={handleClose}
                >
                    Close
            </button>
        </div>

        <div 
            ref={overlayRef}
            className={`overlay ${isModalOpen ? 'overlay--active': ''}`} 
        />
        </>,
        document.getElementById("portal")
    );
})
 
export default CheckoutSuccess;