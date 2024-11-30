import { Section } from "@/app/components/section";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <Section id="id-services" className="bg-gray-100">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-16 text-gray-600">
        <Image
          src="/assets/RecyclAppInicio.jpeg"
          width={252}
          height={534}
          alt="RecyclApp Home"
          className="w-[252px] h-[534px]"
          style={{ borderWidth: 5, borderColor: "black", borderRadius: 30 }}
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
