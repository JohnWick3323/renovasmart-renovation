import { Award, Clock, Sparkles, Heart } from "lucide-react";
import styles from "./our-values.module.css";

const values = [
  {
    icon: <Award size={24} />,
    title: "Professionnalisme",
    desc: "Chaque projet est traité avec le plus haut niveau de professionnalisme. Nous respectons les normes du secteur et utilisons uniquement des matériaux de qualité.",
  },
  {
    icon: <Sparkles size={24} />,
    title: "Propreté",
    desc: "La propreté est au cœur de notre travail. Nous maintenons un chantier propre et livrons vos espaces immaculés à la fin de chaque intervention.",
  },
  {
    icon: <Clock size={24} />,
    title: "Rapidité",
    desc: "Nous respectons les délais convenus et optimisons notre organisation pour minimiser les perturbations dans votre vie quotidienne.",
  },
  {
    icon: <Heart size={24} />,
    title: "Satisfaction Client",
    desc: "Votre satisfaction est notre priorité absolue. Nous œuvrons jusqu'à ce que vous soyez entièrement satisfait du résultat.",
  },
];

export function OurValues({ className }: { className?: string }) {
  return (
    <section className={`${styles.section} ${className ?? ""}`}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2>Nos Valeurs Fondamentales</h2>
          <p>Les principes qui guident chacune de nos interventions et définissent notre identité.</p>
        </div>
        <div className={styles.grid}>
          {values.map((v) => (
            <div key={v.title} className={styles.card}>
              <div className={styles.iconWrap}>{v.icon}</div>
              <div className={styles.text}>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
