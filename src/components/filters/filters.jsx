import PropTypes from "prop-types";
import styles from "./filters.module.scss";

function Filters({ genres, genreHandler, search, searchHandler }) {
    return (
        <div className={styles.filter}>
            <input type="text" value={search} onChange={searchHandler} />
            <div>
                <span>
                    <button onClick={genreHandler(null)}></button>
                    <p>All</p>
                </span>
                {genres.map((g) => (
                    <span key={g}>
                        <button onClick={genreHandler(g)}></button>
                        <p>{g}</p>
                    </span>
                ))}
            </div>
        </div>
    );
}

Filters.propTypes = {
    genres: PropTypes.array,
    genreHandler: PropTypes.func,
    search: PropTypes.string,
    searchHandler: PropTypes.func,
};

export default Filters;
