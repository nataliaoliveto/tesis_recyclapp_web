import Image from "next/image";

export const PointsAndBenefitsSection = () => {
  return (
    <div className="pt-8 w-full bg-gray-50 flex flex-col items-center justify-center">
      <div className="flex flex-col mb-8 justify-center space-y-4 text-gray-600 mt-10">
        <div className="flex flex-col justify-center items-center">
          <div className="w-[375px] h-1 bg-green-100" />
          <p className="text-center text-xl">
            Participando en la aplicación podés obtener
          </p>
        </div>
        <div className="flex w-full justify-center">
          <div className="bg-green-200 py-2 px-8 rounded-full mb-8">
            <p className="text-3xl font-semibold">Puntos y beneficios</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <Image
            src="/assets/mobilePhone.png"
            width={252}
            height={534}
            alt="estructura de un celular"
          />
          <div className="flex flex-col max-w-[450px] justify-center">
            <p className="text-xl">
              Por cada publicación en la que participes,{" "}
              <span className="font-semibold">sumarás puntos</span> que
              luego podrás{" "}
              <span className="font-semibold">
                intercambiar por beneficios
              </span>{" "}
              ofrecidos por las Tiendas adheridas
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}; 