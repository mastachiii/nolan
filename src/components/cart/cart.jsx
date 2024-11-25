import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCart } from "../../scripts/shop";
import ItemCart from "../itemCart/itemCart";
import ShopHeader from "../shopHeader/shopHeader";
import styles from "./cart.module.scss";

function Cart() {
    const [cart, setCart] = useState(null);
    const [totalPrice, setTotalPrice] = useState(null);

    useEffect(() => {
        getCart().then((response) => {
            setCart(response.items);
            setTotalPrice(response.items.reduce((a, b) => (a += b.price * b.quantity), 0));
        });
    }, []);

    const deleteCartItem = (title, price) => {
        setCart([...cart].filter((a) => a.title !== title));
        setTotalPrice((t) => t - price);
    };

    return (
        <div>
            <ShopHeader />
            <ul className={styles.cart}>
                {cart &&
                    cart.map((a) => (
                        <ItemCart
                            title={a.title}
                            handle={deleteCartItem}
                            key={a.title}
                            quantity={a.quantity}
                            poster={a.poster}
                            price={a.price}
                            totalPriceHandler={setTotalPrice}
                        />
                    ))}
            </ul>
            <div className={styles.subTotal}>
                <span>
                    <p>SUBTOTAL:</p>
                    <p>${totalPrice ? totalPrice.toFixed(2) : 0} </p>
                </span>
                <button>CHECKOUT</button>
            </div>
            <Link to="/shop">BACK TO SHOP</Link>
        </div>
    );
}

export default Cart;
