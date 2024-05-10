import { ListItem, List, ListItemIcon } from "@mui/material";
import style from "../styles/Footer.module.css";
import logopeqn from "../styles/img/logopeqn.png";


import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';


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
            <List>
              
              <ListItem>
                <ListItemIcon>
                  <XIcon />
                </ListItemIcon>
                @Garershop.oficial
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  <InstagramIcon />
                </ListItemIcon>
                @GarershopOficial
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  <FacebookIcon />
                </ListItemIcon>
                Garershop Oficial
              </ListItem>

            </List>
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
