import axios from "axios";
import { useEffect, useState } from "react";
import Item from "./components/item";
import { Link } from "react-router-dom";

function Shop() {
    const [items, setItems] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:3001/items").then((r) => setItems(r.data.content));
    }, []);

    return (
        <div>
            <p>SHOP</p>
            {items && items.map((a) => (
                <Item value={a} key={a} />
            ))}
            <Link to="/">GO BACK</Link>
            <hr />
            <Link to="cart">TO CART</Link>
        </div>
    );
}

export default Shop;
