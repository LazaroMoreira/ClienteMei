import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState, useEffect } from 'react';
import style from '../styles/Accordion.module.css';
import servicoMei from '../services/servicoMei';
import DialogForm from './DialogForm'

export default function AccordionUsage(props) {
  const [servicos, setServicos] = useState([]);

  useEffect(() => {
    servicoMei
      .getServicoByCategoria(props.id_categoria)
      .then((res) => {
        // console.log(res.data)
        setServicos(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!servicos) return null;

  return (
    <div>
      <Accordion className={style.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{ fontWeight: 'bold' }}
        >
          {props.titulo}
        </AccordionSummary>
        <AccordionDetails>
          {servicos.map((item) => (
            <span className={style.ButtonModal}>
              {item.nome_servico}
              <DialogForm buttonTitle="RESERVE AGORA" id_servico={item.id_servico} className={style.reser} /> 
            </span>
          ))}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
