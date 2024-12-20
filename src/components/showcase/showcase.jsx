import Carousel from "../imageCarousel/imageCarousel";
import styles from "./showcase.module.scss";
function ShowCase() {
    return (
        <section className={styles.showCase}>
            <Carousel />
            <div>
                <h1>Only the best</h1>
                <p>Hours of scouring through Letterboxd lists to make the most opinionated movie marketplace on the web.</p>
            </div>
        </section>
    );
}

export default ShowCase;
