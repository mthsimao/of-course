import englishFlag from "../assets/images/eua-flag.png";
import spanishFlag from "../assets/images/esp-flag.svg";
import { CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

const Courses = () => {
  const { t } = useTranslation();

  const courses = [
    {
      title: t("courses.course1.title"),
      subTitle: t("courses.course1.subTitle"),
      image: englishFlag,
      levels: t("courses.course1.levels", { returnObjects: true }),
      highlights: t("courses.course1.highlights", { returnObjects: true }),
    },
    {
      title: t("courses.course2.title"),
      subTitle: t("courses.course2.subTitle"),
      image: spanishFlag,
      levels:  t("courses.course2.levels", { returnObjects: true }),
      highlights: t("courses.course2.highlights", { returnObjects: true }),
    },
  ];

  return (
    <section className="py-20 bg-section-bg" id="cursos">
      <div className="mx-auto p-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-muted font-bold mb-4">
            {t("courses.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("courses.subTitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {courses.map((course, index) => (
            <div
              key={index}
              className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow rounded-xl"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={course.image}
                  alt={`Curso de ${course.title}`}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-8">
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  {course.title}
                </h3>

                <div className="mb-6">
                  <p className="text-sm font-semibold text-muted-foreground mb-2 uppercase">
                    {course.subTitle}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {course.levels.map((level, idx) => (
                      <span
                        key={idx}
                        className="bg-light-foreground text-primary px-3 py-1 rounded-full text-sm"
                      >
                        {level}
                      </span>
                    ))}
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {course.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-foreground">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
