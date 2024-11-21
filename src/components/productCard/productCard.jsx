import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function ProductCard({ title, id, details }) {
    // console.log(details);
    return (
        <li>
            {/* <img src={details.poster} alt="" /> */}
            <Link to={`${id}`} state={details}>
                {title}
            </Link>
        </li>
    );
}

ProductCard.propTypes = {
    title: PropTypes.string,
    id: PropTypes.number,
    details: PropTypes.object,
};

export default ProductCard;
