import { BookOpen, Users, Award } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Professores Fluentes",
      description: "Aprenda com especialistas que falam o idioma fluentemente.",
    },
    {
      icon: Users,
      title: "Metodologia Comprovada",
      description: "Técnicas de ensino eficazes para garantir seu progresso.",
    },
    {
      icon: Award,
      title: "Certificação",
      description: "Receba certificado reconhecido ao completar cada nível.",
    },
  ];

  return (
    <section className="py-15 bg-section-bg">
      <div className="mx-auto p-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-muted font-bold mb-4">
            Por que escolher nossos cursos?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Uma experiência de aprendizado completa e eficiente.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="border-none shadow hover:shadow-lg transition-shadow max-w-100 rounded-2xl"
              >
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
