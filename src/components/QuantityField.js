import { useState } from "react";

const QuantityField = () => {
    const [quantity, setQuantity] = useState(1);

    const handleChange = e => {
        const qty = e.target.value;
        const maxValue = 99;

        if (qty <= maxValue) {
            setQuantity(qty);
        } else return;
    }

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