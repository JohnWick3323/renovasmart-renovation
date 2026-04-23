import { Link } from "react-router";
import { Paintbrush, Layers, Grid3x3, Leaf, Sparkles, Square, ArrowRight } from "lucide-react";
import styles from "./services-overview.module.css";

const services = [
  {
    icon: <Paintbrush size={28} />,
    title: "Peinture",
    desc: "Intérieure et extérieure, finition professionnelle garantie.",
    href: "/services#peinture",
  },
  {
    icon: <Layers size={28} />,
    title: "Parquet",
    desc: "Pose, sablage et vitrification pour un sol magnifique.",
    href: "/services#parquet",
  },
  {
    icon: <Grid3x3 size={28} />,
    title: "Carrelage",
    desc: "Sol et mur, pose précise et rendu professionnel.",
    href: "/services#carrelage",
  },
  {
    icon: <Leaf size={28} />,
    title: "Sol Vinyle",
    desc: "Durable, facile d'entretien, esthétique moderne.",
    href: "/services#sol-vinyle",
  },
  {
    icon: <Sparkles size={28} />,
    title: "Nettoyage",
    desc: "Après travaux, impeccable et prêt à vivre.",
    href: "/services#nettoyage",
  },
  {
    icon: <Square size={28} />,
    title: "Drywall / Placo",
    desc: "Cloisons, faux plafonds et finitions plâtre prêtes à peindre.",
    href: "/services#drywall",
  },
];

export function ServicesOverview({ className }: { className?: string }) {
  return (
    <section className={`${styles.section} ${className ?? ""}`}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2>Nos Services de Rénovation</h2>
          <p>Une offre complète pour rénover et embellir vos espaces intérieurs avec expertise.</p>
        </div>
        <div className={styles.grid}>
          {services.map((s) => (
            <Link key={s.title} to={s.href} className={styles.card}>
              <div className={styles.iconWrap}>{s.icon}</div>
              <div className={styles.cardTitle}>{s.title}</div>
              <p className={styles.cardDesc}>{s.desc}</p>
              <span className={styles.cardLink}>
                En savoir plus <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
