import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { updateCart } from "../scripts/shop";

function ItemCart({ title, price, index, handle, totalPriceHandler }) {
    const [quantity, setQuantity] = useState(1);

    // Change total price with each quantity change.
    const addQuantity = () => {
        if (quantity < 10) {
            setQuantity((q) => q + 1);
            totalPriceHandler((t) => t + price);
        }
    };

    const minusQuantity = () => {
        if (quantity > 1) {
            setQuantity((q) => q - 1);
            totalPriceHandler((t) => t - price);
        }
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
    totalPriceHandler: PropTypes.func,
};

export default ItemCart;
