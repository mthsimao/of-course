import Hero from "../components/Hero";
import Features from "../components/Features";
import Courses from "../components/Courses";
import Pricing from "../components/Pricing";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full">

      <div className="flex flex-col flex-1">
        <Hero />
        <Features />
        <Courses />
        <Pricing />
        <CTA />
      </div>

      <Footer />
    </div>
  );
}
