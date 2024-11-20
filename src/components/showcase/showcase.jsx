import Carousel from "../imageCarousel";
import styles from "./showcase.module.scss"
function ShowCase() {

    return (
        <section className={styles.showCase}>
            <h1>Only the finest</h1>
            <Carousel />
            <p>Some cool lines.</p>
        </section>
    );
}

export default ShowCase;
