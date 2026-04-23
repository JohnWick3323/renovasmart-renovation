import { Link } from "react-router";
import { ChevronRight } from "lucide-react";
import styles from "./contact-hero.module.css";

export function ContactHero({ className }: { className?: string }) {
  return (
    <section className={`${styles.hero} ${className ?? ""}`}>
      <div className={styles.inner}>
        <div className={styles.breadcrumb}>
          <Link to="/">Accueil</Link>
          <ChevronRight size={14} />
          <span>Contact</span>
        </div>
        <h1>Contactez-Nous</h1>
        <p>
          Nous sommes à votre écoute pour tous vos projets de rénovation. Demandez votre devis gratuit
          et recevez une réponse sous 24-48 heures.
        </p>
      </div>
    </section>
  );
}
