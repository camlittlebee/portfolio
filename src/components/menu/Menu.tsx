import * as React from "react";
import {
  AppBar, Box, Container, Drawer, IconButton,
  Toolbar, List, ListItem,
  ListItemButton, ListItemText, Avatar, Stack,
  Button
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import Contato from '../../data/contato.json';
import MenuItens from '../../data/menu.json';

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";


const iconsMap: Record<string, React.ReactNode> = {
  LinkedInIcon: <LinkedInIcon />,
  WhatsAppIcon: <WhatsAppIcon />,
  EmailIcon: <EmailIcon />,
};

const drawerWidth = 240;

export default function Menu({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <header>
      <Box component="section">
        <Container maxWidth="lg" >
          <Stack direction="column" alignItems="center" sx={{ py: '1rem', textAlign: 'center' }} spacing={2}>
            <Avatar alt={Contato.nome} src={Contato.foto}  sx={{ width: 200, height: 200 }}/>
            <h2>{Contato.nome}</h2>
            <Box>
              <Stack spacing={2} direction="row">
                {Contato.social.map((item, index) => (
                  <Button
                    key={index}
                    href={item.url}
                    target="_blank"
                    title={item.name}
                    rel="nofollow noreferrer noopener"
                    variant="text"
                  >
                    {iconsMap[item.icon]}
                  </Button>
                ))}
              </Stack>
            </Box>
          </Stack>
        </Container>
      </Box>
      <List>
        {MenuItens.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton component="a" href={`#${item.id}`} >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}

      </List>
    </header>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{
          display: { xs: "block", sm: "none" },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>

      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
          }}
          slotProps={{
            root: { keepMounted: true },
          }}
        >
          {drawer}
        </Drawer>

        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="section"
        sx={{
          flexGrow: 1,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
