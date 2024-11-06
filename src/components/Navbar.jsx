import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbrand}>
        <img
          src="burger.jpg" // Ensure this points to the correct path in your project
          alt="Burger Icon"
          className={styles.burgerIcon}
        />
        <span className={styles.brandName}>Find Your Snacks Recipe</span>
      </div>
      <ul className={styles.navLinks}>
        <li className={styles.navItem}>
          <a href="#home" className={styles.navLink}>
            Home
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="#recipes" className={styles.navLink}>
            Recipes
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="#about" className={styles.navLink}>
            About Us
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="#contact" className={styles.navLink}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
