import type { Route } from "./+types/propos";
import { AboutHero } from "~/blocks/propos/about-hero";
import { CompanyStory } from "~/blocks/propos/company-story";
import { TeamSection } from "~/blocks/propos/team-section";
import { OurValues } from "~/blocks/propos/our-values";
import { CertificationsExperience } from "~/blocks/propos/certifications-experience";
import styles from "./propos.module.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "À Propos - RenovaXpert Rénovation" },
    { name: "description", content: "Découvrez l'histoire, l'équipe et les valeurs de RenovaXpert, votre expert en rénovation intérieure." },
  ];
}

export default function Propos() {
  return (
    <main className={styles.page}>
      <AboutHero />
      <CompanyStory />
      <TeamSection />
      <OurValues />
      <CertificationsExperience />
    </main>
  );
}
