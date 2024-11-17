import Item from "./components/item";
import { Link } from "react-router-dom";

const items = (() => {
    const arr = [];

    for (let i = 1; i <= 5; i++) {
        arr.push(<Item value={i} />);
    }

    return arr;
})();

function Shop() {
    return (
        <div>
            <p>SHOP</p>
            {items}
            <Link to="/">GO BACK</Link>
            <hr />
            <Link to="cart">TO CART</Link>
        </div>
    );
}

export default Shop;
