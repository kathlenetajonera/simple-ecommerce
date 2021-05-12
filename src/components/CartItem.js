import QuantityField from "./QuantityField";

const CartItem = ({ image, name, price }) => {
    return (
        <>
            <tr className="table__row">
                <td className="table__data" data-label="">
                    <span className="table__remove-data">
                        <i className="fas fa-times" />
                    </span>
                </td>
                <td className="table__data" data-label="">
                    <img src={ image } alt={name} className="table__img" />
                </td>
                <td className="table__data" data-label="PRODUCT">{ name }</td>
                <td className="table__data" data-label="PRICE">{ price }</td>
                <td className="table__data" data-label="QUANTITY">
                    <QuantityField />
                </td>
                <td className="table__data table__data--price" data-label="SUBTOTAL">Php 5,000.00</td>
            </tr>
        </>
    );
}
 
export default CartItem;