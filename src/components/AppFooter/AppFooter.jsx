import styles from "./AppFooter.module.css";
const AppFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.products}>
          Products
          <a href="#">
            <div className={styles.view}>Overview</div>
          </a>
          <a href="#">
            <div className={styles.view}>Features</div>
          </a>
          <a href="#">
            <div className={styles.view}>Tutorials</div>
          </a>
          <a href="#">
            <div className={styles.view}>Pricing</div>
          </a>
          <a href="#">
            <div className={styles.view}>Releases</div>
          </a>
        </div>
        <div className={styles.products}>
          Company
          <a href="#">
            <div className={styles.view}>About Us</div>
          </a>
          <a href="#">
            <div className={styles.view}>Press</div>
          </a>
          <a href="#">
            <div className={styles.view}>Careers</div>
          </a>
          <a href="#">
            <div className={styles.view}>Contact Us</div>
          </a>
          <a href="#">
            <div className={styles.view}>Partners</div>
          </a>
        </div>
        <div className={styles.products}>
          Legal
          <a href="#">
            <div className={styles.view}>Cookies Policy</div>
          </a>
          <a href="#">
            <div className={styles.view}>Privacy Policy</div>
          </a>
          <a href="#">
            <div className={styles.view}>Terms of Service</div>
          </a>
          <a href="#">
            <div className={styles.view}>Law Enforcement</div>
          </a>
          <a href="#">
            <div className={styles.view}>Status</div>
          </a>
        </div>
        <div className={styles.products}>
          Follow Us
          <a href="#">
            <div className={styles.view}>Facebook</div>
          </a>
          <a href="#">
            <div className={styles.view}>Twitter</div>
          </a>
          <a href="#">
            <div className={styles.view}>Dribbble</div>
          </a>
          <a href="#">
            <div className={styles.view}>Instagram</div>
          </a>
          <a href="#">
            <div className={styles.view}>LinkedIn</div>
          </a>
        </div>
      </div>
      <div className={styles.copy}>
        &copy;2023 Shoppers Stop All rights reserved
      </div>
    </footer>
  );
};
export default AppFooter;
