import PropTypes from "prop-types";
import ProductCard from "../productCard/productCard";
import style from "./products.module.scss";

function Products({ items, currentPage, genreFilter, searchFilter }) {
    // If filter is false, show entire list else run the filter check.

    console.log(currentPage);
    //REAFCTOR
    let itemsToShow = items.filter((a, b) => b >= currentPage * 10 && b < (currentPage + 1) * 10);

    if (genreFilter) itemsToShow = itemsToShow.filter((i) => i.genres.includes(genreFilter));
    itemsToShow = itemsToShow.filter((i) => i.title.toUpperCase().includes(searchFilter.toUpperCase()));

    return (
        <div className={style.products}>
            {itemsToShow && itemsToShow.map((a, b) => <ProductCard title={a.title} id={a.id} details={itemsToShow[b]} key={a.title} />)}
        </div>
    );
}

Products.propTypes = {
    items: PropTypes.array,
    genreFilter: PropTypes.string,
    searchFilter: PropTypes.string,
};

export default Products;
