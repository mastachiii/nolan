import { getProducts } from "./scripts/shop";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Filters from "./components/filters";
import ShopHeader from "./components/shopHeader/shopHeader";
import { genres } from "./scripts/shop";
import Products from "./components/products";

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
        <div>
            <ShopHeader />
            <Products items={items} genreFilter={genre} searchFilter={search} />
            <Filters genres={genres} genreHandler={handleGenre} search={search} searchHandler={handleSearch} />
            <Link to="/">GO BACK</Link>
            <hr />
            <Link to="cart">TO CART</Link>
        </div>
    );
}

export default Shop;
