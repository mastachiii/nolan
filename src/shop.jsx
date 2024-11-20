import { getProducts } from "./scripts/shop";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Filters from "./components/filters";
import { genres } from "./scripts/shop";

function Shop() {
    const [items, setItems] = useState(null);
    const [filter, setFilter] = useState(null);
    const handleFilter = (genre) => () => setFilter(genre);

    let itemsToShow = items;
    if (filter) itemsToShow = itemsToShow.filter((i) => i.genres.includes(filter));

    useEffect(() => {
        getProducts().then((response) => setItems(response.items));
    }, []);

    return (
        <div>
            <p>SHOP</p>
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
            <Filters genres={genres} handler={handleFilter} />
            <Link to="/">GO BACK</Link>
            <hr />
            <Link to="cart">TO CART</Link>
        </div>
    );
}

export default Shop;
