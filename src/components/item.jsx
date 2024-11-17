import PropTypes from "prop-types";

function Item({ value }) {
    return (
        <div>
            <p>Item #{value}</p>
            <button>Add To Cart</button>
        </div>
    );
}

Item.propTypes = {
    value: PropTypes.string,
};

export default Item;
