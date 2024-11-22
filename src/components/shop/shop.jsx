import { getProducts } from "../../scripts/shop";
import { useEffect, useState } from "react";
import Filters from "../filters/filters";
import ShopHeader from "../shopHeader/shopHeader";
import { genres } from "../../scripts/shop";
import Products from "../products/products";
import styles from "./shop.module.scss";
import Footer from "../footer/footer";

function Shop() {
    const [items, setItems] = useState([]);
    const [genre, setGenre] = useState(null);
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(0);
    const handleGenre = (genre) => () => {
        setGenre(genre);
        handlePageReset();
    };
    const handleSearch = (e) => setSearch(e.target.value);
    const handlePrevPage = () => (currentPage > 0 ? setCurrentPage((p) => p - 1) : null);
    // Need to filter items with current genre to dynamically change the page count with each genre change
    const handleNextPage = () =>
        currentPage < Math.floor(items.filter((a) => (genre ? a.genres.includes(genre) : a)).length / 20) ? setCurrentPage((p) => p + 1) : null;
    const handlePageReset = () => setCurrentPage(0);

    useEffect(() => {
        getProducts().then((response) => setItems(response.items));
    }, []);

    // TODO: Need to Reset Current Page when filtering genres / search.

    return (
        <>
            <main className={styles.shop}>
                <ShopHeader />
                <section>
                    <Filters genres={genres} genreHandler={handleGenre} search={search} searchHandler={handleSearch} currentGenre={genre} />
                    <Products items={items} currentPage={currentPage} genreFilter={genre} searchFilter={search} />
                </section>
                <button onClick={handlePrevPage}>PREV</button>
                <button onClick={handleNextPage}>NEXT</button>
            </main>
            <Footer />
        </>
    );
}

export default Shop;
