import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const navLinks = [
    { title: "Inglês", path: "/english" },
    { title: "Espanhol", path: "/spanish" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
     
      <div className="footer-div">
        <h2>OF COURSE</h2>
        <p>Transformando vidas através do aprendizado de idiomas</p>
      </div>

      <div className="footer-div">
        <h2>Cursos</h2>
        <ul>
          {navLinks.map((navLink) => (
            <li key={navLink.title}>
              <Link to={navLink.path}>{navLink.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="footer-div">
        <h2>empresa</h2>
        <a href="#">sobre nos</a>
        <a href="#">metodologia</a>
        <a href="#">nossos professores</a>
      </div>

      <div className="footer-div">
        <h2>contato</h2>
        <p className="item"><Phone /> (22) 99700-8289</p>
        <p className="item"><Mail /> ofcoursecordeiro@gmail.com</p>
        <p className="item"><Instagram /> - <Facebook /> </p>
      </div>
    </div>
  );
};

export default Footer;
