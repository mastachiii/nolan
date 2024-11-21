import PropTypes from "prop-types";

function Filters({ genres, genreHandler, search, searchHandler }) {
    return (
        <div>
            <input type="text" value={search} onChange={searchHandler} />
            <button onClick={genreHandler(null)}>ALL</button>
            {genres.map((g) => (
                <button key={g} onClick={genreHandler(g)}>
                    {g}
                </button>
            ))}
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
