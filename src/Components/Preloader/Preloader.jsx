import React from "react";
import styles from "./Preloader.module.css";

const Preloader = () => {
  return (
    <div className={styles.loader} id="loader">
      <div className={styles.loaderWrapper}>
        <span className={styles.loaderLetter}>L</span>
        <span className={styles.loaderLetter}>o</span>
        <span className={styles.loaderLetter}>a</span>
        <span className={styles.loaderLetter}>d</span>
        <span className={styles.loaderLetter}>i</span>
        <span className={styles.loaderLetter}>n</span>
        <span className={styles.loaderLetter}>g</span>

        <span className={styles.loaderLetter}>.</span>
        <span className={styles.loaderLetter}>.</span>
        <span className={styles.loaderLetter}>.</span>
        <div className={styles.loaderCircle}></div>
      </div>
    </div>
  );
};

export default Preloader;
