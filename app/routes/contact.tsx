import type { Route } from "./+types/contact";
import { ContactHero } from "~/blocks/contact/contact-hero";
import { QuoteRequestForm } from "~/blocks/contact/quote-request-form";
import { ContactInformation } from "~/blocks/contact/contact-information";
import { LocationMap } from "~/blocks/contact/location-map";
import styles from "./contact.module.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact - RenovaSmart Rénovation" },
    { name: "description", content: "Contactez RenovaSmart pour votre devis gratuit de rénovation intérieure. Réponse sous 24-48h." },
  ];
}

export default function Contact() {
  return (
    <main className={styles.page}>
      <ContactHero />
      <QuoteRequestForm />
      <ContactInformation />
      <LocationMap />
    </main>
  );
}
