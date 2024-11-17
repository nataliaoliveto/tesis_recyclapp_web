import { Section } from "../../components/section";
import { DonationCard } from "../../components/donation-card";
import { AdvertisingPlansSection } from "./components/advertising-plans-section";
import { WikiNewsSection } from "./components/wiki-news-section";
import { HeroSection } from "./components/hero-section";
import { MapsAndListingsSection } from "./components/maps-and-listings-section";
import { PublicationsSection } from "./components/publications-section";
import { PointsAndBenefitsSection } from "./components/points-and-benefits-section";
import { AffiliatedStoresSection } from "./components/affiliated-stores-section";
import { StorePlansSection } from "./components/store-plans-section";
import { Separator } from "@/components/ui/separator";

export const Services = () => {
  return (
    <>
      <HeroSection />
      <WikiNewsSection />
      <AdvertisingPlansSection />
      <Section className="py-8">
        <div className="w-full flex flex-col items-center">
          <DonationCard />
        </div>
      </Section>
      <div className="px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <Separator className="my-8 bg-gray-200" />
        </div>
      </div>
      <Section>
        <MapsAndListingsSection />
        <PublicationsSection />
        <PointsAndBenefitsSection />
        <AffiliatedStoresSection />
      </Section>
      <Section>
        <StorePlansSection />
      </Section>
    </>
  );
};
