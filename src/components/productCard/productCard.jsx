import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./productCard.module.scss";

function ProductCard({ title, id, details }) {
    console.log(details);
    return (
        <div className={styles.card}>
            <img src={details.poster} alt="" />
            <Link to={`${id}`} state={details}>
                {title}
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
