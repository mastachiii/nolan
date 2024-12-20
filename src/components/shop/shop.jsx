import { getProducts } from "../../scripts/shop";
import { useEffect, useState } from "react";
import Filters from "../filters/filters";
import ShopHeader from "../shopHeader/shopHeader";
import { genres } from "../../scripts/shop";
import Products from "../products/products";
import styles from "./shop.module.scss";
import Footer from "../footer/footer";
import { productAnimate } from "../../scripts/animations";
import { useSearchParams } from "react-router-dom";

function Shop() {
    const query = useSearchParams();
    const [items, setItems] = useState([]);
    const [genre, setGenre] = useState(query[0].get("genre"));
    const [search, setSearch] = useState(query[0].get("search") || "");
    const [currentPage, setCurrentPage] = useState(+query[0].get("page") || 0);
    const handleGenre = (genre) => () => {
        setGenre(genre);
        setCurrentPage(0);
        productAnimate();
    };
    const handleSearch = (search) => {
        return () => {
            setSearch(search);
            setCurrentPage(0);
        };
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
