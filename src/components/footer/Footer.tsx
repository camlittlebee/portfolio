import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Stack from '@mui/material/Stack';

function Footer() {

  return (
    <Box component="footer" id='contato' sx={{ py: 5 }}>
      <Container maxWidth="lg" >
        <Stack direction="row" spacing={2} justifyContent={'center'} alignItems={'center'}>
          <Button href='/cv-camilly.pdf'target="_blank" rel="noopener" variant='outlined' endIcon={<ArrowDownwardIcon />}>Baixar Currículo</Button>
        </Stack>
      </Container>
    </Box>
  )
}

export default Footer
