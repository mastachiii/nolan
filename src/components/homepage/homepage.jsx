import { Link } from "react-router-dom";
import styles from "./homepage.module.scss";

function Homepage() {
    return (
        <main className={styles.landingPage}>
            <nav className={styles.navBar}>
                <h3>NOLAN</h3>
            </nav>
            <div className={styles.mainPage}>
                <p>Cinema at it{"'"}s best.</p>
                <div>
                    <Link to="shop">SHOP NOW</Link>
                </div>
            </div>
        </main>
    );
}

export default Homepage;
