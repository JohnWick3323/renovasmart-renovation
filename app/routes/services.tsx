import type { Route } from "./+types/services";
import { ServicesHero } from "~/blocks/services/services-hero";
import { PeintureSection } from "~/blocks/services/peinture-section";
import { ParquetSection } from "~/blocks/services/parquet-section";
import { CarrelageSection } from "~/blocks/services/carrelage-section";
import { SolVinyleSection } from "~/blocks/services/sol-vinyle-section";
import { NettoyageSection } from "~/blocks/services/nettoyage-section";
import { DrywallSection } from "~/blocks/services/drywall-section";
import styles from "./services.module.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Nos Services - RenovaXpert Rénovation" },
    { name: "description", content: "Découvrez tous nos services : peinture, parquet, carrelage, sol vinyle et nettoyage après travaux." },
  ];
}

export default function Services() {
  return (
    <main className={styles.page}>
      <ServicesHero />
      <PeintureSection />
      <ParquetSection />
      <CarrelageSection />
      <SolVinyleSection />
      <NettoyageSection />
      <DrywallSection />
    </main>
  );
}
