import style from "../styles/Botao.module.css"
// import fotocabelo from "../../public/img/FOTOCABELO.png"
// import fotobarba from "../../public/img/FOTOBARBA.png"
// import fotocombo from "../../public/img/FOTOCOMBO.png"
// import fotoestetica from "../../public/img/FOTOESTETICA.png"
import AccordionUsage from "../components/Accordion"

import servicoMei from "../services/servicoMei"
import { useState, useEffect } from 'react'

function Botao() {

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

                {categorias.map((categoria) => (
                <button className={style.teste} key={categoria.id_categoria}> <img src={categoria.img_categoria} alt="fotocabelo"/> 
                    <AccordionUsage titulo={categoria.categoria} id_categoria={categoria.id_categoria} />
                </button>
                ))}

            </section>


        </div>


    )
}

export default Botao