import React from "react";
import Image from "next/image";
import { Section } from "../../components/section";

export const History = () => {
  return (
    <Section id="id-history" className="bg-gray-100">
      <div className="w-full bg-gray-100 py-6 text-gray-700">
        <div className="flex flex-col items-center justify-center space-y-8">
          <h2 className="text-6xl font-semibold">
            Nuestra Historia
          </h2>
          <div className="w-[400px] h-2 bg-yellow-100" />

          <p className="text-2xl max-w-[1000px] text-center">
            El cuidado del medioambiente es un problema que se agrava con el
            paso del tiempo y, ante la falta de acciones,{" "}
            <strong>comienza a modificarse el ecosistema en el que vivimos.</strong>
          </p>

          <div>
            <div className="max-w-[880px] min-h-[300px] bg-yellow-50 rounded-[20px] 
              flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-x-8 p-8">
              <Image
                src="/icons/survey.png"
                width={256}
                height={256}
                alt="gráfico de barras de estadística"
              />
              <p className="max-w-[460px] text-2xl">
                Hicimos encuestas a decenas de personas que afirmaron querer
                ayudar al planeta pero que no sabían cómo comenzar o les costaba
                cambiar la costumbre de no salir de sus casas para trasladar los
                materiales reciclables
              </p>
            </div>
          </div>

          <p className="max-w-[860px] text-2xl text-center">
            De allí nació nuestro objetivo para contribuir a la sociedad con un
            espacio en común en el que dispongan de toda la información
            necesaria para adoptar{" "}
            <strong>las tres R (reducir, reutilizar y reciclar)</strong> y poder
            interactuar con otras personas e incentivarlas con beneficios por
            sus acciones
          </p>

          <Image
            src="/icons/tripleR.png"
            width={256}
            height={256}
            alt="ciclo de tres R reducir, reutilizar y reciclar"
          />
        </div>

        <div className="flex flex-col gap-12 py-8 px-0 sm:px-[30px] md:px-[80px]">
          {/* Mission Section */}
          <div className="grid grid-cols-4 lg:grid-cols-12">
            <div className="col-start-3 lg:col-start-9 col-end-4 lg:col-end-12">
              <h3 className="text-5xl font-semibold text-right text-gray-600">
                Misión
              </h3>
            </div>
            <div className="col-start-2 lg:col-start-5 col-end-4 lg:col-end-10">
              <div className="min-w-[20px] h-[10px] bg-green-100" />
              <p className="text-2xl text-right">
                Ofrecer un espacio donde las personas interactúen y dispongan de
                todas las herramientas necesarias para aprender. Donde puedan
                colaborar fácilmente sobre el cuidado ambiental y la reducción,
                reutilización y reciclaje de materiales para cuidar el planeta
              </p>
            </div>
          </div>

          {/* Vision Section */}
          <div className="grid grid-cols-4 lg:grid-cols-12">
            <div className="col-start-2 lg:col-start-2 col-end-4 lg:col-end-9">
              <h3 className="text-5xl font-semibold text-gray-600">
                Visión
              </h3>
            </div>
            <div className="col-start-2 lg:col-start-4 col-end-4 lg:col-end-9">
              <div className="min-w-[20px] h-[10px] bg-cyan-100" />
              <p className="text-2xl text-left">
                Queremos ser el punto de encuentro preferido para la comunidad y
                acompañarlos día a día en la incorporación de nuevas costumbres
                responsables con el medio ambiente
              </p>
            </div>
          </div>

          {/* Objective Section */}
          <div className="grid grid-cols-4 lg:grid-cols-12">
            <div className="col-start-3 lg:col-start-9 col-end-4 lg:col-end-12">
              <h3 className="text-5xl font-semibold text-right text-gray-600">
                Objetivo
              </h3>
            </div>
            <div className="col-start-2 lg:col-start-5 col-end-4 lg:col-end-10">
              <div className="min-w-[20px] h-[10px] bg-yellow-200" />
              <p className="text-2xl text-right">
                A corto plazo buscamos unir en CABA a diferentes recicladores,
                tiendas con políticas de cuidado ambiental y personas que
                quieran aprender en un mismo espacio cómodo y exclusivo para que
                puedan interactuar. Buscamos que las tiendas o interesados en
                hacerse conocer puedan contratar nuestros servicios para
                sostener el funcionamiento de la aplicación
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
