import { Link } from "react-router-dom";
import styles from './shopHeader.module.scss'

function ShopHeader() {
    return (
        <header className={styles.header}>
            <Link to="/">NOLAN</Link>
            <img src="/cart.svg" alt="cart" />
        </header>
    );
}

export default ShopHeader;
