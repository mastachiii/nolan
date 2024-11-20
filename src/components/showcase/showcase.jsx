import Carousel from "../imageCarousel/imageCarousel";
import styles from "./showcase.module.scss"
function ShowCase() {

    return (
        <section className={styles.showCase}>
            <Carousel />
            <h1>Only the finest</h1>
            <p>Hours of scouring through Letterboxd lists to .</p>
        </section>
    );
}

export default ShowCase;
