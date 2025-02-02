import React, {useState} from "react";
import BranchTable from "./BranchTable";
import BranchForm from "./BranchForm";
import { Button, Toolbar, List, ListItem, ListItemIcon, ListItemText, CssBaseline, AppBar, IconButton, Typography, Drawer, } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Footer } from "../custom";



    

const BranchPage = () => {



const [mobileOpen, setMobileOpen] = useState(false);
const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar  />
      <List >
        <ListItem>
          <ListItemIcon>
            <img src="./profile-icon.svg" />
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
      
    
    const [loadForm, setLoadForm] = useState(false);
    const [displayButton, setHideButton] = useState(true);
    const handleClick = () => {
    setLoadForm(true);
    setHideButton(false);

    };
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
            Dashboard
          </Typography>

          <Toolbar>
          <img alt="logo" src="superchefs-logo.png" style={{ 
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
              Branches
            </Typography>
            <BranchTable />

            { displayButton && (<Button 
            onClick={handleClick}
            type="button" 
            variant="contained" 
            sx={{backgroundColor: "#4CAF50", margin: "1rem 0"}}>
                Add a New Branch
            </Button>)}
            {loadForm && (<BranchForm />)}
            <Footer />
        </div>
    );
};

export default BranchPage;