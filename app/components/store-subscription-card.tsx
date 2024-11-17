import { TransactionDialog } from "./transaction-dialog";
import { Button } from "@/components/ui/button";

interface IStoreSubscriptionCard {
  titleBgColorSS: string;
  titleSS: string;
  monthlyPrice: string;
  message: string;
}

export const StoreSubscriptionCard = ({
  titleBgColorSS,
  titleSS,
  monthlyPrice,
  message,
}: IStoreSubscriptionCard) => {
  return (
    <div className="w-full lg:w-[350px] h-full p-6 rounded-2xl bg-white border border-gray-100 transition-all duration-300 shadow-lg">
      <div className={`inline-block px-4 py-2 rounded-full ${titleBgColorSS}`}>
        <p className="text-lg font-semibold text-gray-700">{titleSS}</p>
      </div>

      <div className="mt-6 space-y-1">
        <p className="text-sm font-medium text-gray-500">Precio mensual</p>
        <p className="text-3xl font-bold text-teal-600">
          AR$ {monthlyPrice}
          <span className="text-lg">.-</span>
        </p>
      </div>

      <div className="mt-6 min-h-[48px]">
        <p className="text-sm text-gray-500 leading-relaxed">{message}</p>
      </div>

      <div className="mt-8">
        <TransactionDialog duration="Mensual" price={monthlyPrice}>
          <Button className="w-full py-6 rounded-xl bg-teal-500 text-white hover:bg-teal-600 transition-colors duration-300">
            Solicitar
          </Button>
        </TransactionDialog>
      </div>
    </div>
  );
};
