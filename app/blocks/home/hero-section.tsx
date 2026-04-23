import { useState } from "react";
import { Link } from "react-router";
import { Star, ArrowRight, CheckCircle, Phone } from "lucide-react";
import styles from "./hero-section.module.css";

const services = [
  "Peinture Intérieure",
  "Pose Parquet",
  "Carrelage",
  "Sol Vinyle",
  "Nettoyage",
  "Drywall / Placo",
];

export function HeroSection({ className }: { className?: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", service: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  }

  return (
    <section className={`${styles.hero} ${className ?? ""}`}>
      <div className={styles.bg} />
      <div className={styles.overlay} />
      <div className={styles.content}>
        {/* Left: copy + stats */}
        <div className={styles.left}>
          <div className={styles.badge}>
            <Star size={12} fill="currentColor" />
            Rénovation Professionnelle
          </div>
          <h1 className={styles.title}>
            Transformez Vos <span>Espaces</span> Intérieurs
          </h1>
          <p className={styles.subtitle}>
            RenovaSmart offre des services de rénovation intérieure de qualité : peinture, parquet, carrelage, sol vinyle
            et nettoyage. Travail propre, rapide et professionnel.
          </p>
          <div className={styles.actions}>
            <Link to="/services" className="btn btn-outline-white">
              Nos Services
              <ArrowRight size={16} />
            </Link>
          </div>
          <div className={styles.stats}>
            {[
              { number: "500+", label: "Projets Réalisés" },
              { number: "12+", label: "Années d'Expérience" },
              { number: "98%", label: "Clients Satisfaits" },
            ].map((s) => (
              <div key={s.label} className={styles.statCard}>
                <div className={styles.statNumber}>{s.number}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: lead-gen form */}
        <div className={styles.formCard}>
          {submitted ? (
            <div className={styles.successState}>
              <CheckCircle size={48} className={styles.successIcon} />
              <h3>Merci !</h3>
              <p>Nous vous contacterons dans les 24 h pour établir votre devis gratuit.</p>
              <a href="tel:+33123456789" className={`btn btn-accent ${styles.callBtn}`}>
                <Phone size={16} />
                Appeler maintenant
              </a>
            </div>
          ) : (
            <>
              <div className={styles.formHeader}>
                <span className={styles.formTag}>Devis Gratuit</span>
                <h2 className={styles.formTitle}>Obtenez votre devis en 24h</h2>
                <p className={styles.formSub}>Réponse garantie, sans engagement</p>
              </div>
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.field}>
                  <label htmlFor="hero-name">Nom complet *</label>
                  <input
                    id="hero-name"
                    name="name"
                    type="text"
                    placeholder="Jean Dupont"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="hero-phone">Téléphone *</label>
                  <input
                    id="hero-phone"
                    name="phone"
                    type="tel"
                    placeholder="06 00 00 00 00"
                    value={form.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="hero-service">Service souhaité *</label>
                  <select
                    id="hero-service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Sélectionnez un service</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div className={styles.field}>
                  <label htmlFor="hero-message">Description rapide</label>
                  <textarea
                    id="hero-message"
                    name="message"
                    rows={3}
                    placeholder="Ex. : salon de 25m², peinture blanche..."
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>
                <button type="submit" className={`btn btn-accent ${styles.submitBtn}`} disabled={loading}>
                  {loading ? "Envoi en cours..." : "Demander mon devis gratuit"}
                  {!loading && <ArrowRight size={16} />}
                </button>
                <p className={styles.privacy}>🔒 Vos données restent confidentielles</p>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
