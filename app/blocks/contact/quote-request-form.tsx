import { useState } from "react";
import { useForm } from "react-hook-form";
import { Phone, Mail, Clock, CheckCircle } from "lucide-react";
import styles from "./quote-request-form.module.css";

type FormData = {
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  service: string;
  description: string;
};

const infoCards = [
  { icon: <Phone size={18} />, label: "Téléphone", value: "+33 1 23 45 67 89" },
  { icon: <Mail size={18} />, label: "Email", value: "contact@renovasmart.fr" },
  { icon: <Clock size={18} />, label: "Horaires", value: "Lun-Ven: 8h-18h | Sam: 9h-13h" },
];

export function QuoteRequestForm({ className }: { className?: string }) {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  function onSubmit(_data: FormData) {
    setSubmitted(true);
  }

  return (
    <section className={`${styles.section} ${className ?? ""}`}>
      <div className={styles.inner}>
        <div className={styles.infoSide}>
          <h2>Demandez Votre Devis Gratuit</h2>
          <p>
            Remplissez le formulaire et nous vous contacterons sous 24-48 heures avec un devis
            détaillé et personnalisé pour votre projet.
          </p>
          <div className={styles.infoCards}>
            {infoCards.map((c) => (
              <div key={c.label} className={styles.infoCard}>
                <div className={styles.infoIcon}>{c.icon}</div>
                <div className={styles.infoText}>
                  <strong>{c.label}</strong>
                  <span>{c.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.formSide}>
          {submitted ? (
            <div className={styles.success}>
              <CheckCircle size={56} color="var(--color-success)" style={{ margin: "0 auto" }} />
              <h3>Demande Envoyée avec Succès !</h3>
              <p>Nous vous contacterons dans les 24-48 heures pour discuter de votre projet.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)}>
              <h3>Formulaire de Devis</h3>
              <div className={styles.fieldRow}>
                <div className={styles.field}>
                  <label htmlFor="prenom">Prénom *</label>
                  <input
                    id="prenom"
                    type="text"
                    placeholder="Jean"
                    {...register("prenom", { required: "Prénom requis" })}
                  />
                  {errors.prenom && <span className={styles.errorMsg}>{errors.prenom.message}</span>}
                </div>
                <div className={styles.field}>
                  <label htmlFor="nom">Nom *</label>
                  <input
                    id="nom"
                    type="text"
                    placeholder="Dupont"
                    {...register("nom", { required: "Nom requis" })}
                  />
                  {errors.nom && <span className={styles.errorMsg}>{errors.nom.message}</span>}
                </div>
              </div>
              <div className={styles.fieldRow}>
                <div className={styles.field}>
                  <label htmlFor="email">Email *</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="jean@exemple.fr"
                    {...register("email", { required: "Email requis" })}
                  />
                  {errors.email && <span className={styles.errorMsg}>{errors.email.message}</span>}
                </div>
                <div className={styles.field}>
                  <label htmlFor="telephone">Téléphone *</label>
                  <input
                    id="telephone"
                    type="tel"
                    placeholder="06 12 34 56 78"
                    {...register("telephone", { required: "Téléphone requis" })}
                  />
                  {errors.telephone && <span className={styles.errorMsg}>{errors.telephone.message}</span>}
                </div>
              </div>
              <div className={styles.field}>
                <label htmlFor="service">Service souhaité *</label>
                <select id="service" {...register("service", { required: "Veuillez sélectionner un service" })}>
                  <option value="">Sélectionnez un service</option>
                  <option value="peinture">Peinture</option>
                  <option value="parquet">Parquet</option>
                  <option value="carrelage">Carrelage</option>
                  <option value="sol-vinyle">Sol Vinyle</option>
                  <option value="nettoyage">Nettoyage</option>
                  <option value="drywall">Drywall / Placo</option>
                  <option value="plusieurs">Plusieurs services</option>
                </select>
                {errors.service && <span className={styles.errorMsg}>{errors.service.message}</span>}
              </div>
              <div className={styles.field}>
                <label htmlFor="description">Description du projet</label>
                <textarea
                  id="description"
                  placeholder="Décrivez votre projet (surface, type de travaux, contraintes...)"
                  {...register("description")}
                />
              </div>
              <button type="submit" className={styles.submitBtn}>
                Envoyer ma demande de devis
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
