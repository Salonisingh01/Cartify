import Image from "next/image";
import HeroSection from "../components/hero-section-3";
import Features from "../components/features-1";
import Integrations from "../components/integrations-1";
import Stats from "../components/stats-4";
import Teams from "../components/team-2";
import Pricing from "../components/pricing-2";
import Footer from "../components/footer-2";
import Contact from "../components/contact-1";

export default function Home() {
  return (

    <div className="overflow-x-hidden w-full min-h-screen">
      <HeroSection/>
      <Features/>
      <Integrations/>
      <Stats/>
      <Teams/>
      <Pricing/>
      <Contact/>
      <Footer/>

    </div>

  );
}
