import PropTypes from "prop-types";
import ProductCard from "../productCard/productCard";
import style from "./products.module.scss";

function Products({ items, currentPage, genreFilter, searchFilter, pageHandler }) {
    let itemsFiltered = items.filter((i) => i.title.includes(searchFilter));
    itemsFiltered = genreFilter ? itemsFiltered.filter((i) => i.genres.includes(genreFilter)) : itemsFiltered;
    const itemsPerPage = 20;
    const maxPages = Math.ceil(itemsFiltered.length / itemsPerPage) - 1;

    console.log({ maxPages });
    // Show items based on current page X the number of items you want to display on a page, second parameter keeps our itemsToShow inbounds.
    const itemsToShow = itemsFiltered.filter((a, b) => b >= currentPage * itemsPerPage && b < (currentPage + 1) * itemsPerPage);

    function handleNextPage() {
        console.log({ currentPage, itemsToShow });
        if (currentPage < maxPages) pageHandler((p) => p + 1);
    }

    function handlePrevPage() {
        if (currentPage > 0) pageHandler((p) => p - 1);
    }

    return (
        <>
            <p>
                Page {currentPage + 1} out of {maxPages + 1}
            </p>
            <div className={style.products}>
                {itemsToShow && itemsToShow.map((a, b) => <ProductCard title={a.title} id={a.id} details={itemsToShow[b]} key={a.title} />)}
            </div>
            <button onClick={handlePrevPage}>PREV</button>
            <button onClick={handleNextPage}>NEXT</button>
        </>
    );
}

Products.propTypes = {
    items: PropTypes.array,
    currentPage: PropTypes.number,
    genreFilter: PropTypes.string,
    searchFilter: PropTypes.string,
};

export default Products;
