import React, {useState} from "react";
import MaterialTable from "./MaterialTable"
import MaterialRequestForm from "./MaterialRequestForm";
import MaterialForm from "./MaterialForm"
import {Link} from "react-router-dom";
import { Button, Toolbar, List, ListItem, ListItemIcon, ListItemText, CssBaseline, AppBar, IconButton, Typography, Drawer,TextField, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Footer } from "../custom";

const MaterialPage = () => {

const [mobileOpen, setMobileOpen] = useState(false);
const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

const isSmallScreen = useMediaQuery ("(max-width:600px)")

  const drawer = (
    <div>
      <Toolbar  />
      <List >
        <ListItem>
          <ListItemIcon>
            <img alt="profile-photo" src="../profile-icon.svg" />
          </ListItemIcon>
          <ListItemText primary="Username" secondary="Manager" />
        </ListItem>
        {["Dashboard", "Reports & Charts", "Products", "Material", "Human Resources", "Settings", "Log out"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
      

    return (
        <div style={{
            width: "95%",
            margin: "3rem auto",
            justifySelf: "center",
          }}>


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
          
        <Toolbar >
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
            Materials & Inventory
          </Typography>

           <TextField
                      variant="outlined"
                      placeholder="Search..."
                      size="small"
                      color="none"
                      style={{ right: isSmallScreen ? "50px" : "5rem", position:"fixed",width: isSmallScreen ? "4rem" : "10rem",}}
                    />

          <Toolbar>
          <img alt="logo" src="../superchefs-logo.png" style={{ 
            height: 40, 
            marginRight: 20, 
            position:"fixed",
            right: 0
             }} />
           </Toolbar>

        </Toolbar> 
      </AppBar>
      <nav style={{ width: 0, flexShrink: 1}}>
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
            
              <Typography variant="h5" sx={{marginTop:"5rem"}}>
              Materials
            </Typography>
            <MaterialTable />


           <Link to="/MaterialRequestForm">
           <Button 
            type="button" 
            variant="contained" 
            sx={{backgroundColor: "#4CAF50", margin: "1rem"}}>
                Make Request
            </Button>
            </Link> 

           <Link to="/MaterialTransferForm">
           <Button 
            type="button" 
            variant="contained" 
            sx={{backgroundColor: "#4CAF50", margin: "1rem"}}>
                Transfer Material
            </Button>
            </Link> 

           <Link to="/MaterialDamagesForm">
           <Button 
            type="button" 
            variant="contained" 
            sx={{backgroundColor: "#4CAF50", margin: "1rem"}}>
                Register Damages
            </Button>
            </Link> 
           <Link to="/MaterialForm">
           <Button 
            type="button" 
            variant="contained" 
            sx={{backgroundColor: "#4CAF50", margin: "1rem"}}>
                Create New Material
            </Button>
            </Link> 
           
            <Footer />
        </div>
    );
};

export default MaterialPage;