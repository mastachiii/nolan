import PropTypes from "prop-types";
import { useState } from "react";

function Carousel() {
    const images = [
        {
            1: {
                title: "The Godfather",
                image: "https://image.tmdb.org/t/p/original/vJ8H8skNbNzXWVyDNSgxTZMTPA6.jpg",
            },
            2: {
                title: "My Neighbor Totoro",
                image: "https://image.tmdb.org/t/p/original/6O1mOoTXuc1WqjKd2R7MFQHZ7Eb.jpg",
            },
            3: {
                title: "The Pianist",
                image: "https://image.tmdb.org/t/p/original/cqOmm81h5zVl182kzbr0xSKD6nF.jpg",
            },
            4: {
                title: "Past Lives",
                image: "https://image.tmdb.org/t/p/original/7HR38hMBl23lf38MAN63y4pKsHz.jpg",
            },
        },
    ];
    const [index, setIndex] = useState(0);
    const handleIndexIncrement = () => setIndex((i) => i + 1);
    const handleIndexDecrement = () => setIndex((i) => i - 1);

    if (index >= images.length) return setIndex(0);
    if (index < 0) return setIndex(images.length - 1);

    return (
        <>
            <div style={{ display: "flex" }}>
                <button onClick={handleIndexDecrement}>LEFT</button>
                <div style={{ fontSize: "4rem" }}>{images[index]}</div>
                <button onClick={handleIndexIncrement}>RIGHT</button>
            </div>
            <p>Movie title</p>
        </>
    );
}

Carousel.propTypes = {
    index: PropTypes.number,
};

export default Carousel;
