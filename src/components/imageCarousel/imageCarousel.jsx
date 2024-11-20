import { useEffect, useState } from "react";
import styles from './imageCarousel.module.scss'

function Carousel() {
    const images = [
        {
            title: "The Godfather",
            image: "https://image.tmdb.org/t/p/original/vJ8H8skNbNzXWVyDNSgxTZMTPA6.jpg",
        },
        {
            title: "Se7en",
            image: "https://image.tmdb.org/t/p/original/hWrxRwnnisPE4LJdER3FmdeM39b.jpg",
        },
        {
            title: "The Pianist",
            image: "https://image.tmdb.org/t/p/original/cqOmm81h5zVl182kzbr0xSKD6nF.jpg",
        },
        {
            title: "Shutter Island",
            image: "https://image.tmdb.org/t/p/original/8xt8AMb1OKC63AdhNSaYBWxB4Iq.jpg",
        },
        {
            title: "Taxi Driver",
            image: "https://image.tmdb.org/t/p/original/a58oc5qGNazb3QOxEH8eG5S7gjr.jpg",
        },
    ];
    const [index, setIndex] = useState(0);
    const handleIndexIncrement = () => setIndex((i) => i + 1);

    useEffect(() => {
        const timeout = setTimeout(handleIndexIncrement, 4000);

        return () => {
            clearTimeout(timeout);
        };
    }, [index]);

    if (index >= images.length) return setIndex(0);

    return (
        <>
            <div className={styles.carousel}>
                <img src={images[index].image} alt=""/>
                <p>{images[index].title}</p>
            </div>
        </>
    );
}

export default Carousel;
