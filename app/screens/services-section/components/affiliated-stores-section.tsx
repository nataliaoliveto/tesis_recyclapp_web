import Image from "next/image";

export const AffiliatedStoresSection = () => {
  return (
    <div className="space-y-8 text-gray-600">
      <div className="flex w-full justify-center">
        <div className="bg-green-200 py-2 px-8 rounded-full">
          <p className="text-3xl font-semibold">Tiendas adheridas</p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row max-w-[600px] mx-auto lg:mr-[20%] lg:ml-auto gap-8">
        <div className="flex flex-col justify-center space-y-6 text-left">
          <p className="text-xl">
            Si te registras como Tienda en nuestra aplicación, los demás
            recicladores podrán conocer tus servicios
          </p>
          <div className="w-[375px] h-1 bg-green-100" />
          <p className="text-xl">
            Podrás adquirir materiales de las publicaciones y{" "}
            <span className="font-semibold">
              reducir el costo de esta materia prima a cero
            </span>
          </p>
          <div className="w-[375px] h-1 bg-green-100" />
          <p className="text-xl">
            Además podrás ofrecer beneficios a aquellos que cuenten con
            puntos acumulados
          </p>
        </div>
        <Image
          src="/assets/mobilePhone.png"
          width={252}
          height={534}
          alt="estructura de un celular"
        />
      </div>
    </div>
  );
}; 