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
        setCurrentPage(0);
    };
    const handleSearch = (e) => {
        setSearch(e.target.value);
        setCurrentPage(0);
    };
    const handlePrevPage = () => (currentPage > 0 ? setCurrentPage((p) => p - 1) : null);

    function handleNextPage() {
        let itemsFiltered = items.filter((i) => i.title.includes(search));
        itemsFiltered = genre ? itemsFiltered.filter((i) => i.genres.includes(genre)) : itemsFiltered;

        const maxPages = Math.round(itemsFiltered.length / 20) - 1;

        console.log({ maxPages });

        if (currentPage < maxPages) setCurrentPage((p) => p + 1);
    }

    useEffect(() => {
        getProducts().then((response) => setItems(response.items));
    }, []);

    console.log(currentPage);

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
