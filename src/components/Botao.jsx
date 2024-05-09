import style from "../styles/Botao.module.css"
import fotocabelo from "../styles/img/FOTO CABELO.png"
import fotobarba from "../styles/img/FOTO BARBA.png"
import fotocombo from "../styles/img/FOTO COMBO.png"
import fotoestetica from "../styles/img/FOTO ESTETICA.png"
import AccordionUsage from "../components/Accordion"
import servicoMei from "../services/servicoMei"



function Botao() {

    //const servicos = servicoMei.getAll()
    //servicos.map((servico) => {
    //    <div>
    //        servico.nome_servico
    //    </div>
    //})

    return (
        <div>
            <section className={style.corpo_container}>

                <button className={style.teste}> <img src={fotocabelo} alt="fotocabelo" /> 
                <AccordionUsage titulo= "CABELO"/>
                </button>

                <button className={style.teste}> <img src={fotobarba} alt="fotobarba" /> 
                <AccordionUsage titulo= "BARBA"/>
                </button>

                <button className={style.teste}> <img src={fotocombo} alt="fotocombo" /> 
                <AccordionUsage titulo= "COMBO"/>
                </button>

                <button className={style.teste}> <img src={fotoestetica} alt="fotoestetica" /> 
                <AccordionUsage titulo= "ESTETICA FACIAL"/>
                </button>


            </section>


        </div>


    )
}

export default Botao