import PropTypes, { node } from "prop-types";
import { useLocation, Link, useParams } from "react-router-dom";
import { updateCart } from "../../scripts/shop";
import ShopHeader from "../shopHeader/shopHeader";
import styles from "./ItemShop.module.scss";
import Footer from "../footer/footer";
import { useEffect, useState } from "react";
import { getProducts } from "../../scripts/shop";
import Spinner from "../spinner/spinner";

function ItemShop() {
    const movieId = useParams().movieId;
    const [data, setData] = useState(useLocation().state);
    const [isLoaded, setIsLoaded] = useState(false);

    // If user opens product using a new tab, fetch product details else use state passed through Link.
    if (!data) {
        getProducts().then((r) => {
            const newData = r.items.find((a) => a.id == movieId);
            setData(newData);
        });
    }

    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true);
        }, 800);
    }, []);

    const randomBackdrop = data.backdrops[Math.floor(Math.random() * data.backdrops.length)];

    if (!isLoaded) {
        return (
            <div style={{ display: isLoaded ? "none" : "block" }}>
                <Spinner />
            </div>
        );
    } else {
        return (
            <>
                <ShopHeader />
                <main className={styles.itemContainer} style={{ opacity: isLoaded ? "1" : "0" }}>
                    <section className={styles.backdrop}>
                        <img src={randomBackdrop} alt="backdrop" />
                    </section>
                    <section className={styles.details}>
                        <div className={styles.poster}>
                            <img src={data.poster} alt="" />
                        </div>
                        <div className={styles.container}>
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
                                        updateCart({
                                            item: { title: data.title, price: +data.price, quantity: 1, poster: data.poster },
                                            method: "ADD",
                                        });
                                    }}
                                >
                                    Add To Cart
                                </button>
                            </div>
                        </div>
                    </section>
                </main>
                <Footer />
            </>
        );
    }
}

ItemShop.propTypes = {
    value: PropTypes.string,
};

export default ItemShop;
