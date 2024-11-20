import Carousel from "../imageCarousel/imageCarousel";
import styles from "./showcase.module.scss"
function ShowCase() {

    return (
        <section className={styles.showCase}>
            <h1>Only the finest</h1>
            <Carousel />
            <p>Hours of scouring through Letterboxd lists to .</p>
        </section>
    );
}

export default ShowCase;
