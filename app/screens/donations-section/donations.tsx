import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export const Donations = () => {
  return (
    <section className="w-full bg-gradient-to-r from-green-50 to-green-100 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <h2 className="text-3xl font-bold text-green-800">
            ¡Apoyá nuestro proyecto!
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            Tu apoyo nos ayuda a seguir desarrollando herramientas para un mundo
            más sustentable.
          </p>

          <Link
            href="https://cafecito.app/recyclapp"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition-transform hover:scale-105 w-full max-w-md"
          >
            <Card className="border-none">
              <CardHeader>
                <CardTitle className="text-2xl text-green-800">Doná con Cafecito</CardTitle>
                <CardDescription>
                  Ayudanos a mantener el proyecto vivo
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center space-y-6">
                <Image
                  src="/cafecito-logo.svg"
                  alt="Cafecito Logo"
                  width={120}
                  height={120}
                  className="dark:invert"
                />
                <Button className="bg-[#2ecc71] hover:bg-[#27ae60] text-white w-full">
                  Invitanos un cafecito
                </Button>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </section>
  );
};
