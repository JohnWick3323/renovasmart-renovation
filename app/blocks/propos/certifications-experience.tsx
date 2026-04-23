import { Shield, Award, CheckCircle, Star } from "lucide-react";
import styles from "./certifications-experience.module.css";

const stats = [
  { number: "12+", label: "Années d'Expérience" },
  { number: "500+", label: "Projets Réalisés" },
  { number: "98%", label: "Clients Satisfaits" },
  { number: "15", label: "Artisans Qualifiés" },
];

const certs = [
  {
    icon: <Shield size={20} />,
    title: "Garantie Décennale",
    desc: "Tous nos travaux bénéficient d'une garantie décennale pour votre tranquillité.",
  },
  {
    icon: <Award size={20} />,
    title: "Artisan Qualifié RGE",
    desc: "Reconnus Garants de l'Environnement, nous respectons les normes écologiques.",
  },
  {
    icon: <CheckCircle size={20} />,
    title: "Assurance RC Pro",
    desc: "Couverture intégrale responsabilité civile professionnelle pour chaque chantier.",
  },
  {
    icon: <Star size={20} />,
    title: "Note 4.9/5",
    desc: "Notés 4.9/5 sur Google avec plus de 200 avis vérifiés de clients satisfaits.",
  },
  {
    icon: <Shield size={20} />,
    title: "Certification QUALIBAT",
    desc: "Certification professionnelle attestant la qualification de nos artisans du bâtiment.",
  },
  {
    icon: <Award size={20} />,
    title: "Devis Gratuit & Rapide",
    desc: "Devis détaillé gratuit fourni sous 24-48h après visite de votre chantier.",
  },
];

export function CertificationsExperience({ className }: { className?: string }) {
  return (
    <section className={`${styles.section} ${className ?? ""}`}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2>Nos Certifications &amp; Chiffres Clés</h2>
          <p>L'excellence prouvée par des années d'expérience et des certifications officielles</p>
        </div>
        <div className={styles.grid}>
          {stats.map((s) => (
            <div key={s.label} className={styles.stat}>
              <div className={styles.statNumber}>{s.number}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>
        <div className={styles.certs}>
          {certs.map((c) => (
            <div key={c.title} className={styles.cert}>
              <div className={styles.certIcon}>{c.icon}</div>
              <div className={styles.certText}>
                <h4>{c.title}</h4>
                <p>{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
