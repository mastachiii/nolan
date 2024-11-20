import styles from "./footer.module.scss";

function Footer() {
    return (
        <div className={styles.container}>
            <footer>
                <section className={styles.links}>
                    <h4>USEFUL LINKS</h4>
                    <div>
                        <p>About</p>
                        <p>Services</p>
                        <p>Contact</p>
                        <p>Shop</p>
                        <p>Blog</p>
                    </div>
                </section>
                <section className={styles.newsletter}>
                    <h4>NEWSLETTER</h4>
                    <input type="text" placeholder="Your Email Address" />
                    <button>SUBSCRIBE NOW</button>
                </section>
                <section className={styles.contact}>
                    <h4>CONTACT</h4>
                    <p>308 Negra Arroyo Lane, Albuquerque, New Mexico, 87104.</p>
                    <div>
                        <img src="/social/facebook.svg" alt="facebook logo" />
                        <img src="/social/twitter.svg" alt="twitter logo" />
                        <img src="/social/reddit.svg" alt="reddit logo" />
                    </div>
                </section>
            </footer>
            <a href="https://github.com/mastachiii" target="_blank" className={styles.github}>
                <img src="/social/github.svg" alt="" />
            </a>
        </div>
    );
}

export default Footer;
