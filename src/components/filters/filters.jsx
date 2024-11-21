import PropTypes from "prop-types";
import styles from "./filters.module.scss";

function Filters({ currentGenre, genres, genreHandler, search, searchHandler }) {
    return (
        <div className={styles.filter}>
            <h4>FILTER: </h4>
            <input type="text" value={search} onChange={searchHandler} placeholder="Title" />
            <div>
                <span>
                    <button type="check" onClick={genreHandler(null)} className={currentGenre === null && styles.active}></button>
                    <p>All</p>
                </span>
                {genres.map((g) => (
                    <span key={g}>
                        <button onClick={genreHandler(g)} className={currentGenre === g && styles.active}></button>
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
