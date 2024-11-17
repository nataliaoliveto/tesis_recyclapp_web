import Image from "next/image";
import { TransactionDialog } from "./transaction-dialog";
import { Button } from "@/components/ui/button";

export const DonationCard = () => {
  return (
    <div className="w-full lg:min-w-[820px] lg:max-w-[900px] text-center bg-gray-50 px-4 py-4 pb-8 min-h-[330px] shadow-lg flex flex-col justify-between rounded-[20px] relative">
      <div className="flex w-full justify-center bg-yellow-200 rounded-full">
        <p className="text-[28px] tracking-[4px] font-semibold text-gray-600">
          Donaciones
        </p>
      </div>
      <div className="flex self-center max-w-[730px]">
        <p className="text-[22px] font-semibold text-gray-600">
          ¿Te interesa colaborar económicamente con el mantenimiento de la
          aplicación, pero no a través de la publicidad?
        </p>
      </div>
      <div className="flex self-center max-w-[500px]">
        <p className="text-[22px] font-semibold text-gray-600">
          ¡Podrás hacerlo a través de donaciones! Estaremos agradecidos con tu
          ayuda
        </p>
      </div>

      <div className="flex h-[2px] w-full bg-yellow-200" />

      <div className="flex flex-col lg:flex-row gap-6 text-center p-4 rounded-[24px] bg-gray-50 items-center">
        <DonationCardValues donationPrice="100" />
        <DonationCardValues donationPrice="500" />
        <DonationCardValues donationPrice="1.000" />
      </div>

      <div className="hidden md:flex h-[65px] w-[65px] absolute right-12 bottom-12">
        <Image
          src="/icons/happy.png"
          width={64}
          height={64}
          alt="carita feliz"
        />
      </div>
    </div>
  );
};

const DonationCardValues = ({ donationPrice }: { donationPrice: string }) => {
  return (
    <div className="min-w-[250px] max-w-[250px] lg:max-w-[300px] text-center bg-gray-50 px-4 py-4 pb-8 min-h-[150px] shadow-lg flex flex-col justify-between rounded-[20px] relative">
      <div className="flex flex-col">
        <p className="text-[20px] font-medium text-gray-500">Colaborar con</p>
        <p className="text-[24px] font-semibold text-yellow-500">
          AR$ {donationPrice}
        </p>
      </div>

      <TransactionDialog duration="Semanal" price={donationPrice}>
        <Button className="border border-yellow-200 rounded-2xl bg-gray-50 text-gray-500 hover:bg-green-400 hover:text-gray-50">
          Solicitar
        </Button>
      </TransactionDialog>

      <div className="flex h-[2px] w-full bg-yellow-200" />
    </div>
  );
};
