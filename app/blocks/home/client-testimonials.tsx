import { Star, Quote } from "lucide-react";
import styles from "./client-testimonials.module.css";

const testimonials = [
  {
    name: "Sophie Martin",
    role: "Propriétaire",
    service: "Peinture & Parquet",
    quote:
      "RenovaXpert a complètement transformé notre appartement. Travail impeccable, équipe ponctuelle et propreté irréprochable. Je recommande vivement !",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
    rating: 5,
  },
  {
    name: "Thomas Dupont",
    role: "Gérant d'entreprise",
    service: "Carrelage & Sol Vinyle",
    quote:
      "Nous avons fait appel à RenovaXpert pour la rénovation de nos bureaux. Résultat parfait dans les délais impartis. Professionnels et efficaces.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
    rating: 5,
  },
  {
    name: "Claire Leblanc",
    role: "Architecte d'intérieur",
    service: "Peinture Décorative",
    quote:
      "En tant qu'architecte, j'exige la perfection. RenovaXpert répond toujours à mes attentes les plus élevées. Mon prestataire de confiance depuis 3 ans.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop&q=80",
    rating: 5,
  },
];

export function ClientTestimonials({ className }: { className?: string }) {
  return (
    <section className={`${styles.section} ${className ?? ""}`}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2>Ce Que Disent Nos Clients</h2>
          <p>La satisfaction de nos clients est notre meilleure récompense</p>
        </div>
        <div className={styles.grid}>
          {testimonials.map((t) => (
            <div key={t.name} className={styles.card}>
              <Quote size={32} className={styles.quoteIcon} />
              <div className={styles.stars}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={16} className={styles.star} fill="currentColor" />
                ))}
              </div>
              <p className={styles.quote}>&ldquo;{t.quote}&rdquo;</p>
              <div className={styles.author}>
                <img src={t.avatar} alt={t.name} className={styles.avatar} />
                <div>
                  <div className={styles.authorName}>{t.name}</div>
                  <div className={styles.authorRole}>{t.role}</div>
                  <div className={styles.authorService}>{t.service}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
