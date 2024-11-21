import { getProducts } from "../../scripts/shop";
import { useEffect, useState } from "react";
import Filters from "../filters/filters";
import ShopHeader from "../shopHeader/shopHeader";
import { genres } from "../../scripts/shop";
import Products from "../products/products";
import styles from "./shop.module.scss";

function Shop() {
    const [items, setItems] = useState([]);
    const [genre, setGenre] = useState(null);
    const [search, setSearch] = useState("");
    const handleGenre = (genre) => () => setGenre(genre);
    const handleSearch = (e) => setSearch(e.target.value);

    useEffect(() => {
        getProducts().then((response) => setItems(response.items));
    }, []);

    return (
        <main className={styles.shop}>
            <ShopHeader />
            <section>
                <Products items={items} genreFilter={genre} searchFilter={search} />
                <Filters genres={genres} genreHandler={handleGenre} search={search} searchHandler={handleSearch} currentGenre={genre} />
            </section>
        </main>
    );
}

export default Shop;
