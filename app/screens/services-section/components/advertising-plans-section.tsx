import { Section } from "@/app/components/section";
import { AdvertisingPlanCard } from "@/app/components/ad-plan-card";

export const AdvertisingPlansSection = () => {
  return (
    <Section className="py-16">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-4xl font-semibold text-center text-gray-700">
            Planes de publicidad
          </h2>
          <div className="w-[400px] h-2 bg-teal-100" />
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 p-4 rounded-3xl shadow-lg bg-gray-50 text-center">
          <AdvertisingPlanCard
            titleBgColor="bg-teal-100"
            title="Diaria"
            oneTimePrice={Intl.NumberFormat("es-AR", {
              style: "currency",
              currency: "ARS",
            }).format(375)}
          />
          <AdvertisingPlanCard
            titleBgColor="bg-teal-200"
            title="Semanal"
            oneTimePrice={Intl.NumberFormat("es-AR", {
              style: "currency",
              currency: "ARS",
            }).format(2115)}
          />
          <AdvertisingPlanCard
            titleBgColor="bg-teal-300"
            title="Mensual"
            oneTimePrice={Intl.NumberFormat("es-AR", {
              style: "currency",
              currency: "ARS",
            }).format(7615)}
          />
        </div>
      </div>
    </Section>
  );
};
