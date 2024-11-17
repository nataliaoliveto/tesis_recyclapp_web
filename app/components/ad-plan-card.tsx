import { Button } from "@/components/ui/button";
import { TransactionDialog } from "./transaction-dialog";

interface IAdvertisingPlanCard {
  titleBgColor: string;
  title: string;
  oneTimePrice: string;
}

export const AdvertisingPlanCard = ({
  titleBgColor,
  title,
  oneTimePrice,
}: IAdvertisingPlanCard) => {
  return (
    <div className="flex flex-col justify-between p-4 rounded-[20px] h-[300px] shadow-xl min-w-[300px]">
      <div className={`${titleBgColor} rounded-full w-full py-1`}>
        <p className="text-[28px] font-semibold text-gray-700">{title}</p>
      </div>

      <div className="flex flex-col">
        <p className="text-xl font-medium text-gray-500">Único pago de</p>
        <p className="text-2xl font-semibold text-teal-600">
          AR$ {oneTimePrice}
        </p>
      </div>

      <TransactionDialog duration={title} price={oneTimePrice}>
        <Button
          className="border border-teal-200 rounded-2xl bg-gray-50 text-gray-500 hover:bg-green-400 hover:text-gray-50"
        >
          Solicitar
        </Button>
      </TransactionDialog>
    </div>
  );
};
