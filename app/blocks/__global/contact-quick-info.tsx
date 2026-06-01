import { Phone, Mail, Clock } from "lucide-react";
import styles from "./contact-quick-info.module.css";

export function ContactQuickInfo({ className }: { className?: string }) {
  return (
    <div className={`${styles.bar} ${className ?? ""}`}>
      <div className={styles.inner}>
        <a href="tel:+33753381654" className={styles.item}>
          <Phone size={14} className={styles.icon} />
          <span>+33 7 53 38 16 54</span>
        </a>
        <a href="mailto:renovaxpert7@gmail.com" className={styles.item}>
          <Mail size={14} className={styles.icon} />
          <span>renovaxpert7@gmail.com</span>
        </a>
        <div className={styles.item}>
          <Clock size={14} className={styles.icon} />
          <span>Lun-Ven: 8h-18h | Sam: 9h-13h</span>
        </div>
      </div>
    </div>
  );
}
