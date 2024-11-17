import { Section } from "@/app/components/section";
import Image from "next/image";

export const Hero = () => {
  return (
    <Section id="id-hero" className="bg-gradient-to-b from-green-200 to-white">
      <div className="grid grid-cols-1 md:grid-cols-8 gap-8 min-h-[70vh] items-center">
        <div className="col-span-1 md:col-span-4 p-8 md:p-12 space-y-6">
          <div className="flex flex-row items-center gap-4">
            <h1 className="text-6xl md:text-8xl text-gray-800 font-bold bg-gradient-to-r from-green-100 to-[papayawhip] p-2 rounded-lg">
              RecyclApp
            </h1>
            <Image
              src="/icons/leaves.png"
              alt="hojas icono RecylApp"
              width={128}
              height={128}
            />
          </div>
          <p className="text-2xl md:text-3xl text-gray-700 leading-relaxed">
            Más que una red social para unir a quienes cuidamos el medioambiente
          </p>
        </div>
      </div>

      <div className="my-20 flex w-full justify-center">
        <div className="flex flex-col md:flex-row items-center gap-8 max-w-screen-xl bg-white p-16 rounded-2xl shadow-lg">
          <Image
            src="/icons/heroCity.png"
            alt="mitad ciudad mitad planeta"
            width={256}
            height={256}
            className="transform hover:scale-105 transition-transform duration-300"
          />
          <div className="flex flex-col max-w-[800px] justify-center items-center space-y-6">
            <p className="text-2xl md:text-3xl text-green-600 font-bold leading-tight">
              ¿Sabías que en la Ciudad de Buenos Aires se generan más de 8 mil
              toneladas de residuos por día?
            </p>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Lamentablemente, sólo se recuperan 300. Uno de los mayores
              problemas es la falta de un espacio centralizado donde aprender e
              interactuar con otras personas sobre el reciclaje
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-100 to-green-50 p-8 md:p-12 border rounded-2xl shadow-md">
        <div className="flex flex-col items-center space-y-4">
          <p className="text-xl md:text-2xl text-gray-700 text-center leading-relaxed max-w-screen-lg italic">
            Nuestro objetivo principal es que tengan a un click de distancia todas
            las herramientas necesarias para que reciclar sea sencillo y puedan
            incorporarlo en su día a día
          </p>
        </div>
      </div>
    </Section>
  );
};
