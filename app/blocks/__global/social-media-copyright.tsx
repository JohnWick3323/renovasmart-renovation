import styles from "./social-media-copyright.module.css";

export function SocialMediaCopyright({ className }: { className?: string }) {
  const year = new Date().getFullYear();
  return (
    <div className={`${styles.bar} ${className ?? ""}`}>
      <div className={styles.inner}>
        <p className={styles.copyright}>
          &copy; {year} RenovaSmart Rénovation. Tous droits réservés.
        </p>
        <div className={styles.socials}>
          <a href="#" className={styles.socialLink} aria-label="Facebook">
            <span style={{ fontSize: "11px", fontWeight: 700 }}>f</span>
          </a>
          <a href="#" className={styles.socialLink} aria-label="Instagram">
            <span style={{ fontSize: "11px", fontWeight: 700 }}>ig</span>
          </a>
          <a href="#" className={styles.socialLink} aria-label="LinkedIn">
            <span style={{ fontSize: "11px", fontWeight: 700 }}>in</span>
          </a>
        </div>
      </div>
    </div>
  );
}
