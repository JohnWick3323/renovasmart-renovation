import { Phone, Mail, MapPin } from "lucide-react";
import styles from "./contact-legal-footer.module.css";

export function ContactLegalFooter({ className }: { className?: string }) {
  return (
    <div className={`${styles.section} ${className ?? ""}`}>
      <div className={styles.inner}>
        <div className={styles.info}>
          <a href="tel:+33753381654" className={styles.infoItem}>
            <Phone size={14} className={styles.icon} />
            <span>+33 7 53 38 16 54</span>
          </a>
          <a href="mailto:renovaxpert7@gmail.com" className={styles.infoItem}>
            <Mail size={14} className={styles.icon} />
            <span>renovaxpert7@gmail.com</span>
          </a>
          <div className={styles.infoItem}>
            <MapPin size={14} className={styles.icon} />
            <span>75 Rue de la Rénovation, 75001 Paris</span>
          </div>
        </div>
        <div className={styles.legal}>
          <a href="#" className={styles.legalLink}>Mentions légales</a>
          <span className={styles.separator}>|</span>
          <a href="#" className={styles.legalLink}>Politique de confidentialité</a>
          <span className={styles.separator}>|</span>
          <a href="#" className={styles.legalLink}>CGV</a>
        </div>
      </div>
    </div>
  );
}
