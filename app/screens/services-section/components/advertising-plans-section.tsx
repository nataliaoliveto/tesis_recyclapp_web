import { Section } from "@/app/components/section";
import { AdvertisingPlanCard } from "@/app/components/ad-plan-card";
import { subscriptionsApi } from "@/services/api.subscriptions";
import { auth } from "@clerk/nextjs/server";

export const AdvertisingPlansSection = async () => {
  const subscriptions = await subscriptionsApi.getSubscriptions();
  const { userId } = await auth();

  const adSubscriptions = subscriptions.filter((sub) =>
    ["ADdiaria", "ADsemanal", "ADmensual"].includes(sub.name)
  );

  const getTitleFromType = (name: string) => {
    switch (name) {
      case "ADdiaria":
        return "Diaria";
      case "ADsemanal":
        return "Semanal";
      case "ADmensual":
        return "Mensual";
      default:
        return "";
    }
  };

  if (!userId) return null;

  return (
    <Section className="py-16">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-4xl font-semibold text-center text-gray-700">
            Planes de publicidad
          </h2>
          <div className="w-[400px] h-2 bg-teal-100" />
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 p-4 text-center">
          {adSubscriptions.map((subscription) => (
            <AdvertisingPlanCard
              key={subscription.id}
              titleBgColor="bg-teal-100"
              title={getTitleFromType(subscription.name)}
              oneTimePrice={Intl.NumberFormat("es-AR", {
                style: "currency",
                currency: "ARS",
              }).format(subscription.amount)}
              userId={userId}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};
