import { Link } from "react-router";
import { Sparkles, CheckCircle2 } from "lucide-react";
import styles from "./nettoyage-section.module.css";

const items = [
  "Nettoyage après travaux de rénovation",
  "Nettoyage de fin de chantier",
  "Nettoyage complet de maison ou appartement",
  "Dépoussiérage, détachage, désinfection",
  "Nettoyage de vitres et menuiseries",
  "Évacuation des déchets de chantier",
];

export function NettoyageSection({ className }: { className?: string }) {
  return (
    <section id="nettoyage" className={`${styles.section} ${className ?? ""}`}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.imageWrap}>
            <img
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&auto=format&fit=crop&q=80"
              alt="Nettoyage après travaux RenovaXpert"
            />
          </div>
          <div className={styles.content}>
            <span className={styles.tag}>
              <Sparkles size={12} /> Nettoyage
            </span>
            <h2>Service de Nettoyage Après Travaux</h2>
            <p>
              Nous laissons vos espaces impeccables après chaque intervention. Notre équipe de nettoyage
              professionnel garantit une propreté irréprochable et une livraison rapide.
            </p>
            <ul className={styles.list}>
              {items.map((item) => (
                <li key={item} className={styles.listItem}>
                  <CheckCircle2 size={16} className={styles.check} />
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/contact" className="btn btn-primary">
              Demander un Devis
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
