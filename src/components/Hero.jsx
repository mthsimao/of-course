import { Globe, ArrowRight } from "lucide-react";
import heroImage from "../assets/images/hero-language.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-linear-to-br from-hero-from to-hero-to opacity-90 bg-black/40"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "multiply",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/40">
            <Globe className="w-4 h-4" />
            <span className="text-sm font-medium">
              Aprenda um novo idioma hoje
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Domine Inglês e Espanhol
          </h1>

          <p className="text-[1.1rem] md:text-2xl mb-8 text-foreground max-w-2xl mx-auto">
            Aprenda com professores nativos e metodologia comprovada. Aulas ao
            vivo, flexíveis e adaptadas ao seu ritmo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center w-60 sm:w-auto  mx-auto">
            <button className="bg-secondary hover:bg-secondary/85 rounded-2xl flex flex-row items-center gap-2 hover:gap-3 transition-all cursor-pointer font-semibold text-xl py-4 px-6">
              <a href="#courses">Ver Cursos</a>
              <ArrowRight size={16}/>
            </button>

            <button className="bg-white hover:bg-white/75 rounded-2xl flex flex-row items-center gap-2 hover:gap-3 transition-all cursor-pointer font-semibold text-xl text-primary py-4 px-6">
              <a href="#contato">Entre em Contato</a>
            </button>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
