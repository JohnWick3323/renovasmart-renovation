import { Link } from "react-router";
import { Leaf, CheckCircle2 } from "lucide-react";
import styles from "./sol-vinyle-section.module.css";

const items = [
  "Pose de sol vinyle en lames ou dalles",
  "Vinyle LVT (Luxury Vinyl Tile) haute gamme",
  "Imitation bois, pierre ou béton",
  "Pose flottante ou collée",
  "Compatible avec plancher chauffant",
  "Résistant à l'eau, idéal salle de bain et cuisine",
];

export function SolVinyleSection({ className }: { className?: string }) {
  return (
    <section id="sol-vinyle" className={`${styles.section} ${className ?? ""}`}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.content}>
            <span className={styles.tag}>
              <Leaf size={12} /> Sol Vinyle
            </span>
            <h2>Revêtement Sol Vinyle Moderne</h2>
            <p>
              Le sol vinyle allie esthétique, durabilité et facilité d'entretien. Nous proposons une large
              gamme de styles adaptés à tous les budgets et toutes les pièces.
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
          <div className={styles.imageWrap}>
            <img
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&auto=format&fit=crop&q=80"
              alt="Sol vinyle moderne RenovaSmart"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
