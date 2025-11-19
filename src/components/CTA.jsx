import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-primary text-white" id="contato">
      <div className="mx-auto p-4">
        <div className="flex flex-col items-center justify-center gap-4 text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            {t("cta.title")}
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-4">
            {t("cta.subTitle")}
          </p>

          <button className="bg-secondary rounded-full px-6 py-2">
            <a
              href="hhttps://api.whatsapp.com/send/?phone=5522997008289&text&app_absent=0"
              target="_blank"
              className="flex flex-row items-center gap-2 hover:gap-4 transition-all text-white font-stack font-bold"
            >
              {t("cta.button")}
              <ArrowRight size={22}/>
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
