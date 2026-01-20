import Menu from "./components/menu/Menu.tsx";
import Card from "./components/card/Card.tsx";
import Footer from "./components/footer/Footer.tsx";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import 'normalize.css';
import Curriculo from './data/curriculo.json';
import Projetos from './data/projetos.json';
import { Box, Container, Grid, Stack } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  cssVariables: {
    nativeColor: true,
  },
  palette: {
    mode: 'light',
    primary: {
      main: 'var(--primary-color)',
    },
    secondary: {
      main: 'var(--secondary-color)',
    },
  },
  typography: {
    fontFamily: `'Funnel Sans', Arial, sans-serif`,
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Menu>
        <main>
          <Box component="section" sx={{ py: 5 }}>
            <Container maxWidth="lg">
              <h1>Meu nome é Camilly Ferreira,</h1>
              <p>Sou formada em Letras pela Universidade de São Paulo (USP), com enfoque em redação, produção editorial e revisão de textos. Ao longo da minha formação, venho aprimorando minhas habilidades em diversos projetos acadêmicos e atividades extracurriculares. Além disso, tenho experiência voluntária em redação para internet e como designer e redatora voluntária para ONG, o que me permitiu desenvolver uma escrita versátil e focada em diferentes públicos e propósitos.</p>
            </Container>
          </Box>

          <Box component="section" sx={{ py: 5, background: 'var(--light)' }}>
            <Container maxWidth="lg" >
              <h2>Projetos</h2>
              <p>Estes são os projetos que desenvolvi tanto no âmbito voluntário quanto acadêmico. Em cada um deles, atuei diretamente na elaboração dos textos e, no caso das peças gráficas, fui responsável tanto pela criação do design quanto pelo conteúdo textual.</p>
              <Grid container spacing={2}>
                {Projetos.projetos.map((item, index) => (
                  <Grid key={index} size={{ xs: 12, md: 6, lg: 4 }}>
                    <Card
                      key={index}
                      type="projetos"
                      img={item.img}
                      logo={item.logo}
                      title={item.title}
                      link={item.link}
                      empresa={item.empresa}
                      perfil={item.perfil}
                    />
                  </Grid>
                ))}
              </Grid>
            </Container>
          </Box>

          <Box component="section" sx={{ py: 5 }} id="experiencias">
            <Container maxWidth="lg" >
              <h2>Trabalho</h2>
              <Box sx={{ width: { xs: '100%', md: '95%', }, mx: 'auto' }}>
                <Stack spacing={2}>
                  {Curriculo.trabalho.map((item, index) => (
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
                  ))}
                </Stack>
              </Box>
            </Container>
          </Box>

          <Box component="section" sx={{ py: 5, background: 'var(--light)' }} id="academica">
            <Container maxWidth="lg" >
              <h2>Escola</h2>
              <Box sx={{ width: { xs: '100%', md: '95%', }, mx: 'auto' }}>
                <Stack spacing={2}>
                  {Curriculo.educacao.map((item, index) => (
                    <Card
                      key={index}
                      type="educacao"
                      title={item.nome}
                      img={item.img}
                      curso={item.curso}
                      dataInicio={new Date(item.dataInicio)}
                      dataFim={item.dataFim ? new Date(item.dataFim) : undefined}
                    />
                  ))}
                </Stack>
              </Box>
            </Container>
          </Box>
          <Box component="section" sx={{ py: 5 }} id="cursos">
            <Container maxWidth="lg" >
              <h2>Escola</h2>
              <Box sx={{ width: { xs: '100%', md: '95%', }, mx: 'auto' }}>
                <Stack spacing={2}>
                  {Curriculo.cursos.map((item, index) => (
                    <Card
                      key={index}
                      type="cursos"
                      nome={item.nome}
                      img={item.img}
                      instituicao={item.instituicao}
                      ano={item.ano}
                      skills = {item.skills}
                    />
                  ))}
                </Stack>
              </Box>
            </Container>
          </Box>
        </main>

        <Footer />

      </Menu>
    </ThemeProvider>
  </StrictMode>,
)
