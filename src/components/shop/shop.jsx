import { getProducts } from "../../scripts/shop";
import { useEffect, useState } from "react";
import Filters from "../filters/filters";
import ShopHeader from "../shopHeader/shopHeader";
import { genres } from "../../scripts/shop";
import Products from "../products/products";
import styles from "./shop.module.scss";
import Footer from "../footer/footer";
import { productAnimate } from "../../scripts/animations";
import { useLocation, useSearchParams } from "react-router-dom";

function Shop() {
    const [items, setItems] = useState([]);
    const [genre, setGenre] = useState(null);
    const [search, setSearch] = useState("");
    const query = useSearchParams();
    const [currentPage, setCurrentPage] = useState(+query[0].get("page"));
    console.log(query[0].get("page"));
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
        // console.log(currentPage);
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
