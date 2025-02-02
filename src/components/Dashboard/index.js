import React from "react";
import "./dashboard.css";
import { Header, Footer } from "../custom";
import Dashboard from "./Dashboard";
import { Grid2, Card, CardContent, BoxAppBar, Toolbar, IconButton, Typography, Drawer, AppBar, List, ListItem, ListItemText, ListItemIcon, CssBaseline, Icon, TextField } from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Image, LogoDev } from "@mui/icons-material";
import {useMediaQuery} from "@mui/material";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const isSmallScreen = useMediaQuery("(max-width:600px)");

  const navigate = useNavigate();

  const drawer = (
    <div>
      <Toolbar />
      <List>
        <ListItem>
          <ListItemIcon>
            <img src="./profile-icon.svg" />
          </ListItemIcon>
          <ListItemText primary="Username" secondary="Manager" />
        </ListItem>
        {[
          { text: "Dashboard", path: "/Dashboard" },
          { text: "Products", path: "./Products" },
          { text: "Material", path: "./Material" },
          { text: "Human Resources", path: "/Hr" },
          { text: "Reports & Charts", path: "/Reports" },
          { text: "Settings", path: "/Settings" },
          { text: "Log out", path: "/" }
        ].map((item, index) => (
          <ListItem button key={item.text} onClick={() => navigate(item.path)}>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div style={{ display: "flex" }}>
      <CssBaseline />
      <AppBar sx={{
          backgroundColor: "#f0f0f0",
          boxShadow: "0 1px 4px",
          color: "#4CAF50",
          width: "100%",
          position: "fixed",
          top: "0",
          zIndex: "10",
        }} 
        >
          
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            style={{ marginRight: 20 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Dashboard
          </Typography>
          <TextField
            variant="outlined"
            placeholder="Search..."
            size="small"
            color="none"
            style={{ right: "5rem", position:"fixed",width: isSmallScreen ? "5rem" : "10rem",}}
          />
          <img alt="logo" src="superchefs-logo.png" style={{ 
            height: 40, 
            marginLeft: 20, 
            position: "fixed",
            right: 20,
            
          }} />
        </Toolbar>
      </AppBar>
      <nav style={{ width: 0, flexShrink: 1 }}>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          style={{ display: { xs: "block", sm: "none" } }}
        >
          {drawer}
        </Drawer>
      </nav>
      <main style={{ flexGrow: 1, padding: 24 }}>
        <Dashboard />
      </main>
      <Footer />
    </div>
  );
};

export default DashboardPage;
