import Item from "./components/item";
import { Link } from "react-router-dom";

function Shop() {
    return (
        <div>
            <p>SHOP</p>
            <Link to="/">GO BACK</Link>
            <hr />
            <Link to="cart">TO CART</Link>
        </div>
    );
}

export default Shop;
