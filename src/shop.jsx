import { getProducts } from "./scripts/shop";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Filters from "./components/filters";
import ShopHeader from "./components/shopHeader/shopHeader";
import { genres } from "./scripts/shop";

function Shop() {
    const [items, setItems] = useState([]);
    const [filter, setFilter] = useState(null);
    const [search, setSearch] = useState("");
    const handleFilter = (genre) => () => setFilter(genre);
    const handleSearch = (e) => setSearch(e.target.value);

    let itemsToShow = items;
    if (filter) itemsToShow = itemsToShow.filter((i) => i.genres.includes(filter));
    itemsToShow = itemsToShow.filter((i) => i.title.toUpperCase().includes(search.toUpperCase()));

    useEffect(() => {
        getProducts().then((response) => setItems(response.items));
    }, []);

    return (
        <div>
            <ShopHeader />
            <ul>
                {itemsToShow &&
                    itemsToShow.map((a, b) => (
                        <li key={a.id}>
                            <Link to={`${a.id}`} state={itemsToShow[b]}>
                                {a.title}
                            </Link>
                        </li>
                    ))}
            </ul>
            <Filters genres={genres} genreHandler={handleFilter} search={search} searchHandler={handleSearch} />
            <Link to="/">GO BACK</Link>
            <hr />
            <Link to="cart">TO CART</Link>
        </div>
    );
}

export default Shop;
