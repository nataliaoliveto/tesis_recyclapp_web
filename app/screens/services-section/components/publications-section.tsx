import Image from "next/image";

export const PublicationsSection = () => {
  return (
    <div className="mt-20 pt-8 w-full bg-gray-50 flex flex-col lg:flex-row items-center justify-center text-gray-600 px-4 lg:px-20 py-12">
      <div className="flex flex-col justify-center h-full lg:w-1/3">
        <div className="flex w-full justify-center mb-8">
          <div className="bg-yellow-200 py-2 px-8 rounded-full">
            <p className="text-3xl font-semibold">Publicaciones</p>
          </div>
        </div>
        <div className="flex flex-col max-w-[400px] justify-center items-center mx-auto">
          <div className="my-5"></div>
          <Image
            src="/icons/numberOne.png"
            width={32}
            height={32}
            alt="estructura de un celular"
            className="mb-5"
          />
          <p className="text-xl text-center">
            Podrás publicar qué materiales ofreces o buscas (o necesitas que
            trasladen a un Punto Verde)
          </p>
          <Image
            src="/icons/numberTwo.png"
            width={32}
            height={32}
            alt="estructura de un celular"
            className="my-5"
          />
          <p className="text-xl text-center">
            Otro reciclador confirma que necesita o tiene esos materiales
          </p>
          <Image
            src="/icons/numberThree.png"
            width={32}
            height={32}
            alt="estructura de un celular"
            className="my-5"
          />
          <p className="text-xl text-center">
            Arreglan el punto de encuentro
          </p>
        </div>
      </div>
      <div className="lg:w-1/3 flex justify-center my-8 lg:my-0">
        <Image
          src="/assets/mobilePhone.png"
          width={252}
          height={534}
          alt="estructura de un celular"
        />
      </div>
      <div className="lg:w-1/3 h-full space-y-8 flex justify-center">
        <div className="flex flex-col m-5 max-w-[400px]">
          <p className="text-xl">En este menú podrás ver rápidamente:</p>
          <div className="w-[350px] h-1 bg-yellow-200" />
          <ul className="list-disc pl-5">
            <li className="text-xl">tus publicaciones activas</li>
            <li className="text-xl">
              las publicaciones aceptadas por ambas partes
            </li>
            <li className="text-xl">todas las publicaciones activas</li>
          </ul>
        </div>
      </div>
    </div>
  );
}; 