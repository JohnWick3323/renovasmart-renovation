import { Link } from "react-router";
import { ChevronRight } from "lucide-react";
import styles from "./services-hero.module.css";

const tabs = [
  { label: "Peinture", href: "#peinture" },
  { label: "Parquet", href: "#parquet" },
  { label: "Carrelage", href: "#carrelage" },
  { label: "Sol Vinyle", href: "#sol-vinyle" },
  { label: "Nettoyage", href: "#nettoyage" },
  { label: "Pose de plaques de plâtre", href: "#drywall" },
];

export function ServicesHero({ className }: { className?: string }) {
  return (
    <section className={`${styles.hero} ${className ?? ""}`}>
      <div className={styles.inner}>
        <div className={styles.breadcrumb}>
          <Link to="/">Accueil</Link>
          <ChevronRight size={14} />
          <span>Nos Services</span>
        </div>
        <h1>Nos Services de Rénovation</h1>
        <p>
          Une expertise complète pour tous vos travaux d'intérieur. De la peinture au nettoyage après chantier,
          nous assurons une qualité professionnelle à chaque étape.
        </p>
        <div className={styles.tabs}>
          {tabs.map((t) => (
            <a key={t.href} href={t.href} className={styles.tab}>
              {t.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
