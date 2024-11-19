import PropTypes from "prop-types";
import { useState } from "react";
import { updateCart } from "../scripts/shop";

function ItemCart({ title, price, index, handle }) {
    const [quantity, setQuantity] = useState(1);

    const addQuantity = () => {
        quantity < 10 ? setQuantity((q) => q + 1) : null;
    };

    const minusQuantity = () => {
        quantity > 1 ? setQuantity((q) => q - 1) : null;
    };

    return (
        <li>
            ITEM #{index} - {title}
            <button
                onClick={() => {
                    updateCart(title, "DELETE");
                    handle(title); // Force a re-render after API Call.
                }}
            >
                REMOVE
            </button>
            QTY. {quantity}
            <button onClick={addQuantity}>+</button>
            <button onClick={minusQuantity}>-</button>
            <p>PRICE: ${price * quantity}</p>
        </li>
    );
}

ItemCart.propTypes = {
    title: PropTypes.string,
    price: PropTypes.number,
    index: PropTypes.number,
    handle: PropTypes.func,
};

export default ItemCart;
