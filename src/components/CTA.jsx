import { ArrowRight } from "lucide-react";

const CTA = () => {

  return (
    <section className="py-15 bg-primary text-white" id="contato">
      <div className="mx-auto p-4">
        <div className="flex flex-col items-center justify-center gap-4 text-center my-8 md:my-12">
          <h2 className="text-[2.5rem] md:text-5xl font-bold mb-2">
            Pronto para começar a aprender?
          </h2>
          <p className="sm:text-lg max-w-xl mx-auto mb-4">
            Converse com nossos consultores e encontre o curso perfeito para
            você.
          </p>

          <button className="bg-secondary rounded-full px-6 py-2">
            <a
              href="https://api.whatsapp.com/send/?phone=5522997008289&text&app_absent=0"
              target="_blank"
              className="flex flex-row items-center gap-2 hover:gap-4 transition-all text-white font-stack font-bold"
            >
              Entre em contato
              <ArrowRight size={22} />
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
