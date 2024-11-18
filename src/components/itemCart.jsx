import PropTypes from "prop-types";
import { useState } from "react";
import { updateCart } from "../scripts/shop";

function ItemCart({ value, index, handle }) {
    const [quantity, setQuantity] = useState(1);

    const addQuantity = () => {
        quantity < 10 ? setQuantity((q) => q + 1) : null;
    };

    const minusQuantity = () => {
        quantity > 1 ? setQuantity((q) => q - 1) : null;
    };

    return (
        <li>
            ITEM #{index} - {value}
            <button
                onClick={() => {
                    updateCart(value, "DELETE");
                    handle(value); // Force a re-render after API Call.
                }}
            >
                REMOVE
            </button>
            QTY. {quantity}
            <button onClick={addQuantity}>+</button>
            <button onClick={minusQuantity}>-</button>
        </li>
    );
}

ItemCart.propTypes = {
    value: PropTypes.string,
    index: PropTypes.number,
    handle: PropTypes.func,
};

export default ItemCart;
