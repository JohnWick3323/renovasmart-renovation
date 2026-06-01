import { Link } from "react-router";
import { ChevronRight } from "lucide-react";
import styles from "./about-hero.module.css";

export function AboutHero({ className }: { className?: string }) {
  return (
    <section className={`${styles.hero} ${className ?? ""}`}>
      <div className={styles.inner}>
        <div className={styles.breadcrumb}>
          <Link to="/">Accueil</Link>
          <ChevronRight size={14} />
          <span>À Propos</span>
        </div>
        <h1>À Propos de RenovaXpert</h1>
        <p>
          Depuis plus de 12 ans, nous transformons les espaces intérieurs avec passion, expertise et
          dévouement pour la satisfaction de nos clients.
        </p>
      </div>
    </section>
  );
}
