import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>© {new Date().getFullYear()} Romain.</p>
      <p className={styles.links}>
        <a href="https://github.com/Roriks22" target="_blank">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/romain-jacquesson-450422168/" target="_blank">
          LinkedIn
        </a>
      </p>
        </footer>
    );
};