import style from "../styles/Footer.module.css";
import logopeqn from "../styles/img/logopeqn.png";
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';



function Footer() {
  return (
    <div className={style.main}>
      <div className={style.center}>
        <div className={style.menu}>

          <div className="horario">
            <h3>Horários de Funcionamento</h3>
            <p>Segunda a Sexta: 9h - 18h</p>
            <p>Sábado: 10h - 15h</p>
            <p>Domingo: Fechado</p>
          </div>

          <div className="redes">
            <h3>Redes Sociais</h3>
            <ul>
              <p> <img src={InstagramIcon} alt="Instagram" /> Instagram</p>
              <p> <img src="" alt="Facebook" /> Facebook</p>
              <p> <img src={XIcon} alt="Twitter" /> Twitter</p>
            </ul>
          </div>

          <div className="direito">
            <img src={logopeqn} alt="fotobarba" className="logopequeno" />
            <p>Todos os direitos são reservados.</p>
          </div>

        </div>
      </div>

    </div>

  )
}

export default Footer

/*import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h3>Redes Sociais</h3>
        <ul>
          <li>Instagram</li>
          <li>Facebook</li>
          <li>Twitter</li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Horários de Funcionamento</h3>
        <p>Segunda a Sexta: 9h - 18h</p>
        <p>Sábado: 10h - 15h</p>
        <p>Domingo: Fechado</p>
      </div>
      <div className="footer-column">
        <p>Todos os direitos são reservados.</p>
      </div>
      <div className="footer-column">
        <img src="caminho-para-o-logo-da-empresa" alt="Logo da Empresa" />
      </div>
    </footer>
  );
};

export default Footer;*/
