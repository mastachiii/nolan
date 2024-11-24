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
            <input type="text" value={searchVal} onChange={handleSearch} placeholder="Title" />
            <Link to={`?page=0&genre=''&search=${searchVal}`}>
                <button onClick={searchHandler(searchVal)}>SEARCH</button>
            </Link>
            <div>
                <span>
                    <Link to={`?page=0&genre=''&search=${search}`}>
                        <button type="check" onClick={genreHandler(null)} className={!currentGenre ? styles.active : undefined}></button>
                    </Link>
                    <p>All</p>
                </span>
                {genres.map((g) => (
                    <span key={g}>
                        <Link to={`?page=0&genre=${g}&search=${search}`}>
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
