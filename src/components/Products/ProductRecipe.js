import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button, Typography, TextField, DialogActions, Dialog, DialogTitle, DialogContent, DialogContentText } from "@mui/material";
import { Accordion, AccordionSummary, AccordionDetails, Card, CardContent, Grid2 } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const ProductRecipe = () => {
    const products = [
        { name: "Delight Bread", recipe: "Flour, Butter, Sugar, Yeast, Yield" },
        { name: "Sardine Bread", recipe: "Flour, Butter, Sugar, Yeast, Yield" },
        { name: "Meat Pie", recipe: "Flour, Water, Salt, Yeast, Yield" },
        { name: "Chicken Pie", recipe: "Flour, Water, Salt, Yeast, Yield" },
        { name: "Doughnut", recipe: "Flour, Sugar, Eggs, Milk, Yield"},
        { name: "Scone", recipe: "Flour, Butter, Sugar, Milk, Yield" },
        { name: "Delight Bread", recipe: "Flour, Butter, Sugar, Yeast, Yield" },
        { name: "Sardine Bread", recipe: "Flour, Butter, Sugar, Yeast, Yield" },
        { name: "Meat Pie", recipe: "Flour, Water, Salt, Yeast, Yield" },
        { name: "Chicken Pie", recipe: "Flour, Water, Salt, Yeast, Yield" },
        { name: "Doughnut", recipe: "Flour, Sugar, Eggs, Milk, Yield"},
        { name: "Scone", recipe: "Flour, Butter, Sugar, Milk, Yield" },
        { name: "Delight Bread", recipe: "Flour, Butter, Sugar, Yeast, Yield" },
        { name: "Sardine Bread", recipe: "Flour, Butter, Sugar, Yeast, Yield" },
        { name: "Meat Pie", recipe: "Flour, Water, Salt, Yeast, Yield" },
        { name: "Chicken Pie", recipe: "Flour, Water, Salt, Yeast, Yield" },
        { name: "Doughnut", recipe: "Flour, Sugar, Eggs, Milk, Yield"},
        { name: "Scone", recipe: "Flour, Butter, Sugar, Milk, Yield" },
        { name: "Delight Bread", recipe: "Flour, Butter, Sugar, Yeast, Yield" },
        { name: "Sardine Bread", recipe: "Flour, Butter, Sugar, Yeast, Yield" },
        { name: "Meat Pie", recipe: "Flour, Water, Salt, Yeast, Yield" },
        { name: "Chicken Pie", recipe: "Flour, Water, Salt, Yeast, Yield" },
        { name: "Doughnut", recipe: "Flour, Sugar, Eggs, Milk, Yield"},
        { name: "Scone", recipe: "Flour, Butter, Sugar, Milk, Yield" },
        { name: "Delight Bread", recipe: "Flour, Butter, Sugar, Yeast, Yield" },
        { name: "Sardine Bread", recipe: "Flour, Butter, Sugar, Yeast, Yield" },
        { name: "Meat Pie", recipe: "Flour, Water, Salt, Yeast, Yield" },
        { name: "Chicken Pie", recipe: "Flour, Water, Salt, Yeast, Yield" },
        { name: "Doughnut", recipe: "Flour, Sugar, Eggs, Milk, Yield"},
        { name: "Scone", recipe: "Flour, Butter, Sugar, Milk, Yield" },
        { name: "Delight Bread", recipe: "Flour, Butter, Sugar, Yeast, Yield" },
        { name: "Sardine Bread", recipe: "Flour, Butter, Sugar, Yeast, Yield" },
        { name: "Meat Pie", recipe: "Flour, Water, Salt, Yeast, Yield" },
        { name: "Chicken Pie", recipe: "Flour, Water, Salt, Yeast, Yield" },
        { name: "Doughnut", recipe: "Flour, Sugar, Eggs, Milk, Yield"},
        { name: "Scone", recipe: "Flour, Butter, Sugar, Milk, Yield" },
        { name: "Delight Bread", recipe: "Flour, Butter, Sugar, Yeast, Yield" },
        { name: "Sardine Bread", recipe: "Flour, Butter, Sugar, Yeast, Yield" },
        { name: "Meat Pie", recipe: "Flour, Water, Salt, Yeast, Yield" },
        { name: "Chicken Pie", recipe: "Flour, Water, Salt, Yeast, Yield" },
        { name: "Doughnut", recipe: "Flour, Sugar, Eggs, Milk, Yield"},
        { name: "Scone", recipe: "Flour, Butter, Sugar, Milk, Yield" },
        { name: "Delight Bread", recipe: "Flour, Butter, Sugar, Yeast, Yield" },
        { name: "Sardine Bread", recipe: "Flour, Butter, Sugar, Yeast, Yield" },
        { name: "Meat Pie", recipe: "Flour, Water, Salt, Yeast, Yield" },
        { name: "Chicken Pie", recipe: "Flour, Water, Salt, Yeast, Yield" },
        { name: "Doughnut", recipe: "Flour, Sugar, Eggs, Milk, Yield"},
        { name: "Scone", recipe: "Flour, Butter, Sugar, Milk, Yield" },
        { name: "Delight Bread", recipe: "Flour, Butter, Sugar, Yeast, Yield" },
        { name: "Sardine Bread", recipe: "Flour, Butter, Sugar, Yeast, Yield" },
        { name: "Meat Pie", recipe: "Flour, Water, Salt, Yeast, Yield" },
        { name: "Chicken Pie", recipe: "Flour, Water, Salt, Yeast, Yield" },
        { name: "Doughnut", recipe: "Flour, Sugar, Eggs, Milk, Yield"},
        { name: "Scone", recipe: "Flour, Butter, Sugar, Milk, Yield" },
        { name: "Delight Bread", recipe: "Flour, Butter, Sugar, Yeast, Yield" },
        { name: "Sardine Bread", recipe: "Flour, Butter, Sugar, Yeast, Yield" },
        { name: "Meat Pie", recipe: "Flour, Water, Salt, Yeast, Yield" },
        { name: "Chicken Pie", recipe: "Flour, Water, Salt, Yeast, Yield" },
        { name: "Doughnut", recipe: "Flour, Sugar, Eggs, Milk, Yield"},
        { name: "Scone", recipe: "Flour, Butter, Sugar, Milk, Yield" },
        { name: "Delight Bread", recipe: "Flour, Butter, Sugar, Yeast, Yield" },
        { name: "Sardine Bread", recipe: "Flour, Butter, Sugar, Yeast, Yield" },
        { name: "Meat Pie", recipe: "Flour, Water, Salt, Yeast, Yield" },
        { name: "Chicken Pie", recipe: "Flour, Water, Salt, Yeast, Yield" },
        { name: "Doughnut", recipe: "Flour, Sugar, Eggs, Milk, Yield"},
        { name: "Scone", recipe: "Flour, Butter, Sugar, Milk, Yield" },
        
    ];

    const [quantities, setQuantities] = useState(
        products.reduce((acc, product) => {
            const ingredients = product.recipe.split(", ");
            acc[product.name] = ingredients.reduce((acc, ingredient) => {
                acc[ingredient] = ingredient === "Flour" ? 50 : ingredient === "Yield" ? 100 : 10; // Set predefined value for non-flour ingredients
                return acc;
            }, {});
            return acc;
        }, {})
    );

    const handleQuantityChange = (productName, ingredient, newQuantity) => {
        if (ingredient === "Flour") {
            const oldFlourQuantity = quantities[productName][ingredient];
            const ratio = newQuantity / oldFlourQuantity;
            setQuantities(prevQuantities => ({
                ...prevQuantities,
                [productName]: Object.keys(prevQuantities[productName]).reduce((acc, ing) => {
                    acc[ing] = ing === "Flour" ? newQuantity : prevQuantities[productName][ing] * ratio;
                    return acc;
                }, {})
            }));
        }
    };

    const renderRecipeTable = (product) => {
        const ingredients = product.recipe.split(", ");
        return (
            <table>
            <thead>
                <tr>
                <th>Material</th>
                <th>QTY</th>
                </tr>
            </thead>
            <tbody>
                {ingredients.map((ingredient, index) => (
                <tr key={index}>
                    <td>{ingredient}</td>
                    <td>
                    {ingredient === "Flour" ? (
                        <TextField
                        style={{width:"6rem"}}
                        type="number"
                        value={quantities[product.name][ingredient].toFixed(1)}
                        onChange={(e) => handleQuantityChange(product.name, ingredient, parseFloat(e.target.value))}
                        inputProps={{ min: 1 }}
                        />
                    ) : (
                        quantities[product.name][ingredient].toFixed(1)
                    )}
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
        );
    };

    const [openDialog, setOpenDialog] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const createDialog = (product) => {
        setSelectedProduct(product);
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
        setSelectedProduct(null);
    };


    return (
        <div>
            <AppBar
                sx={{
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
                    <Typography variant="h5">Product and Recipe</Typography>
                    <img
                        alt="logo"
                        src="../superchefs-logo.png"
                        style={{
                            height: 40,
                            marginRight: 20,
                            position: "fixed",
                            right: 0,
                        }}
                    />
                </Toolbar>
            </AppBar>

            <div
                style={{
                    width: "80%",
                    maxWidth: "90rem",
                    margin: "3rem auto",
                    justifySelf: "center",
                    marginTop: "7rem",
                }}
            >
                <Link to="/Dashboard/Products">
                    <Button
                        type="button"
                        variant="contained"
                        sx={{
                            backgroundColor: "#FF69B4",
                            width: "15%",
                            height: "25px",
                            position: "absolute",
                            left: "10px",
                            top: "4.5rem",
                        }}
                    >
                        Return
                    </Button>
                </Link>
            </div>




            <Dialog open={openDialog} onClose={handleCloseDialog}>
                <DialogTitle>Produce {selectedProduct?.name}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to produce {selectedProduct?.name}?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog} sx={{color:"#FF69B4"}}>
                        Cancel
                    </Button>
                    <Button onClick={() => { /* Add your produce logic here */ handleCloseDialog(); }} sx={{color:"#4CAF50"}}>
                        Produce
                    </Button>
                </DialogActions>
            </Dialog>







            <Grid2 container spacing={2} style={{width:"90%", justifySelf:"center"}}>
                {products.map((product, index) => (
                    <Grid2 item xs={12} key={index}>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography>{product.name}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Card>
                                    <CardContent>
                                        <Typography variant="body2" color="textSecondary">
                                            {renderRecipeTable(product)}
                                        </Typography>
                                        <Button
                                                type="button"
                                                onClick={createDialog}
                                                variant="contained"
                                                sx={{
                                                    backgroundColor: "#4CAF50",
                                                    width: "15PX",
                                                    height: "20px",
                                                    fontSize:"10px",
                                                    position: "absolute",
                                                    right: "15px",
                                                    bottom: "15px",
                                                }}
                                            >
                                                Produce
                                            </Button>
                                   
                                    </CardContent>
                                </Card>
                            </AccordionDetails>
                        </Accordion>
                    </Grid2>
                ))}
            </Grid2>
        </div>
    );
};

export default ProductRecipe;