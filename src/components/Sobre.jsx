import style from '../styles/Sobre.module.css';

import barbeiro1 from '../styles/img/barbeiro1.png';
import barbeiro2 from '../styles/img/barbeiro2.png';
import barbeiro3 from '../styles/img/barbeiro3.png';
import barbeiro4 from '../styles/img/barbeiro4.png';

function Sobre() {
  return (
    <div className={style.corpo_container}>
      <section className={style.secao1}>
        <h3>
          SOBRE A <span>EMPRESA:</span>
        </h3>

        <p>Inaugurada em 2024, a Garershop é sinônimo de estilo e conforto.</p>

        <p>
          Com um ambiente moderno e sofisticado, nossos especialistas oferecem
          serviços de alta qualidade, garantindo que você saia se sentindo
          excepcional.
        </p>
      </section>

      <section className={style.secao2}>
        <h3 className={style.title2}>
          MEMBROS DA <span>EQUIPE:</span>
        </h3>
        <div className={style.imgMural}>
          <img src={barbeiro1} alt="botaoteste" />
          <img src={barbeiro2} alt="botaoteste" />
          <img src={barbeiro3} alt="botaoteste" />
          <img src={barbeiro4} alt="botaoteste" />
        </div>
      </section>
    </div>
  );
}

export default Sobre;
