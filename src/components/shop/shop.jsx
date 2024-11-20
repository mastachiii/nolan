import { getProducts } from "../../scripts/shop";
import { useEffect, useState } from "react";
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
                    items.map((a, b) => (
                        <li key={a.id}>
                            <Link to={`${a.id}`} state={items[b]}>
                                {a.title}
                            </Link>
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
