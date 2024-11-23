import PropTypes from "prop-types";
import { useLocation, Link } from "react-router-dom";
import { updateCart } from "../../scripts/shop";
import ShopHeader from "../shopHeader/shopHeader";
import styles from "./ItemShop.module.scss";

function ItemShop() {
    const data = useLocation().state;
    console.log(data);
    return (
        <>
            <ShopHeader />
            <main>
                <section className={styles.backdrop}>
                    <img src={data.backdrops[0]} alt="backdrop" />
                </section>
                <section className={styles.details}>
                    <div className={styles.poster}>
                        <img src={data.poster} alt="" />
                    </div>
                    <p>{data.title}</p>
                    <p>{data.directors.join(", ")}</p>
                    <p>{data.actors.join(", ")}</p>
                    <p>{data.description}</p>
                    <div>buying stuff</div>
                </section>
                <button
                    onClick={() => {
                        updateCart({ title: data.title, price: data.price }, "ADD");
                    }}
                >
                    Add To Cart
                </button>
                <Link to="/shop">GO BACK</Link>
                <Link to="/shop/cart">GO TO CART</Link>
            </main>
        </>
    );
}

ItemShop.propTypes = {
    value: PropTypes.string,
};

export default ItemShop;
