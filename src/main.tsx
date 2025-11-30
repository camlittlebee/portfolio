import Menu from "./components/menu/Menu.tsx";
import Card from "./components/card/Card.tsx";
import Footer from "./components/footer/Footer.tsx";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import 'normalize.css';
import Curriculo from './data/curriculo.json';
import Projetos from './data/projetos.json';
import { Box, Container, Grid } from '@mui/material';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Menu>
      <Box component="section">
        <Container maxWidth="lg">
          Sobre Mim
        </Container>
      </Box>

      <Box component="section">
        <Container maxWidth="lg" >
          <h2>Projetos</h2>
          <Grid container spacing={2}>
            {Projetos.projetos.map((item, index) => (
              <Grid key={index} size={{ sm: 12, md: 5, lg: 4 }}>
                <Card
                  key={index}
                  type="projetos"
                  img={item.img}
                  title={item.title}
                  link={item.link}
                  empresa={item.empresa}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box component="section" id="experiencias">
        <Container maxWidth="lg" >
          <h2>Trabalho</h2>
          <Grid container spacing={2}>
            {Curriculo.trabalho.map((item, index) => (
              <Grid key={index} size={{ sm: 12, md: 5, lg: 4 }}>
                <Card
                  key={index}
                  type="trabalho"
                  img={item.img}
                  empresa={item.empresa}
                  cargo={item.cargo}
                  funcoes={item.funcoes}
                  dataInicio={new Date(item.dataInicio)}
                  dataFim={item.dataFim ? new Date(item.dataFim) : undefined}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box component="section" id="academica">
        <Container maxWidth="lg" >
          <h2>Escola</h2>
          <Grid container spacing={2}>
            {Curriculo.educacao.map((item, index) => (
              <Grid key={index} size={{ sm: 12, md: 6, lg: 4 }}>
                <Card
                  key={index}
                  type="educacao"
                  title={item.nome}
                  img={item.img}
                  curso={item.curso}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Footer />

    </Menu>
  </StrictMode>,
)
