import { Link } from "react-router";
import { Star, ArrowRight } from "lucide-react";
import styles from "./hero-section.module.css";

const stats = [
  { number: "500+", label: "Projets Réalisés" },
  { number: "12+", label: "Années d'Expérience" },
  { number: "98%", label: "Clients Satisfaits" },
];

export function HeroSection({ className }: { className?: string }) {
  return (
    <section className={`${styles.hero} ${className ?? ""}`}>
      <div className={styles.bg} />
      <div className={styles.overlay} />
      <div className={styles.content}>
        <div className={styles.text}>
          <div className={styles.badge}>
            <Star size={12} fill="currentColor" />
            Rénovation Professionnelle
          </div>
          <h1 className={styles.title}>
            Transformez Vos <span>Espaces</span> Intérieurs
          </h1>
          <p className={styles.subtitle}>
            RenovaSmart offre des services de rénovation intérieure de qualité : peinture, parquet, carrelage, sol vinyle
            et nettoyage. Travail propre, rapide et professionnel.
          </p>
          <div className={styles.actions}>
            <Link to="/contact" className="btn btn-accent">
              Devis Gratuit
              <ArrowRight size={16} />
            </Link>
            <Link to="/services" className="btn btn-outline-white">
              Nos Services
            </Link>
          </div>
        </div>
        <div className={styles.stats}>
          {stats.map((s) => (
            <div key={s.label} className={styles.statCard}>
              <div className={styles.statNumber}>{s.number}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
