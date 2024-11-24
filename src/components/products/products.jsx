import PropTypes from "prop-types";
import ProductCard from "../productCard/productCard";
import style from "./products.module.scss";
import { productAnimate } from "../../scripts/animations";
import { Link } from "react-router-dom";

function Products({ items, currentPage, genreFilter, searchFilter, pageHandler }) {
    let itemsFiltered = items.filter((i) => i.title.toLowerCase().includes(searchFilter.toLowerCase()));
    itemsFiltered = genreFilter ? itemsFiltered.filter((i) => i.genres.includes(genreFilter)) : itemsFiltered;
    const itemsPerPage = 20;
    const maxPages = Math.ceil(itemsFiltered.length / itemsPerPage) - 1;
    // For page routing.
    let prevPage = currentPage > 0 ? currentPage - 1 : 0;
    let nextPage = currentPage < maxPages ? currentPage + 1 : maxPages;

    // Show items based on current page X the number of items you want to display on a page, second parameter keeps our itemsToShow inbounds.
    const itemsToShow = itemsFiltered.filter((a, b) => b >= currentPage * itemsPerPage && b < (currentPage + 1) * itemsPerPage);

    function handleNextPage() {
        console.log(genreFilter);
        if (currentPage < maxPages) {
            pageHandler((p) => p + 1);
            productAnimate(style.products);
        }
    }

    function handlePrevPage() {
        console.log(currentPage);
        if (currentPage > 0) {
            pageHandler((p) => p - 1);
            productAnimate();
        }
    }

    return (
        <div className={style.container}>
            <p className={style.pageCount}>
                Page {currentPage + 1} out of {maxPages + 1}
            </p>
            <section>
                <Link to={`?page=${prevPage}&genre=${genreFilter ? genreFilter : ""}&search=${searchFilter}`}>
                    {" "}
                    <button onClick={handlePrevPage} className={style.pageButtons}>
                        <img src="/arrowPrev.svg" alt="" />
                    </button>
                </Link>
                <div className={style.products} id="products">
                    {itemsToShow && itemsToShow.map((a, b) => <ProductCard title={a.title} id={a.id} details={itemsToShow[b]} key={a.title} />)}
                </div>
                <Link to={`?page=${nextPage}&genre=${genreFilter ? genreFilter : ""}&search=${searchFilter}`}>
                    <button onClick={handleNextPage} className={`${style.pageButtons} ${style.nextButton}`}>
                        <img src="/arrowNext.svg" alt="" />
                    </button>
                </Link>
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
