import { useState } from "react";
import { CheckCircle } from "lucide-react";
import styles from "./call-to-action-quote.module.css";

const features = [
  "Devis gratuit et sans engagement",
  "Réponse sous 24-48 heures",
  "Déplacement gratuit pour estimation",
  "Garantie sur tous nos travaux",
];

export function CallToActionQuote({ className }: { className?: string }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className={`${styles.section} ${className ?? ""}`}>
      <div className={styles.inner}>
        <div className={styles.text}>
          <h2>Obtenez Votre Devis Gratuit</h2>
          <p>
            Contactez-nous dès aujourd'hui pour un devis personnalisé. Notre équipe vous contactera rapidement pour
            discuter de votre projet de rénovation.
          </p>
          <div className={styles.features}>
            {features.map((f) => (
              <div key={f} className={styles.feature}>
                <div className={styles.checkIcon}>
                  <CheckCircle size={14} />
                </div>
                <span>{f}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.form}>
          {submitted ? (
            <div style={{ textAlign: "center", padding: "2rem 0" }}>
              <CheckCircle size={48} color="var(--color-success)" style={{ margin: "0 auto 1rem" }} />
              <h3 style={{ color: "var(--color-text)" }}>Demande Envoyée !</h3>
              <p style={{ color: "var(--color-text-muted)", marginTop: "0.5rem" }}>
                Nous vous contacterons dans les 24-48 heures.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <h3>Demande de Devis Rapide</h3>
              <div className={styles.fieldGroup}>
                <div className={styles.field}>
                  <label htmlFor="ctaNom">Prénom &amp; Nom *</label>
                  <input id="ctaNom" type="text" placeholder="Jean Dupont" required />
                </div>
                <div className={styles.field}>
                  <label htmlFor="ctaTel">Téléphone *</label>
                  <input id="ctaTel" type="tel" placeholder="06 12 34 56 78" required />
                </div>
              </div>
              <div className={styles.field}>
                <label htmlFor="ctaEmail">Email *</label>
                <input id="ctaEmail" type="email" placeholder="jean@exemple.fr" required />
              </div>
              <div className={styles.field}>
                <label htmlFor="ctaService">Service souhaité</label>
                <select id="ctaService">
                  <option value="">Sélectionnez un service</option>
                  <option>Peinture</option>
                  <option>Parquet</option>
                  <option>Carrelage</option>
                  <option>Sol Vinyle</option>
                  <option>Nettoyage</option>
                  <option>Plusieurs services</option>
                </select>
              </div>
              <button type="submit" className={styles.submitBtn}>
                Envoyer ma demande
              </button>
              <p className={styles.note}>Gratuit et sans engagement</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
