import { BookOpen, Users, Award } from "lucide-react";
import { useTranslation } from "react-i18next";

const Features = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: BookOpen,
      title: t("features.feature1.title"),
      description: t("features.feature1.description"),
    },
    {
      icon: Users,
      title: t("features.feature2.title"),
      description: t("features.feature2.description"),
    },
    {
      icon: Award,
      title: t("features.feature3.title"),
      description: t("features.feature3.description"),
    },
  ];

  return (
    <section className="py-20 bg-section-bg">
      <div className="mx-auto p-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-muted font-bold mb-4">
            {t("features.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("features.subTitle")}
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="border-none shadow-xs hover:shadow-lg transition-shadow max-w-100 rounded-2xl"
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
