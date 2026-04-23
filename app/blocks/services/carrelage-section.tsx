import { Link } from "react-router";
import { Grid3x3, CheckCircle2 } from "lucide-react";
import styles from "./carrelage-section.module.css";

const items = [
  "Pose de carrelage sol et mur (intérieur et extérieur)",
  "Carrelage salle de bain, cuisine, entrée",
  "Grands formats et petits formats",
  "Joints fins et traditionnels",
  "Dépose et remplacement de carrelage ancien",
  "Faience et mosaïque",
];

export function CarrelageSection({ className }: { className?: string }) {
  return (
    <section id="carrelage" className={`${styles.section} ${className ?? ""}`}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.imageWrap}>
            <img
              src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&auto=format&fit=crop&q=80"
              alt="Carrelage professionnel RenovaSmart"
            />
          </div>
          <div className={styles.content}>
            <span className={styles.tag}>
              <Grid3x3 size={12} /> Carrelage
            </span>
            <h2>Service de Carrelage Sol &amp; Mur</h2>
            <p>
              Nos carreleurs experts assurent une pose précise et un rendu professionnel pour cuisines,
              salles de bain et tous vos espaces intérieurs et extérieurs.
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
