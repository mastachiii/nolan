import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { updateCart } from "../scripts/shop";

function ItemCart({ title, price, quantity, index, handle, totalPriceHandler }) {
    const [currentQuantity, setCurrentQuantity] = useState(quantity);

    // Change total price with each quantity change.
    const addQuantity = () => {
        if (currentQuantity < 10) {
            setCurrentQuantity((q) => q + 1);
            totalPriceHandler((t) => t + price);
            updateCart({ item: { title, price, quantity: currentQuantity + 1 }, method: "UPDATE" });
        }
    };

    const minusQuantity = () => {
        if (currentQuantity > 1) {
            setCurrentQuantity((q) => q - 1);
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
                QUANTITY {currentQuantity}
                <button onClick={addQuantity}>+</button>
            </div>
            <div>TOTAL ${(price * currentQuantity).toFixed(2)}</div>
            <button
                onClick={() => {
                    updateCart({ key: title, method: "DELETE" });
                    handle(title, price * currentQuantity); // Force a re-render after API Call.
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
