const QuantityField = ({ quantity, handleChange }) => {
    return (
        <div className="quantity">
            <input 
                type="number" 
                name="quantity"
                min="1"
                max="99"
                value={quantity}
                pattern="\d*"
                className="quantity__input"
                onChange={handleChange}
            />
        </div>
    );
}
 
export default QuantityField;