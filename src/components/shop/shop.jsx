import { getProducts } from "../../scripts/shop";
import { useEffect, useState } from "react";
import Filters from "../filters/filters";
import ShopHeader from "../shopHeader/shopHeader";
import { genres } from "../../scripts/shop";
import Products from "../products/products";
import styles from "./shop.module.scss";
import Footer from "../footer/footer";
import { productAnimate } from "../../scripts/animations";

function Shop() {
    const [items, setItems] = useState([]);
    const [genre, setGenre] = useState(null);
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(0);
    const handleGenre = (genre) => () => {
        setGenre(genre);
        setCurrentPage(0);
        productAnimate();
    };
    const handleSearch = (e) => {
        setSearch(e.target.value.toString());
        setCurrentPage(0);
    };

    useEffect(() => {
        getProducts().then((response) => setItems(response.items));
    }, []);

    return (
        <>
            <main className={styles.shop}>
                <ShopHeader />
                <section>
                    <Filters genres={genres} genreHandler={handleGenre} search={search} searchHandler={handleSearch} currentGenre={genre} />
                    <Products items={items} currentPage={currentPage} genreFilter={genre} searchFilter={search} pageHandler={setCurrentPage} />
                </section>
            </main>
            <Footer />
        </>
    );
}

export default Shop;
