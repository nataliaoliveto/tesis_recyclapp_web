import Image from "next/image";

export const MapsAndListingsSection = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-gray-50 text-gray-600">
      <div className="max-w-[920px] flex flex-col justify-center items-center mt-20">
        <div className="w-full flex justify-center">
          <div className="bg-green-200 py-2 px-8 rounded-full">
            <p className="text-3xl font-semibold">Mapas y listados</p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
          <Image
            src="/assets/mobilePhone.png"
            width={252}
            height={534}
            alt="estructura de un celular"
          />
          <div className="flex flex-col justify-center max-w-[360px]">
            <div className="flex flex-col">
              <p className="max-w-[260px] text-xl font-light">
                Podrás ver la ubicación de
              </p>
              <div className="w-[300px] h-1 bg-green-100" />
              <ul className="list-disc pl-5 text-xl font-light">
                <li>Puntos Verdes</li>
                <li>Composteras Comunitarias</li>
                <li>Tiendas adheridas</li>
              </ul>
              <p className="max-w-[240px] text-xl font-light mt-5">
                <span className="font-semibold">En dos formatos:</span> a
                través del mapa o en forma de lista
              </p>
            </div>
            <div className="flex justify-end text-xl font-light">
              <p className="text-right max-w-[240px] mt-5">
                Podrás <span className="font-semibold">usar filtros</span>{" "}
                para ajustar la búsqueda a tus necesidades
              </p>
            </div>
            <div className="w-[300px] h-1 bg-green-100" />
          </div>
          <Image
            src="/assets/mobilePhone.png"
            width={252}
            height={534}
            alt="estructura de un celular"
          />
        </div>
      </div>
    </div>
  );
}; 