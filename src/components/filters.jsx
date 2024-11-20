import PropTypes from "prop-types";

function Filters({ genres, handler }) {
    return (
        <div>
            <button onClick={handler(null)}>ALL</button>
            {genres.map((g) => (
                <button key={g} onClick={handler(g)}>
                    {g}
                </button>
            ))}
        </div>
    );
}

Filters.propTypes = {
    genres: PropTypes.array,
    handler: PropTypes.func,
};

export default Filters;
