import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCart } from "../../scripts/shop";
import ItemCart from "../itemCart/itemCart";
import ShopHeader from "../shopHeader/shopHeader";
import Footer from "../footer/footer";
import styles from "./cart.module.scss";

function Cart() {
    const [cart, setCart] = useState([]);
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
                {cart.length <= 0 ? (
                    <p className={styles.empty}>YOUR CART IS EMPTY.</p>
                ) : (
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
                    ))
                )}
            </ul>
            <div className={styles.subTotal}>
                <span>
                    <p>SUBTOTAL:</p>
                    <p>${totalPrice > 0 ? totalPrice.toFixed(2) : 0} </p>
                </span>
                <button>CHECKOUT</button>
                <Link to="/shop" className={styles.link}>
                    BACK TO SHOP
                </Link>
            </div>
            <Footer />
        </div>
    );
}

export default Cart;
