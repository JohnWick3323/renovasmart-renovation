import { Phone, Mail, MapPin } from "lucide-react";
import styles from "./contact-information.module.css";

const cards = [
  {
    icon: <Phone size={24} />,
    title: "Téléphone",
    content: (
      <p>
        <a href="tel:+33123456789">+33 1 23 45 67 89</a>
        <br />
        Du lundi au vendredi 8h-18h
      </p>
    ),
  },
  {
    icon: <Mail size={24} />,
    title: "Email",
    content: (
      <p>
        <a href="mailto:contact@renovasmart.fr">contact@renovasmart.fr</a>
        <br />
        Réponse sous 24h ouvrées
      </p>
    ),
  },
  {
    icon: <MapPin size={24} />,
    title: "Adresse",
    content: <p>75 Rue de la Rénovation<br />75001 Paris, France</p>,
  },
];

const hours = [
  { day: "Lundi", time: "8h00 - 18h00" },
  { day: "Mardi", time: "8h00 - 18h00" },
  { day: "Mercredi", time: "8h00 - 18h00" },
  { day: "Jeudi", time: "8h00 - 18h00" },
  { day: "Vendredi", time: "8h00 - 18h00" },
  { day: "Samedi", time: "9h00 - 13h00" },
  { day: "Dimanche", time: "Fermé", closed: true },
];

export function ContactInformation({ className }: { className?: string }) {
  return (
    <section className={`${styles.section} ${className ?? ""}`}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2>Nos Coordonnées</h2>
          <p>Retrouvez toutes les informations pour nous joindre facilement</p>
        </div>
        <div className={styles.grid}>
          {cards.map((c) => (
            <div key={c.title} className={styles.card}>
              <div className={styles.iconWrap}>{c.icon}</div>
              <h3>{c.title}</h3>
              {c.content}
            </div>
          ))}
        </div>
        <div className={styles.hours}>
          <h3>Horaires d'Ouverture</h3>
          {hours.map((h) => (
            <div key={h.day} className={styles.hourRow}>
              <span className={styles.day}>{h.day}</span>
              <span className={h.closed ? styles.closed : styles.time}>{h.time}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
