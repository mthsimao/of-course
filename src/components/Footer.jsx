import { Facebook, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {

  return (
    <footer className="bg-footer-bg text-white p-6 md:p-12">
      <div className=" grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-4">
        <div className="footer-div">
          <h3 className="title">Of Course</h3>
          <p className="text-footer-link">
            Transformando vidas através do aprendizado de idiomas
          </p>
        </div>

        <div className="footer-div">
          <h3>Cursos</h3>
          <ul className="space-y-3">
            <li>Inglês</li>
            <li>Espanhol</li>
          </ul>
        </div>

        <div className="footer-div">
          <h3>Redes Sociais</h3>
          <ul className="space-y-3">
            <li>
              <a
                href="https://www.facebook.com/ofcourseenglish"
                target="_blank"
                className="flex flex-row items-center gap-3 hover:underline"
              >
                <Facebook size={24} strokeWidth={2} />
                <span>Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/ofcoursecordeiro/"
                target="_blank"
                className="flex flex-row items-center gap-3 hover:underline"
              >
                <Instagram size={24} strokeWidth={2} />
                <span>Instagram</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-div">
          <h3>Contato</h3>

          <ul className="space-y-3">
            <li>
              <Phone size={20} />
              <a
                href="https://wa.me/5522997008289"
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
          <p>&copy; 2025 Of Course.  Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
