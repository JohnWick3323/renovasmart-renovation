import { Link } from "react-router";
 import { Square, CheckCircle2 } from "lucide-react";
import styles from "./peinture-section.module.css";

const items = [
  "Pose et finition de plaques de plâtre (BA13)",
  "Création de cloisons et faux plafonds",
  "Isolation thermique et acoustique intégrée",
  "Réparation de murs et plafonds endommagés",
  "Traitement des joints et application d'enduit",
  "Préparation de surface prête à peindre",
];

export function DrywallSection({ className }: { className?: string }) {
  return (
    <section id="drywall" className={`${styles.section} ${className ?? ""}`}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.imageWrap}>
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&fit=crop&q=80"
              alt="Pose de placo RenovaSmart"
            />
          </div>
          <div className={styles.content}>
            <span className={styles.tag}>
              <Square size={12} /> Pose de plaques de plâtre
            </span>
            <h2>Pose de plaques de plâtre</h2>
            <p>
              Nos poseurs de plaques de plâtre réalisent vos cloisons, faux plafonds et isolations avec
              précision. Finitions lisses et parfaites, prêtes à recevoir peinture ou revêtement.
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
