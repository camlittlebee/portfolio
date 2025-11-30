import * as React from "react";
import {
  AppBar, Box, Container, Drawer, IconButton,
  Toolbar, List, ListItem,
  ListItemButton, ListItemText
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import Contato from '../../data/contato.json';
import MenuItens from '../../data/menu.json';

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
    <div>
      <Box component="footer" id='contato'>
        <Container maxWidth="lg" >
          <p>{Contato.foto}</p>
          <h1>{Contato.nome}</h1>

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
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{
          display: { xs: "block", sm: "none" }, // <-- esconde no desktop
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
        component="main"
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
