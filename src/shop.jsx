import { getProducts } from "./scripts/shop";
import { useEffect, useState } from "react";
import ItemShop from "./components/itemShop";
import { Link } from "react-router-dom";

function Shop() {
    const [items, setItems] = useState(null);

    useEffect(() => {
        getProducts().then((response) => setItems(response.items));
    }, []);

    return (
        <div>
            <p>SHOP</p>
            <ul>
                {items &&
                    items.map((a) => (
                        <li key={a.id}>
                            <Link to={`${a.id}`}>{a.title}</Link>
                        </li>
                    ))}
            </ul>
            <Link to="/">GO BACK</Link>
            <hr />
            <Link to="cart">TO CART</Link>
        </div>
    );
}

export default Shop;
