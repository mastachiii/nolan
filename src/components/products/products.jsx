import PropTypes from "prop-types";
import ProductCard from "../productCard/productCard";
import style from "./products.module.scss";

function Products({ items, currentPage, genreFilter, searchFilter }) {
    let itemsToShow = items;

    if (genreFilter) itemsToShow = itemsToShow.filter((i) => i.genres.includes(genreFilter));

    itemsToShow = itemsToShow.filter((i) => i.title.toUpperCase().includes(searchFilter.toUpperCase()));
    // Show items based on current page X the number of items you want to display on a page, second parameter keeps our itemsToShow inbounds.
    itemsToShow = itemsToShow.filter((a, b) => b >= currentPage * 20 && b < (currentPage + 1) * 20);

    return (
        <div className={style.products}>
            {itemsToShow && itemsToShow.map((a, b) => <ProductCard title={a.title} id={a.id} details={itemsToShow[b]} key={a.title} />)}
        </div>
    );
}

Products.propTypes = {
    items: PropTypes.array,
    currentPage: PropTypes.number,
    genreFilter: PropTypes.string,
    searchFilter: PropTypes.string,
};

export default Products;
