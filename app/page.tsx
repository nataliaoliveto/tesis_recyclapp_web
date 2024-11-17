import { RootLayout } from "@/layout/root-layout";
import { About } from "./screens/about-section/about";
import { History } from "./screens/history-section/history";
import { Hero } from "./screens/hero-section/hero";
import { Services } from "./screens/services-section/services";
import { Download } from "./screens/download-section/download";
import { Rating } from "./screens/rating-section/rating";
import { Contact } from "./screens/contact-section/contact";

export default function Home() {
  return (
    <RootLayout>
      <Hero />
      <About />
      <History />
      <Services />
      <Download />
      <Rating />
      <Contact />
    </RootLayout>
  );
}
