import styles from "./team-section.module.css";

const team = [
  {
    name: "Marc Bertrand",
    role: "Fondateur & Directeur",
    specialty: "Peinture décorative et gestion de projet",
    exp: "18 ans d'exp.",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&auto=format&fit=crop&q=80",
  },
  {
    name: "Julie Moreau",
    role: "Spécialiste Carrelage",
    specialty: "Pose de carrelage grand format et mosaïque",
    exp: "10 ans d'exp.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80",
  },
  {
    name: "Nicolas Faure",
    role: "Expert Parquet",
    specialty: "Pose, sablage et vitrification de parquet",
    exp: "14 ans d'exp.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&auto=format&fit=crop&q=80",
  },
  {
    name: "Amélie Durand",
    role: "Chef de Chantier",
    specialty: "Coordination, contrôle qualité et relation client",
    exp: "8 ans d'exp.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&auto=format&fit=crop&q=80",
  },
];

export function TeamSection({ className }: { className?: string }) {
  return (
    <section className={`${styles.section} ${className ?? ""}`}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2>Notre Équipe d'Experts</h2>
          <p>Des professionnels passionnés et expérimentés à votre service</p>
        </div>
        <div className={styles.grid}>
          {team.map((member) => (
            <div key={member.name} className={styles.card}>
              <div className={styles.avatarWrap}>
                <img src={member.avatar} alt={member.name} />
              </div>
              <div className={styles.info}>
                <div className={styles.name}>{member.name}</div>
                <div className={styles.role}>{member.role}</div>
                <p className={styles.specialty}>{member.specialty}</p>
                <span className={styles.exp}>{member.exp}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
