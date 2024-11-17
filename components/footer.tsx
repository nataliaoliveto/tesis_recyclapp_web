import React from "react";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center mt-10 text-gray-600 bg-gray-50" id="id-footer">
      <div className="flex justify-center w-full px-5 py-40">
        <div className="flex max-w-[900px] w-full items-center">
          <div className="flex flex-col max-w-[500px]">
            <h2 className="font-bold text-[60px] leading-none mb-4">
              Seguinos en las redes
            </h2>
            <p className="text-2xl leading-snug">
              ¿Querés enterarte de las últimas novedades?
            </p>
            <p className="text-2xl leading-snug">
              ¡No te olvides de seguirnos!
            </p>
          </div>
          
          <div className="relative py-4 px-4 h-[350px] w-[400px]">
            {/* Instagram */}
            <div className="absolute top-0 w-[100px] h-[100px]">
              <a 
                href="https://www.instagram.com/recyclappok/"
                className="flex flex-col items-center"
              >
                <Image
                  src="/icons/instagram.png"
                  width={64}
                  height={64}
                  alt="Instagram link"
                  className="mb-1"
                />
                <span className="text-base">RecyclAppOk</span>
              </a>
            </div>

            {/* Twitter */}
            <div className="absolute bottom-0 left-0 right-0 mx-auto w-[100px] h-[100px]">
              <a 
                href="https://twitter.com/recyclappok"
                className="flex flex-col items-center"
              >
                <Image
                  src="/icons/twitter.png"
                  width={64}
                  height={64}
                  alt="Twitter link"
                  className="mb-1"
                />
                <span className="text-base">RecyclAppOk</span>
              </a>
            </div>

            {/* Facebook */}
            <div className="absolute top-[35%] right-0 w-[100px] h-[100px]">
              <a 
                href="https://www.facebook.com/recyclappok"
                className="flex flex-col items-center"
              >
                <Image
                  src="/icons/facebook.png"
                  width={64}
                  height={64}
                  alt="Facebook link"
                  className="mb-1"
                />
                <span className="text-base">RecyclAppOk</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center w-full py-6 mt-0 bg-green-100">
        <p className="text-center">
          RecyclApp © {new Date().getFullYear()} Todos los derechos reservados | Desarrollado por
          Natalia Oliveto & Rodrigo Toyama
        </p>
      </div>
    </footer>
  );
};
