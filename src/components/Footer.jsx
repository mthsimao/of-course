import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-footer-bg text-white p-6 md:p-12">
      <div className=" grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-4">
        <div className="footer-div">
          <h3 className="title">Of Course</h3>
          <p className="text-footer-link">{t("footer.subTitle")}</p>
        </div>

        <div className="footer-div">
          <h3>{t("footer.courses")}</h3>
          <ul className="space-y-3">
            <li>{t("footer.english")}</li>
            <li>{t("footer.spanish")}</li>
          </ul>
        </div>

        <div className="footer-div">
          <h3>{t("footer.socialMedia")}</h3>
          <ul className="space-y-3">
            <li>
              <a
                href="https://www.facebook.com/ofcourseenglish"
                target="_blank"
                className="flex flex-row items-center gap-3 hover:underline"
              >
                <Facebook size={24} strokeWidth={2}/>
                <span>Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/ofcoursecordeiro/"
                target="_blank"
                className="flex flex-row items-center gap-3 hover:underline"
              >
                <Instagram size={24} strokeWidth={2}/>
                <span>Instagram</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-div">
          <h3>{t("footer.contact")}</h3>

          <ul className="space-y-3">
            <li>
              <Phone size={20} />
              <a
                href="https://api.whatsapp.com/send/?phone=5522997008289&text&app_absent=0"
                target="_blank"
              >
                (22) 99700-8289
              </a>
            </li>
            <li>
              <Mail size={20} />
              <span>ofcourse10@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-6">
        <div className="border-t border-footer-link/40 pt-8 text-center text-footer-link/80">
          <p>&copy; 2025 Of Course. {t("footer.allRightsReserved")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
