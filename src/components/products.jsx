import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ProductCard from "./productCard/productCard";

function Products({ items, genreFilter, searchFilter }) {
    let itemsToShow = items;
    // If filter is false, show entire list else run the filter check.
    if (genreFilter) itemsToShow = itemsToShow.filter((i) => i.genres.includes(genreFilter));
    itemsToShow = itemsToShow.filter((i) => i.title.toUpperCase().includes(searchFilter.toUpperCase()));

    return <ul>{itemsToShow && itemsToShow.map((a, b) => <ProductCard title={a.title} id={a.id} details={itemsToShow[b]} key={a.title} />)}</ul>;
}

Products.propTypes = {
    items: PropTypes.array,
    genreFilter: PropTypes.string,
    searchFilter: PropTypes.string,
};

export default Products;
