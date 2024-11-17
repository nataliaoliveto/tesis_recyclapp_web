import Image from "next/image";
import { Section } from "@/app/components/section";

export const Download = () => {
  return (
    <Section id="id-download" className="bg-yellow-100">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
        <Image
          src="/assets/mobilePhone.png"
          width={252}
          height={534}
          alt="estructura de un celular"
        />

        <div className="h-full flex flex-col justify-between">
          <div className="flex flex-col w-[420px] mb-4 text-center lg:text-left gap-4">
            <h2 className="text-5xl font-bold text-gray-800">
              Descarga nuestra aplicación
            </h2>
            <h3 className="text-2xl font-medium text-gray-700">
              Sé parte de esta gran comunidad
            </h3>
          </div>

          <a
            href="#id-download"
            className="flex flex-col lg:flex-row items-center"
          >
            <Image
              src="/assets/google-play-badge.png"
              width={215}
              height={84}
              alt="Google Play badge download"
              className="mb-1"
            />
          </a>
        </div>
      </div>
    </Section>
  );
};
