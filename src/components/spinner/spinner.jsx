import Footer from "../footer/footer";
import ShopHeader from "../shopHeader/shopHeader";
import styles from "./spinner.module.scss";

function Spinner() {
    return (
        <>
            <ShopHeader />
            <div className={styles.spinner}>
                <img src="/spinner.gif" alt="" />
            </div>
            <Footer />
        </>
    );
}

export default Spinner;
