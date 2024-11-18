import PropTypes from "prop-types";
import { updateCart } from "../scripts/shop";

function ItemShop({ value }) {
    return (
        <div>
            <p>{value}</p>
            <button
                onClick={() => {
                    updateCart(value, "ADD");
                }}
            >
                Add To Cart
            </button>
        </div>
    );
}

ItemShop.propTypes = {
    value: PropTypes.string,
};

export default ItemShop;
