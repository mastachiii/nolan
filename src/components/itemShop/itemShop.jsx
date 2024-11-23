import PropTypes from "prop-types";
import { useLocation, Link } from "react-router-dom";
import { updateCart } from "../../scripts/shop";
import ShopHeader from "../shopHeader/shopHeader";
import styles from "./ItemShop.module.scss";
import Footer from "../footer/footer";
import { useEffect } from "react";

function ItemShop() {
    const data = useLocation().state;
    
    return (
        <>
            <ShopHeader />
            <main className={styles.itemContainer}>
                <section className={styles.backdrop}>
                    <img src={data.backdrops[0]} alt="backdrop" />
                </section>
                <section className={styles.details}>
                    <div className={styles.poster}>
                        <img src={data.poster} alt="" />
                    </div>
                    <div className={styles.text}>
                        <h3>{data.title}</h3>
                        <p>
                            <em>Directed by: {data.directors.join(", ")}</em>
                        </p>
                        <p>
                            <em>Starring: {data.actors.join(", ")}</em>{" "}
                        </p>
                        <p>{data.description}</p>
                    </div>
                    <div className={styles.pricing}>
                        <p>${data.price}</p>
                        <button
                            onClick={() => {
                                updateCart({ title: data.title, price: data.price }, "ADD");
                            }}
                        >
                            Add To Cart
                        </button>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

ItemShop.propTypes = {
    value: PropTypes.string,
};

export default ItemShop;
