import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react'
import style from '../styles/Accordion.module.css'
import servicoMei from "../services/servicoMei"



export default function AccordionUsage(props) {

    const [servicos, setServicos] = useState([])

    useEffect(() => {
        servicoMei.getAll().then((res) => {
            console.log(res)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    //if (!rows) return null;

    return (
        <div >
            <Accordion className={style.accordion}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    {props.titulo}
                </AccordionSummary>
                <AccordionDetails>
                    {servicos.map((item) => <>{item.nome_servico} <button onClick={""}> RESERVA AGORA </button></>)}
                </AccordionDetails>
            </Accordion>

        </div>
    );
}