import styles from "./company-story.module.css";

const milestones = [
  { year: "2012", label: "Fondation de RenovaXpert" },
  { year: "2016", label: "100 projets réalisés" },
  { year: "2019", label: "Élargissement de l'équipe" },
  { year: "2024", label: "500+ clients satisfaits" },
];

export function CompanyStory({ className }: { className?: string }) {
  return (
    <section className={`${styles.section} ${className ?? ""}`}>
      <div className={styles.inner}>
        <div className={styles.imageWrap}>
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&fit=crop&q=80"
            alt="L'histoire de RenovaXpert"
          />
        </div>
        <div className={styles.content}>
          <span className={styles.tag}>Notre Histoire</span>
          <h2>12 Ans de Passion pour la Rénovation</h2>
          <p>
            Fondée en 2012 par Marc Bertrand, artisan peintre passionné, RenovaXpert est née d'une vision simple :
            offrir des services de rénovation intérieure de qualité supérieure à des prix justes et transparents.
          </p>
          <p>
            Au fil des années, notre équipe s'est agrandie et diversifiée, intégrant des spécialistes du parquet,
            du carrelage et des revêtements de sol. Aujourd'hui, RenovaXpert est une référence en Île-de-France
            pour tous les travaux de rénovation intérieure.
          </p>
          <p>
            Notre mission : transformer vos espaces en lieux de vie magnifiques, dans les délais convenus et
            avec la propreté qui nous caractérise.
          </p>
          <div className={styles.milestones}>
            {milestones.map((m) => (
              <div key={m.year} className={styles.milestone}>
                <div className={styles.milestoneYear}>{m.year}</div>
                <div className={styles.milestoneLabel}>{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
