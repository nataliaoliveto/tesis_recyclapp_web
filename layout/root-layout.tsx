import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { auth } from "@clerk/nextjs/server";
import type { ReactNode } from "react";

export const RootLayout = async ({ children }: { children: ReactNode }) => {
  const { userId } = await auth();

  return (
    <>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar userId={userId} />
        <div className="flex flex-col flex-1 w-full">
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
};