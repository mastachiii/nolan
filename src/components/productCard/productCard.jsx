import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./productCard.module.scss";
import { scrollWindowToTop } from "../../scripts/dom";

function ProductCard({ title, id, details }) {
    return (
        <div className={styles.card}>
            <Link to={`${id}`} state={details} onClick={scrollWindowToTop}>
                <img src={details.poster} alt="" />
                <p>{title}</p>
                <div>
                    <p>${details.price}</p>
                </div>
            </Link>
        </div>
    );
}

ProductCard.propTypes = {
    title: PropTypes.string,
    id: PropTypes.number,
    details: PropTypes.object,
};

export default ProductCard;
