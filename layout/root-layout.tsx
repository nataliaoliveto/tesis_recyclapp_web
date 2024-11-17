import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import type { ReactNode } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <div>          
          <ToastContainer />
        </div>
        <div className="flex flex-col flex-1 w-full">
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
};