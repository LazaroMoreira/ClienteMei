import style from "../styles/Sobre.module.css"


import fotocabelo from "../styles/img/FOTO CABELO.png";
import fotobarba from "../styles/img/FOTO BARBA.png";
import fotocombo from "../styles/img/FOTO COMBO.png";
import fotoestetica from "../styles/img/FOTO ESTETICA.png";

function Sobre() {
    return (


        <div className={style.corpo_container}>

            <section >
                <h3>
                    SOBRE A <span>EMPRESA:</span>
                </h3>

                <p>
                    Inaugurada em 2024, a Garershop é sinônimo de estilo e conforto.
                </p>

                <p>
                    Com um ambiente moderno e sofisticado, nossos especialistas oferecem serviços de alta qualidade, garantindo que você saia se sentindo excepcional.
                </p>

            </section>


            <section className={style.caixaimg}>
                <h3>MEMBROS DA <span>EQUIPE:</span></h3>

                <img src={fotocabelo} alt="botaoteste" />
                <img src={fotobarba} alt="botaoteste" />
                <img src={fotocombo} alt="botaoteste" />
                <img src={fotoestetica} alt="botaoteste" />
            </section>

        </div>


    )
}

export default Sobre