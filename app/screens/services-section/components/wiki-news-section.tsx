import Image from "next/image";
import { Section } from "@/app/components/section";

export const WikiNewsSection = () => {
  return (
    <Section className="bg-gray-100">
      <div className="flex flex-col lg:flex-row justify-center gap-8 items-center lg:items-start text-gray-600">
        <ServiceCard
          title="Wiki y noticias"
          bgColor="bg-yellow-200"
          content={
            <div className="h-full space-y-8">
              <div className="flex flex-col m-5">
                <p className="text-2xl">
                  <b>Wiki</b> donde podrás aprender:
                </p>
                <div className="w-[350px] h-1 bg-yellow-200 my-5" />
                <ul className="list-disc pl-6">
                  <li className="text-xl">
                    Los diferentes tipos de materiales que son reciclables y
                    los que no deben ser tirados como basura orgánica
                  </li>
                  <li className="text-xl">
                    Cómo emplear las técnicas de reciclaje o reutilización
                  </li>
                  <li className="text-xl">
                    Cómo hacer compost en casa
                  </li>
                </ul>
                <div className="w-[350px] h-1 bg-yellow-200 my-5" />
                <p className="text-xl text-center">
                  <b>Noticias</b> de impacto general en el medioambiente y
                  contenido multimedia externo en plataformas de Streaming
                </p>
              </div>
            </div>
          }
        />

        <ServiceCard
          title="Publicidad"
          bgColor="bg-cyan-200"
          content={
            <div className="flex flex-col justify-center h-full space-y-8">
              <div className="flex flex-col max-w-[400px] justify-center items-center m-5">
                <p className="text-xl text-center">
                  ¿Tu negocio sigue políticas verdes? Tenemos un espacio
                  exclusivo para vos. Visita nuestros planes de contratación
                  debajo
                </p>
              </div>
            </div>
          }
        />
      </div>
    </Section>
  );
};

interface ServiceCardProps {
  title: string;
  bgColor: string;
  content: React.ReactNode;
}

const ServiceCard = ({ title, bgColor, content }: ServiceCardProps) => {
  return (
    <div className="flex items-center">
      <div className="px-4 max-w-[600px]">
        <div className="flex flex-row items-center justify-center">
          <Image
            src="/assets/mobilePhone.png"
            width={252}
            height={534}
            alt="estructura de un celular"
            className="w-[252px] h-[534px]"
          />
          <div className={`flex ${bgColor} px-4 py-2 rounded-full`}>
            <h2 className="text-2xl lg:text-3xl font-semibold">
              {title}
            </h2>
          </div>
        </div>
        {content}
      </div>
    </div>
  );
}; 