import { StoreSubscriptionCard } from "../../../components/store-subscription-card";

export const StorePlansSection = () => {
  return (
    <div className="flex flex-col items-center justify-center pb-16">
      <div className="flex flex-col items-center justify-center mb-8">
        <h2 className="text-4xl font-semibold text-center text-gray-600">
          Planes para Tiendas
        </h2>
        <div className="w-[400px] h-[10px] bg-teal-100" />
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center text-center p-4 rounded-3xl bg-gray-50 space-y-6 lg:space-y-0 lg:space-x-6">
        <StoreSubscriptionCard
          titleBgColorSS="bg-teal-200"
          titleSS="La tienda ofrece beneficios"
          message="con al menos dos beneficios activos ofrecidos a los usuarios"
          monthlyPrice="1.500"
        />
        <StoreSubscriptionCard
          titleBgColorSS="bg-teal-100"
          titleSS="La tienda no ofrece beneficios"
          message=""
          monthlyPrice="2.500"
        />
      </div>
    </div>
  );
}; 