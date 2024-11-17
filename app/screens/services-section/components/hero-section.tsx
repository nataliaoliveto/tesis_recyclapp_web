import { Section } from "@/app/components/section";
import Image from "next/image";


export const HeroSection = () => {
  return (
    <Section id="id-services" className="bg-gray-100">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-16 text-gray-600">
        <Image
          src="/assets/mobilePhone.png"
          width={252}
          height={534}
          alt="estructura de un celular"
          className="w-[252px] h-[534px]"
        />
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-6xl font-semibold text-center">
            Nuestros servicios
          </h2>
          <div className="w-[400px] h-[10px] bg-green-100 mt-2" />
        </div>
      </div>
    </Section>
  );
}; 