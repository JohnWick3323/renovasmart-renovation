import type { Route } from "./+types/home";
import { HeroSection } from "~/blocks/home/hero-section";
import { ServicesOverview } from "~/blocks/home/services-overview";
import { WhyChooseUs } from "~/blocks/home/why-choose-us";
import { RecentProjectsGallery } from "~/blocks/home/recent-projects-gallery";
import { ClientTestimonials } from "~/blocks/home/client-testimonials";
import { CallToActionQuote } from "~/blocks/home/call-to-action-quote";
import styles from "./home.module.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "RenovaSmart Rénovation - Accueil" },
    { name: "description", content: "Rénovation intérieure professionnelle à Paris : peinture, parquet, carrelage, sol vinyle et nettoyage après travaux." },
  ];
}

export default function Home() {
  return (
    <main className={styles.page}>
      <HeroSection />
      <ServicesOverview />
      <WhyChooseUs />
      <RecentProjectsGallery />
      <ClientTestimonials />
      <CallToActionQuote />
    </main>
  );
}
