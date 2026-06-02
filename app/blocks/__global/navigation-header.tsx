import { useState } from "react";
import { NavLink, Link } from "react-router";
import { Menu, X } from "lucide-react";
import styles from "./navigation-header.module.css";

export function NavigationHeader({ className }: { className?: string }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={`${styles.header} ${className ?? ""}`}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo}>
          <img
            src="/RenovaXpert-Logo-Final.png"
            alt="RenovaXpert"
            className={styles.logoImg}
          />
        </Link>

        <div className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
          <NavLink
            to="/"
            end
            className={({ isActive }) => `${styles.navLink} ${isActive ? styles.navLinkActive : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            Accueil
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) => `${styles.navLink} ${isActive ? styles.navLinkActive : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            Services
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => `${styles.navLink} ${isActive ? styles.navLinkActive : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            À Propos
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => `${styles.navLink} ${isActive ? styles.navLinkActive : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </NavLink>
        </div>

        <Link to="/contact" className={styles.cta}>
          Demander un devis
        </Link>

        <button
          className={styles.menuButton}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
}
