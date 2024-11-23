import PropTypes from "prop-types";
import ProductCard from "../productCard/productCard";
import style from "./products.module.scss";

function Products({ items, currentPage, genreFilter, searchFilter, pageHandler }) {
    let itemsFiltered = items.filter((i) => i.title.includes(searchFilter));
    itemsFiltered = genreFilter ? itemsFiltered.filter((i) => i.genres.includes(genreFilter)) : itemsFiltered;
    const itemsPerPage = 20;
    const maxPages = Math.ceil(itemsFiltered.length / itemsPerPage) - 1;

    // Show items based on current page X the number of items you want to display on a page, second parameter keeps our itemsToShow inbounds.
    const itemsToShow = itemsFiltered.filter((a, b) => b >= currentPage * itemsPerPage && b < (currentPage + 1) * itemsPerPage);

    function handleNextPage() {
        if (currentPage < maxPages) pageHandler((p) => p + 1);
    }

    function handlePrevPage() {
        if (currentPage > 0) pageHandler((p) => p - 1);
    }

    return (
        <div className={style.container}>
            <p className={style.pageCount}>
                Page {currentPage + 1} out of {maxPages + 1}
            </p>
            <section>
                <button onClick={handlePrevPage} className={style.pageButtons}>
                    <img src="/arrowPrev.svg" alt="" />
                </button>
                <div className={style.products}>
                    {itemsToShow && itemsToShow.map((a, b) => <ProductCard title={a.title} id={a.id} details={itemsToShow[b]} key={a.title} />)}
                </div>
                <button onClick={handleNextPage} className={`${style.pageButtons} ${style.nextButton}`}>
                    <img src="/arrowNext.svg" alt="" />
                </button>
            </section>
        </div>
    );
}

Products.propTypes = {
    items: PropTypes.array,
    currentPage: PropTypes.number,
    genreFilter: PropTypes.string,
    searchFilter: PropTypes.string,
    pageHandler: PropTypes.func,
};

export default Products;
