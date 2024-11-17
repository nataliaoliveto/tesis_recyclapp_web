import React from "react";
import Image from "next/image";
import { Section } from "../../components/section";
import { ParallaxSection } from "./components/parallax-section";

export const About = () => {
  return (
    <>
      <Section id="id-about" className="bg-gradient-to-t from-green-100 to-white">
        <div className="flex justify-center mb-20 mt-20">
          <h2 className="text-5xl font-semibold text-green-600">
            En RecyclApp pueden aprender
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row justify-between space-y-8 lg:space-y-0 lg:space-x-8">
          <div className="flex flex-col items-center justify-center h-[350px] min-w-[300px] p-4 space-y-4 bg-yellow-50 rounded-lg shadow-lg">
            <Image
              src="/icons/recycle.png"
              width={100}
              height={100}
              alt="símbolo reciclaje flechas verdes"
            />
            <p className="w-[200px] text-center text-xl text-gray-700">
              Qué <strong>materiales</strong> reciclar y cómo
            </p>
          </div>

          <div className="flex flex-col items-center justify-center h-[350px] min-w-[300px] p-4 space-y-4 bg-yellow-50 rounded-lg shadow-lg">
            <Image
              src="/icons/planetEarth.png"
              width={100}
              height={100}
              alt="planeta tierra rodeado de una planta"
            />
            <p className="w-[200px] text-center text-xl text-gray-700">
              Ver <strong>dónde se encuentran todos los Puntos Verdes</strong> a los que
              pueden ir a alcanzarlos
            </p>
          </div>

          <div className="flex flex-col items-center justify-center h-[350px] min-w-[300px] p-4 space-y-4 bg-yellow-50 rounded-lg shadow-lg">
            <Image
              src="/icons/community.png"
              width={100}
              height={100}
              alt="iconos de usuarios conectados entre sí"
            />
            <p className="w-[200px] text-center text-xl text-gray-700">
              <strong>Conectar con más gente</strong> para intercambiar materiales y
              reutilizarlos
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-center py-20 text-2xl">
          <div className="flex justify-center">
            <Image
              src="/icons/notepad.png"
              width={150}
              height={150}
              className="object-contain"
              alt="hoja memo"
            />
          </div>
          <div className="flex justify-center pt-12">
            <p className="w-[600px] text-center text-gray-700">
              Hay Tiendas con políticas de cuidado ambiental que reutilizarían
              estos materiales llevando{" "}
              <strong>el costo de su materia prima a cero</strong>
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/icons/coinGreen.png"
              width={150}
              height={150}
              className="object-contain"
              alt="moneda con hojas creciendo de ella"
            />
          </div>
        </div>
      </Section>

      <div className="w-full text-xl bg-gradient-to-b from-green-100 to-white py-16">
        <div className="flex flex-col lg:flex-row justify-center items-center">
          <div className="flex justify-center">
            <p className="w-[300px] text-center text-gray-700">
              La <strong>materia orgánica</strong> también puede ser reducida a través del
              compost para la nutrición de la tierra
            </p>
          </div>
          <div className="flex justify-center px-8">
            <Image
              src="/icons/compost.png"
              width={256}
              height={256}
              alt="ciclo de tierra y compost"
            />
          </div>
          <div className="flex justify-center">
            <p className="w-[300px] text-center text-gray-700">
              Te contamos cómo comenzar en este proceso y dónde se encuentran
              las <strong>composteras comunitarias</strong>
            </p>
          </div>
        </div>
      </div>

      <div className="w-full bg-gray-50 text-2xl p-24">
        <div className="flex flex-col lg:flex-row justify-center">
          <div className="flex justify-center px-8">
            <Image
              src="/icons/discount.png"
              width={126}
              height={126}
              alt="tarjetas con el símbolo de descuento"
              className="object-cover"
            />
          </div>
          <div className="flex justify-center max-w-screen-sm">
            <p className="text-gray-700">
              Para todas las personas comprometidas con las tres R (reducir,
              reutilizar y reciclar) <strong>ofrecemos un sistema de puntos</strong> que
              van a poder cambiar por descuentos o beneficios en las Tiendas
              adheridas
            </p>
          </div>
        </div>
      </div>

      <ParallaxSection
        imageUrl="/assets/compostHands.jpg"
        alt="manos sosteniendo compost"
      />
    </>
  );
};
