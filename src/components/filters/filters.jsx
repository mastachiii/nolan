import PropTypes from "prop-types";
import styles from "./filters.module.scss";
import { Link } from "react-router-dom";

function Filters({ currentGenre, genres, genreHandler, search, searchHandler }) {
    return (
        <div className={styles.filter}>
            <h4>FILTER: </h4>
            <input type="text" value={search} onChange={searchHandler} placeholder="Title" />
            <div>
                <span>
                    <Link to="?page=0">
                        <button type="check" onClick={genreHandler(null)} className={currentGenre === null ? styles.active : undefined}></button>
                    </Link>
                    <p>All</p>
                </span>
                {genres.map((g) => (
                    <span key={g}>
                        <Link to="?page=0">
                            <button onClick={genreHandler(g)} className={currentGenre === g ? styles.active : undefined}></button>
                        </Link>
                        <p>{g}</p>
                    </span>
                ))}
            </div>
        </div>
    );
}

Filters.propTypes = {
    currentGenre: PropTypes.string,
    genres: PropTypes.array,
    genreHandler: PropTypes.func,
    search: PropTypes.string,
    searchHandler: PropTypes.func,
};

export default Filters;
