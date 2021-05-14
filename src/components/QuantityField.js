const QuantityField = ({ currentQuantity, handleChange }) => {
    return (
        <div className="quantity">
            <input 
                type="number" 
                name="quantity"
                min="1"
                max="99"
                value={currentQuantity}
                pattern="\d*"
                className="quantity__input"
                onChange={handleChange}
            />
        </div>
    );
}
 
export default QuantityField;