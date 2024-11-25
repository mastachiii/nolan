import { Link } from "react-router-dom";
import styles from "./shopHeader.module.scss";

function ShopHeader() {
    return (
        <header className={styles.header}>
            <Link to="/">NOLAN</Link>
            <Link to="/shop/cart">
                <img src="/cart.svg" alt="cart" />
            </Link>
        </header>
    );
}

export default ShopHeader;
