import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./productCard.module.scss";

function ProductCard({ title, id, details }) {
    console.log(details);
    return (
        <div className={styles.card}>
            <Link to={`${id}`} state={details}>
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
