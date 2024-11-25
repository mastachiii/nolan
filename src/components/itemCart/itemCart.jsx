import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { updateCart } from "../../scripts/shop";
import styles from "./itemCart.module.scss";

function ItemCart({ title, price, quantity, poster, handle, totalPriceHandler }) {
    const [currentQuantity, setCurrentQuantity] = useState(quantity);

    // Change total price with each quantity change.
    const addQuantity = () => {
        if (currentQuantity < 10) {
            setCurrentQuantity((q) => q + 1);
            totalPriceHandler((t) => t + price);
            updateCart({ item: { title, price, poster, quantity: currentQuantity + 1 }, method: "UPDATE" });
        }
    };

    const minusQuantity = () => {
        if (currentQuantity > 1) {
            setCurrentQuantity((q) => q - 1);
            totalPriceHandler((t) => t - +price);
        }
    };

    return (
        <li className={styles.itemCart}>
            <div className={styles.item}>
                <h4>ITEM</h4>
                <span>
                    <img src={poster} alt="" />
                    <p>{title}</p>
                </span>
            </div>
            <div>
                <h4>PRICE </h4>
                <p>${price}</p>
            </div>
            <div className={styles.quantity}>
                <h4>QUANTITY</h4>
                <span>
                    <button onClick={minusQuantity}>
                        <img src="/minus.svg" alt="" />
                    </button>
                    <p>{currentQuantity}</p>
                    <button onClick={addQuantity}>
                        <img src="/add.svg" alt="" />
                    </button>
                </span>
            </div>
            <div>
                <h4>TOTAL</h4>
                <p>${(price * currentQuantity).toFixed(2)}</p>
            </div>
            <button
                onClick={() => {
                    updateCart({ key: title, method: "DELETE" });
                    handle(title, price * currentQuantity); // Force a re-render after API Call.
                }}
                className={styles.remove}
            >
                <p>REMOVE</p>
            </button>
        </li>
    );
}

ItemCart.propTypes = {
    title: PropTypes.string,
    price: PropTypes.number,
    index: PropTypes.number,
    quantity: PropTypes.number,
    handle: PropTypes.func,
    totalPriceHandler: PropTypes.func,
};

export default ItemCart;
