import style from "../styles/Botao.module.css"
import fotocabelo from "../styles/img/FOTO CABELO.png"
import fotobarba from "../styles/img/FOTO BARBA.png"
import fotocombo from "../styles/img/FOTO COMBO.png"
import fotoestetica from "../styles/img/FOTO ESTETICA.png"

import { useState } from "react"



function Botao() {


    return (
        <div>
            <section className={style.corpo_container}>

                <button> <img src={fotocabelo} alt="fotocabelo" /> </button>

                <button> <img src={fotobarba} alt="fotobarba" /> </button>

                <button> <img src={fotocombo} alt="fotocombo" /> </button>

                <button> <img src={fotoestetica} alt="fotoestetica" /> </button>


            </section>


        </div>


    )
}

export default Botao