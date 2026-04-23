import { Link } from "react-router";
import { Shield, Clock, Sparkles, Users, ArrowRight } from "lucide-react";
import styles from "./why-choose-us.module.css";

const points = [
  {
    icon: <Shield size={20} />,
    title: "Travail Garanti",
    desc: "Tous nos travaux sont garantis. Votre satisfaction est notre priorité absolue.",
  },
  {
    icon: <Clock size={20} />,
    title: "Rapidité d'Exécution",
    desc: "Nous respectons les délais convenus et minimisons les perturbations dans votre quotidien.",
  },
  {
    icon: <Sparkles size={20} />,
    title: "Propreté Impeccable",
    desc: "Chantier propre du début à la fin. Nous nettoyons après chaque intervention.",
  },
  {
    icon: <Users size={20} />,
    title: "Équipe Expérimentée",
    desc: "Plus de 12 ans d'expérience et plus de 500 projets réalisés avec excellence.",
  },
];

export function WhyChooseUs({ className }: { className?: string }) {
  return (
    <section className={`${styles.section} ${className ?? ""}`}>
      <div className={styles.inner}>
        <div className={styles.imageWrap}>
          <img
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&auto=format&fit=crop&q=80"
            alt="Équipe RenovaSmart au travail"
          />
        </div>
        <div className={styles.content}>
          <span className={styles.tag}>Pourquoi Nous Choisir</span>
          <h2>Excellence et Professionnalisme à Votre Service</h2>
          <p>
            RenovaSmart s'engage à fournir des rénovations de la plus haute qualité, avec une attention particulière
            aux détails et une communication transparente tout au long du projet.
          </p>
          <div className={styles.points}>
            {points.map((p) => (
              <div key={p.title} className={styles.point}>
                <div className={styles.pointIcon}>{p.icon}</div>
                <div className={styles.pointText}>
                  <h4>{p.title}</h4>
                  <p>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <Link to="/about" className="btn btn-primary">
            En Savoir Plus <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
