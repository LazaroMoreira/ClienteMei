import AccordionUsage from '../components/AccordionModal';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';

import servicoMei from '../services/servicoMei';
import { useState, useEffect } from 'react';
import { Box } from '@mui/material';

function Botao() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    servicoMei
      .getCategorias()
      .then((res) => {
        console.log(res);
        setCategorias(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Box fontFamily="sans-serif" sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} justifyContent="space-around">
        {categorias.map((categoria) => (
          <Grid item xs={5}>
            <Avatar src={categoria.img_categoria} alt="fotocabelo" />
            <AccordionUsage
              titulo={categoria.categoria}
              id_categoria={categoria.id_categoria}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Botao;
