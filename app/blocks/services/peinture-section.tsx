import { Link } from "react-router";
import { Paintbrush, CheckCircle2 } from "lucide-react";
import styles from "./peinture-section.module.css";

const items = [
  "Peinture intérieure (salon, chambre, cuisine, salle de bain)",
  "Peinture extérieure et façade",
  "Peinture décorative et effets spéciaux",
  "Préparation et traitement des surfaces",
  "Application de papier peint",
  "Rénovation de peinture ancienne",
];

export function PeintureSection({ className }: { className?: string }) {
  return (
    <section id="peinture" className={`${styles.section} ${className ?? ""}`}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.imageWrap}>
            <img
              src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&auto=format&fit=crop&q=80"
              alt="Service peinture RenovaSmart"
            />
          </div>
          <div className={styles.content}>
            <span className={styles.tag}>
              <Paintbrush size={12} /> Peinture
            </span>
            <h2>Service de Peinture Professionnelle</h2>
            <p>
              Nos peintres expérimentés utilisent des peintures de haute qualité pour un résultat durable et
              esthétique. Préparation soignée des surfaces, application précise et finitions impeccables.
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
