import styles from "./recent-projects-gallery.module.css";

const projects = [
  {
    tag: "Peinture",
    title: "Salon Haussmannien - Paris 8e",
    desc: "Rénovation complète avec peinture décorative et finitions soignées.",
    before: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&auto=format&fit=crop&q=70",
    after: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=400&auto=format&fit=crop&q=70",
  },
  {
    tag: "Parquet",
    title: "Appartement Modern - Levallois",
    desc: "Pose de parquet chêne massif avec vitrification haute résistance.",
    before: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&auto=format&fit=crop&q=70",
    after: "https://images.unsplash.com/photo-1560185127-6a9c85e9e908?w=400&auto=format&fit=crop&q=70",
  },
  {
    tag: "Carrelage",
    title: "Salle de Bain - Boulogne",
    desc: "Pose de carrelage grand format avec joints fins et finitions impeccables.",
    before: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&auto=format&fit=crop&q=70",
    after: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=400&auto=format&fit=crop&q=70",
  },
  {
    tag: "Sol Vinyle",
    title: "Bureau Professionnel - La Défense",
    desc: "Revêtement vinyle imitation bois pour un espace de travail contemporain.",
    before: "https://images.unsplash.com/photo-1560440021-33f9b867899d?w=400&auto=format&fit=crop&q=70",
    after: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&auto=format&fit=crop&q=70",
  },
  {
    tag: "Nettoyage",
    title: "Résidence Privée - Neuilly",
    desc: "Nettoyage complet après travaux, livraison impeccable en 48h.",
    before: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&auto=format&fit=crop&q=70",
    after: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&auto=format&fit=crop&q=70",
  },
  {
    tag: "Peinture",
    title: "Chambre Parentale - Versailles",
    desc: "Rénovation chambre avec peinture à la chaux et effets décoratifs.",
    before: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=400&auto=format&fit=crop&q=70",
    after: "https://images.unsplash.com/photo-1615873968403-89e068629265?w=400&auto=format&fit=crop&q=70",
  },
];

export function RecentProjectsGallery({ className }: { className?: string }) {
  return (
    <section className={`${styles.section} ${className ?? ""}`}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2>Nos Réalisations Récentes</h2>
          <p>Découvrez la transformation de nos derniers projets en avant/après</p>
        </div>
        <div className={styles.grid}>
          {projects.map((p) => (
            <div key={p.title} className={styles.card}>
              <div className={styles.images}>
                <div className={styles.imgWrap}>
                  <img src={p.before} alt={`Avant - ${p.title}`} />
                  <span className={styles.imgLabel}>Avant</span>
                </div>
                <div className={styles.divider} />
                <div className={styles.imgWrap}>
                  <img src={p.after} alt={`Apèrs - ${p.title}`} />
                  <span className={styles.imgLabel}>Après</span>
                </div>
              </div>
              <div className={styles.body}>
                <span className={styles.tag}>{p.tag}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
