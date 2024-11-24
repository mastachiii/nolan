import PropTypes from "prop-types";
import { useState } from "react";
import styles from "./filters.module.scss";
import { Link } from "react-router-dom";

function Filters({ currentGenre, genres, genreHandler, search, searchHandler }) {
    const [searchVal, setSearchVal] = useState(search);
    const handleSearch = (e) => {
        console.log(searchVal);
        setSearchVal(e.target.value);
    };

    return (
        <div className={styles.filter}>
            <h4>FILTER: </h4>
            <Link to={`?page=0&genre=''&search=${searchVal}`} className={styles.searchField}>
                <input type="text" value={searchVal} onChange={handleSearch} placeholder="Title" />
                <button onClick={searchHandler(searchVal)}>
                    <img src="/search.svg" alt="" />
                </button>
            </Link>
            <div>
                <span>
                    <Link to={`?page=0&genre=''&search=${search}`} className={styles.genreFilter}>
                        <button type="check" onClick={genreHandler(null)} className={!currentGenre ? styles.active : undefined}></button>
                        <p>All</p>
                    </Link>
                </span>
                {genres.map((g) => (
                    <span key={g}>
                        <Link to={`?page=0&genre=${g}&search=${search}`} className={styles.genreFilter}>
                            <button onClick={genreHandler(g)} className={currentGenre === g ? styles.active : undefined}></button>
                            <p>{g}</p>
                        </Link>
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
