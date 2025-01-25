import React from "react";
import "./dashboard.css";
import { Header, Footer } from "../custom";
import Dashboard from "./Dashboard";
import { Grid2, Card, CardContent, BoxAppBar, Toolbar, IconButton, Typography, Drawer,AppBar, List, ListItem, ListItemText, ListItemIcon,  CssBaseline, } from "@mui/material";
import { useState } from "react";
// import AccountCircleOutlined from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";

const DashboardPage = () => {


  const drawerWidth = 240;

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
        {["Dashboard", "Reports & Charts", "Products", "Material", "Human Resources", "Settings"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div style={{ display: "flex" }}>
      <CssBaseline />
      <AppBar sx={{
          backgroundColor: "#4CAF50",
        }} position="fixed" style={{ zIndex: 1400 }}>
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
      <main style={{ flexGrow: 1, padding: 24, }}>
        <Toolbar />
        <Dashboard />
      </main>
    </div>
  );
};

//   return (
//     <div>
//       <Header />
//       <Dashboard />
//       <div className="dashboard">
//         <h1 tabIndex="0">Bakery Management Dashboard</h1>
//         <div
//           className="section"
//           role="region"
//           aria-labelledby="biodata-heading"
//         >
//           <h2 id="biodata-heading" tabIndex="0">
//             Username
//           </h2>
//           <p className="role">Manager</p>
//         </div>
//         <div className="dashboard-sections">
//           <div
//             className="section"
//             role="region"
//             aria-labelledby="orders-heading"
//           >
//             <h2 id="orders-heading" tabIndex="0">
//               Orders
//             </h2>
//             <p>Manage and track customer orders.</p>
//           </div>
//           <div
//             className="section"
//             role="region"
//             aria-labelledby="inventory-heading"
//           >
//             <h2 id="inventory-heading" tabIndex="0">
//               Inventory
//             </h2>
//             <p>Monitor and update stock levels.</p>
//           </div>
//           <div
//             className="section"
//             role="region"
//             aria-labelledby="materials-heading"
//           >
//             <h2 id="materials-heading" tabIndex="0">
//               Materials
//             </h2>
//             <p>Manage raw materials and supplies.</p>
//           </div>
//           <div
//             className="section"
//             role="region"
//             aria-labelledby="sales-heading"
//           >
//             <h2 id="sales-heading" tabIndex="0">
//               Sales
//             </h2>
//             <p>View sales reports and analytics.</p>
//           </div>
//           <div className="section" role="region" aria-labelledby="hr-heading">
//             <h2 id="hr-heading" tabIndex="0">
//               Human Resources
//             </h2>
//             <p>Manage staff schedules and information.</p>
//           </div>
//           <div
//             className="section"
//             role="region"
//             aria-labelledby="product-heading"
//           >
//             <h2 id="product-heading" tabIndex="0">
//               Product
//             </h2>
//             <p>Manage product details and categories.</p>
//           </div>
//           <div
//             className="section"
//             role="region"
//             aria-labelledby="procurement-heading"
//           >
//             <h2 id="procurement-heading" tabIndex="0">
//               Procurement
//             </h2>
//             <p>Manage procurement processes and suppliers.</p>
//           </div>
//           <div
//             className="section"
//             role="region"
//             aria-labelledby="facility-heading"
//           >
//             <h2 id="facility-heading" tabIndex="0">
//               Facility
//             </h2>
//             <p>Manage facility maintenance and operations.</p>
//           </div>
//           <div
//             className="section"
//             role="region"
//             aria-labelledby="user-management-heading"
//           >
//             <h2 id="user-management-heading" tabIndex="0">
//               User Management
//             </h2>
//             <p>Manage user roles and permissions.</p>
//           </div>
//           <div
//             className="section"
//             role="region"
//             aria-labelledby="accounts-heading"
//           >
//             <h2 id="accounts-heading" tabIndex="0">
//               Accounts
//             </h2>
//             <p>Manage financial accounts and transactions.</p>
//           </div>
//           <div
//             className="section"
//             role="region"
//             aria-labelledby="production-heading"
//           >
//             <h2 id="production-heading" tabIndex="0">
//               Production
//             </h2>
//             <p>Monitor and manage production processes.</p>
//           </div>
//           <div
//             className="section"
//             role="region"
//             aria-labelledby="documentations-heading"
//           >
//             <h2 id="documentations-heading" tabIndex="0">
//               Documentations
//             </h2>
//             <p>Manage and store important documents.</p>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

export default DashboardPage;
