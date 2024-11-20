import { auth } from "@clerk/nextjs/server";
import { StoreSubscriptionCard } from "../../../components/store-subscription-card";
import { subscriptionsApi } from "@/services/api.subscriptions";

export const STORE_SUBSCRIPTIONS = ["USBONmensual", "USBOFFmensual"];

export const StorePlansSection = async () => {
  const subscriptions = await subscriptionsApi.getSubscriptions();
  const { userId } = await auth();

  const storeSubscriptions = subscriptions.filter((sub) =>
    STORE_SUBSCRIPTIONS.includes(sub.name)
  );

  if (!userId) return null;

  return (
    <div className="flex flex-col items-center justify-center pb-16">
      <div className="flex flex-col items-center justify-center mb-8">
        <h2 className="text-4xl font-semibold text-center text-gray-600">
          Planes para Tiendas
        </h2>
        <div className="w-[400px] h-[10px] bg-teal-100" />
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center text-center p-4 rounded-3xl bg-gray-50 space-y-6 lg:space-y-0 lg:space-x-6">
        {storeSubscriptions.map((subscription) => (
          <StoreSubscriptionCard
            key={subscription.id}
            userId={userId}
            subscriptionId={subscription.id}
            subscriptionName={subscription.name}
            titleBgColorSS="bg-teal-200"
            titleSS={getTitleFromType(subscription.name).title}
            message={getTitleFromType(subscription.name).message}
            monthlyPrice={Intl.NumberFormat("es-AR", {
              style: "currency",
              currency: "ARS",
            }).format(subscription.amount)}
          />
        ))}
      </div>
    </div>
  );
};

const getTitleFromType = (name: string) => {
  switch (name) {
    case "USBONmensual":
      return {
        title: "La tienda ofrece beneficios",
        message: "con al menos dos beneficios activos ofrecidos a los usuarios",
      };
    case "USBOFFmensual":
      return {
        title: "La tienda no ofrece beneficios",
        message: "",
      };
    default:
      return {
        title: "",
        message: "",
      };
  }
};
