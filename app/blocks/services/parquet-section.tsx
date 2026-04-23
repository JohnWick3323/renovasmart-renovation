import { Link } from "react-router";
import { Layers, CheckCircle2 } from "lucide-react";
import styles from "./parquet-section.module.css";

const items = [
  "Pose de parquet massif, contrecollé et stratifié",
  "Sablage (ponçage) de parquet ancien",
  "Vitrification et huilage pour protection durable",
  "Réparation et remplacement de lames",
  "Parquet flottant et collé",
  "Finition mat, satin ou brillant au choix",
];

export function ParquetSection({ className }: { className?: string }) {
  return (
    <section id="parquet" className={`${styles.section} ${className ?? ""}`}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.content}>
            <span className={styles.tag}>
              <Layers size={12} /> Parquet
            </span>
            <h2>Service de Pose et Rénovation Parquet</h2>
            <p>
              De la pose à la finition, nos artisans spécialistes du parquet vous offrent un sol magnifique
              et durable. Sablage précis, vitrification de qualité supérieure.
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
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop&q=80"
              alt="Pose de parquet RenovaSmart"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
