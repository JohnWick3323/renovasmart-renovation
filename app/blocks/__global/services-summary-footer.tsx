import { ChevronRight } from "lucide-react";
import { Link } from "react-router";
import styles from "./services-summary-footer.module.css";

const services = [
  { label: "Peinture Intérieure", href: "/services#peinture" },
  { label: "Pose de Parquet", href: "/services#parquet" },
  { label: "Carrelage Sol & Mur", href: "/services#carrelage" },
  { label: "Sol Vinyle", href: "/services#sol-vinyle" },
  { label: "Nettoyage Après Travaux", href: "/services#nettoyage" },
  { label: "Pose de plaques de plâtre", href: "/services#drywall" },
];

const pages = [
  { label: "Accueil", href: "/" },
  { label: "Nos Services", href: "/services" },
  { label: "À Propos", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const contact = [
  { label: "+33 7 53 38 16 54", href: "tel:+33753381654" },
  { label: "renovaxpert7@gmail.com", href: "mailto:renovaxpert7@gmail.com" },
  { label: "75 Rue de la Rénovation, Paris", href: "#" },
  { label: "Lun-Ven: 8h-18h", href: "#" },
];

export function ServicesSummaryFooter({ className }: { className?: string }) {
  return (
    <div className={`${styles.section} ${className ?? ""}`}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <img
            src="/RenovaXpert-Logo-White-Final.png"
            alt="RenovaXpert Rénovation"
            className={styles.brandLogo}
          />
          <p>
            Spécialistes de la rénovation intérieure à Paris et en Île-de-France. Travail propre, rapide et professionnel
            pour transformer vos espaces.
          </p>
        </div>
        <div className={styles.column}>
          <h4>Nos Services</h4>
          <ul className={styles.linkList}>
            {services.map((s) => (
              <li key={s.href}>
                <Link to={s.href}>
                  <ChevronRight size={14} className={styles.chevron} />
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.column}>
          <h4>Navigation</h4>
          <ul className={styles.linkList}>
            {pages.map((p) => (
              <li key={p.href}>
                <Link to={p.href}>
                  <ChevronRight size={14} className={styles.chevron} />
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.column}>
          <h4>Contact</h4>
          <ul className={styles.linkList}>
            {contact.map((c) => (
              <li key={c.label}>
                <a href={c.href}>
                  <ChevronRight size={14} className={styles.chevron} />
                  {c.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
