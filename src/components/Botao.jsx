import style from "../styles/Botao.module.css"
// import fotocabelo from "../../public/img/FOTOCABELO.png"
// import fotobarba from "../../public/img/FOTOBARBA.png"
// import fotocombo from "../../public/img/FOTOCOMBO.png"
// import fotoestetica from "../../public/img/FOTOESTETICA.png"
import AccordionUsage from "../components/Accordion"

import servicoMei from "../services/servicoMei"
import { useState, useEffect } from 'react'

function Botao() {

    const [servicos, setServicos] = useState([])
    const [categorias, setCategorias] = useState([])

    useEffect(() => {
        servicoMei.getCategorias().then((res) => {
            console.log(res)
            setCategorias(res.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    return (
        <div>
            <section className={style.corpo_container}>

                {/* {servicos.map((item) => <>{item.nome_servico} <button onClick={""}> RESERVA AGORA </button></>)} */}
                {categorias.map((categoria) => (
                <button className={style.teste} key={categoria.id_categoria}> 
                    <AccordionUsage titulo={categoria.categoria} id_categoria={categoria.id_categoria} />
                </button>
                ))}





                {/* <button className={style.teste}> <img src={fotocabelo} alt="fotocabelo" />
                    <AccordionUsage titulo="CABELO" />
                </button>

                <button className={style.teste}> <img src={fotobarba} alt="fotobarba" />
                    <AccordionUsage titulo="BARBA" />
                </button>

                <button className={style.teste}> <img src={fotocombo} alt="fotocombo" />
                    <AccordionUsage titulo="COMBO" />
                </button>

                <button className={style.teste}> <img src={fotoestetica} alt="fotoestetica" />
                    <AccordionUsage titulo="ESTÉTICA FACIAL" />
                </button> */}


            </section>


        </div>


    )
}

export default Botao