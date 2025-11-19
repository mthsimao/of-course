import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Courses from "../components/Courses";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />
      <div className="bg-section-bg flex flex-col gap-6 flex-1">
        <Hero />
        <Features />
        <Courses />
        <CTA />
      </div>

      <Footer />
    </div>
  );
}
