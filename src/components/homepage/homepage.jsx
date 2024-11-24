import { Link } from "react-router-dom";
import styles from "./homepage.module.scss";
import ShowCase from "../showcase/showcase";
import Footer from "../footer/footer";

function Homepage() {
    return (
        <>
            <main className={styles.landingPage}>
                <nav className={styles.navBar}>
                    <h3>NOLAN</h3>
                </nav>
                <div className={styles.mainPage}>
                    <section>
                        <p>Cinema at its finest.</p>
                        <div>
                            <Link to="shop?page=0">SHOP NOW</Link>
                        </div>
                    </section>
                    <img src="/nolan-murphy.jpg" alt="" />
                </div>
            </main>
            <ShowCase />
            <Footer />
        </>
    );
}

export default Homepage;
