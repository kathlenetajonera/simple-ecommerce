const CheckOutButton = ({ setIsModalOpen }) => {
    return (
        <button className="button button--check-out" onClick={() => setIsModalOpen(true)}>
            Proceed to Checkout
        </button>
    );
}
 
export default CheckOutButton;