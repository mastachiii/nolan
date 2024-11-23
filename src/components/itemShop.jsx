import PropTypes from "prop-types";
import { useLocation, Link } from "react-router-dom";
import { updateCart } from "../scripts/shop";

function ItemShop() {
    const data = useLocation().state;
    
    return (
        <div>
            <p>{data.title}</p>
            <button
                onClick={() => {
                    updateCart({ title: data.title, price: data.price }, "ADD");
                }}
            >
                Add To Cart
            </button>
            <Link to="/shop">GO BACK</Link>
            <Link to="/shop/cart">GO TO CART</Link>
        </div>
    );
}

ItemShop.propTypes = {
    value: PropTypes.string,
};

export default ItemShop;
