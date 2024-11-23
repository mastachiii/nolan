import PropTypes from "prop-types";
import { useLocation, Link } from "react-router-dom";
import { updateCart } from "../../scripts/shop";
import ShopHeader from "../shopHeader/shopHeader";

function ItemShop() {
    const data = useLocation().state;
    console.log(data);
    return (
        <div>
            <ShopHeader />
            <div>
                <img src={data.backdrops[0]} alt="backdrop" />
            </div>
            <section>
                <div>POSTER</div>
                <p>{data.title}</p>
                <p>{data.directors.join(", ")}</p>
                <p>{data.actors.join(", ")}</p>
                <p>{data.description}</p>
                <div>buying stuff</div>
            </section>
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
