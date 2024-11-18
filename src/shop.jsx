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
            {items && items.map((a) => <ItemShop value={a} key={a} />)}
            <Link to="/">GO BACK</Link>
            <hr />
            <Link to="cart">TO CART</Link>
        </div>
    );
}

export default Shop;
