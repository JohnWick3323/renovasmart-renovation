import { Phone, Mail, Clock } from "lucide-react";
import styles from "./contact-quick-info.module.css";

export function ContactQuickInfo({ className }: { className?: string }) {
  return (
    <div className={`${styles.bar} ${className ?? ""}`}>
      <div className={styles.inner}>
        <a href="tel:+33123456789" className={styles.item}>
          <Phone size={14} className={styles.icon} />
          <span>+33 1 23 45 67 89</span>
        </a>
        <a href="mailto:contact@renovasmart.fr" className={styles.item}>
          <Mail size={14} className={styles.icon} />
          <span>contact@renovasmart.fr</span>
        </a>
        <div className={styles.item}>
          <Clock size={14} className={styles.icon} />
          <span>Lun-Ven: 8h-18h | Sam: 9h-13h</span>
        </div>
      </div>
    </div>
  );
}
