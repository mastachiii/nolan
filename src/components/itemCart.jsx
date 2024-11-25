import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { updateCart } from "../scripts/shop";

function ItemCart({ title, price, index, handle, totalPriceHandler }) {
    const [quantity, setQuantity] = useState(1);
    console.log(price)
    // Change total price with each quantity change.
    const addQuantity = () => {
        if (quantity < 10) {
            setQuantity((q) => q + 1);
            totalPriceHandler((t) => t + +price);
        }
    };

    const minusQuantity = () => {
        if (quantity > 1) {
            setQuantity((q) => q - 1);
            totalPriceHandler((t) => t - +price);
        }
    };

    return (
        <li>
            ITEM #{index} - {title}
            <div>ITEM {title}</div>
            <div>PRICE ${price}</div>
            <div>
                <button onClick={minusQuantity}>-</button>
                QUANTITY {quantity}
                <button onClick={addQuantity}>+</button>
            </div>
            <div>TOTAL ${price * quantity}</div>
            <button
                onClick={() => {
                    updateCart(title, "DELETE");
                    handle(title, price * quantity); // Force a re-render after API Call.
                }}
            >
                REMOVE
            </button>
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
