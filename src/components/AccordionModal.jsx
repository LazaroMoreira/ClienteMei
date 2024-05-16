import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState, useEffect } from 'react';
import servicoMei from '../services/servicoMei';
import DialogForm from './DialogForm';
import { Box } from '@mui/material';

export default function AccordionUsage(props) {
  const [servicos, setServicos] = useState([]);
  const [servicoSelecionado, setServicoSelecionado] = useState(null);

  useEffect(() => {
    servicoMei
      .getServicoByCategoria(props.id_categoria)
      .then((res) => {
        setServicos(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!servicos) return null;

  return (
    <div>
      <Accordion>
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
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Box my={1} fontSize={14}>
                {item.nome_servico}
              </Box>
              <DialogForm
                buttonTitle="RESERVE AGORA"
                id_servico={item.id_servico}
              />
            </Box>
          ))}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
