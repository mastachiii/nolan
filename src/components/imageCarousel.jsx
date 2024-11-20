import PropTypes from "prop-types";
import { useState } from "react";

function Carousel() {
    const images = [1, 2, 3, 4, 5, 6];
    const [index, setIndex] = useState(0);
    const handleIndexIncrement = () => setIndex((i) => i + 1);
    const handleIndexDecrement = () => setIndex((i) => i - 1);

    if (index >= images.length) return setIndex(0);
    if (index < 0) return setIndex(images.length - 1);

    return (
        <>
            <div>
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
