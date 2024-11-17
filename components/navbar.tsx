"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Container } from "@/components/ui/container";
import { LoginDialog } from "./login-dialog/login-dialog";

interface NavbarLinkProps {
  href: string;
  img: string;
  label: string;
  onToggleDrawer?: () => void;
}

const NavbarLink = ({ href, img, label, onToggleDrawer }: NavbarLinkProps) => {
  return (
    <Link
      href={href}
      className="flex items-center gap-2 text-gray-700 hover:text-green-500 transition-colors"
      onClick={onToggleDrawer}
    >
      <Image src={img} width={24} height={24} alt={label} />
      <span className="font-semibold">{label}</span>
    </Link>
  );
};

export const Navbar = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const NAVBAR_LINKS = [
    {
      href: "#id-about",
      img: "/icons/aboutRecyclapp.png",
      label: "Acerca de",
    },
    {
      href: "#id-services",
      img: "/icons/services.png",
      label: "Servicios",
    },
    {
      href: "#id-download",
      img: "/icons/download.png",
      label: "Descarga",
    },
    {
      href: "#id-rating",
      img: "/icons/rating.png",
      label: "Opiniones",
    },
    {
      href: "#id-contact",
      img: "/icons/contact.png",
      label: "Contacto",
    },
    {
      href: "#id-footer",
      img: "/icons/leaves.png",
      label: "Seguinos",
    },
  ];

  return (
    <nav className="sticky top-0 w-full h-20 bg-gray-50 shadow-2xl z-50">
      <Container className="h-full">
        <div className="flex items-center justify-between h-full">
          <Link href="/" className="text-gray-700 text-3xl font-black">
            RecyclApp
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-12">
            <LoginDialog onOpenChange={setIsDialogOpen} isOpen={isDialogOpen}>
              <Button variant="ghost" className="flex items-center gap-2">
                <Image
                  src="/icons/login.png"
                  width={24}
                  height={24}
                  alt="login"
                />
                <span className="font-semibold text-gray-700 hover:text-green-500">
                  Ingresar
                </span>
              </Button>
            </LoginDialog>

            {NAVBAR_LINKS.map((link) => (
              <NavbarLink
                key={link.href}
                href={link.href}
                img={link.img}
                label={link.label}
              />
            ))}
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="xl:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col items-center gap-10 pt-10">
                <LoginDialog
                  onOpenChange={setIsDialogOpen}
                  isOpen={isDialogOpen}
                >
                  <Button variant="ghost" className="flex items-center gap-2">
                    <Image
                      src="/icons/login.png"
                      width={24}
                      height={24}
                      alt="login"
                    />
                    <span className="font-semibold text-gray-700 hover:text-green-500">
                      Ingresar
                    </span>
                  </Button>
                </LoginDialog>

                {NAVBAR_LINKS.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <NavbarLink
                      href={link.href}
                      img={link.img}
                      label={link.label}
                    />
                  </SheetClose>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </nav>
  );
};
