import React, { useState } from "react";
import { Header, Footer } from "../custom";
import { TextField, MenuItem, Button, Box, Typography, MenuList, AppBar,Toolbar } from "@mui/material";
import InputField from "../Dashboard/InputField";
import { Link } from "react-router-dom";
import { KeyboardOptionKey } from "@mui/icons-material";

const materialOptions = {
    Flour: "",
    Brown_flour: "",
    Sugar: "",
    Butter: "",
    Yeast: "",
    Milk: "",
    Salt: "",
    Sardine: "", 
    Egg: "", 
    Vegetable_Oil: "",
    Premix: "",
    Potatoe: "",
    Carrot: "",
    Onions: "",
    Satis: "",
    Minced_meat: "",
    Curry: "",
    Thyme: "",
    Ginger: "",
    Garlic: "",
    Sesame_seed: "",
    Farrow_peas: "",
    Sweet_corn: "",
    Ckicken: "",
    Chicken_franks: "",
    Chicken_Breast: "",
    Cheese: "",
    Maggi: "",
    Ketchup: "",
    Jam: "",
    Flavour: "",
    Bread_nylon: "",
    Variety_nylon: "",
    Pastry_nylon: "",
    Burger_plate: "",
    Bakin_powder: "",
    Disposeable_plate: "",
    Plastic_spoon: "",
    Serviette: "",
    Tomatoe_paste: "",
    Fish: "",
    Raw_pepper: "",
    Marinating_pepper: "",
    Parboiled_pepper: "",
    Mixed_vegetables: "",
    Plantain: "",
    Yam: "",
    Rice: "",
    Beans: "",



};

const ProductForm = () => {
    const [formData, setFormData] = useState({
        productName: "",
        productCategory: "",
        productId: "",
        productWeight: "",
        directSellingPrice: "",
        partnerSellingPrice: "",
        productionYield: "",
        material: "",
        measurement: "",
        quantity: "",
    });

    const inputFieldStyles = {
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "#4CAF50",
            },
            "&:hover fieldset": {
                borderColor: "#4CAF50",
            },
            "&.Mui-focused fieldset": {
                borderColor: "#4CAF50",
            },
        },
        "& .MuiInputLabel-root.Mui-focused": {
            color: "#4CAF50",
        },
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    const [materialFields, setMaterialFields] = useState([{ material: "", measurement: "", quantity: "" }]);

    const addMaterialField = () => {
        setMaterialFields([...materialFields, { material: "", measurement: "", quantity: "" }]);
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
                    <Typography variant="h5">Sales Record</Typography>
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

            <div
                style={{
                    width: "80%",
                    maxWidth: "40rem",
                    margin: "3rem auto",
                    justifySelf: "center",
                }}
            >
                <Typography sx={{ margin: "2rem 0" }} variant="h5">
                    Product Registration Form
                </Typography>
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                >
                    <TextField
                        label="Product Name"
                        name="productName"
                        value={formData.productName}
                        onChange={handleChange}
                        fullWidth
                        sx={inputFieldStyles}
                    />
                    <TextField
                        select
                        label="Product Category"
                        name="productCategory"
                        value={formData.productCategory}
                        onChange={handleChange}
                        variant="outlined"
                        fullWidth
                        sx={inputFieldStyles}
                    >
                        <MenuItem value="bread">Bread</MenuItem>
                        <MenuItem value="pastry">Pastry</MenuItem>
                        <MenuItem value="food">Food</MenuItem>
                        <MenuItem value="protein">Protein</MenuItem>
                        <MenuItem value="drinks">Drinks</MenuItem>
                    </TextField>
                    
                    <TextField
                        label="Product ID"
                        name="productId"
                        value={formData.productId}
                        onChange={handleChange}
                        variant="outlined"
                        fullWidth
                        sx={inputFieldStyles}
                    />
                    <TextField
                        label="Product Weight"
                        name="productWeight"
                        value={formData.productWeight}
                        onChange={handleChange}
                        variant="outlined"
                        fullWidth
                        sx={inputFieldStyles}
                    />
                    <TextField
                        label="Direct Selling Price"
                        name="directSellingPrice"
                        value={formData.directSellingPrice}
                        onChange={handleChange}
                        variant="outlined"
                        fullWidth
                        sx={inputFieldStyles}
                    />
                    <TextField
                        label="Partner Selling Price"
                        name="partnerSellingPrice"
                        value={formData.partnerSellingPrice}
                        onChange={handleChange}
                        variant="outlined"
                        fullWidth
                        sx={inputFieldStyles}
                    />
                        
                    <TextField
                        label="Production Yield"
                        name="productionYield"
                        value={formData.productionYield}
                        onChange={handleChange}
                        variant="outlined"
                        fullWidth
                        sx={inputFieldStyles}
                    />
                        
                    
                            {materialFields.map((field, index) => (
                                <Box key={index} style={{ display: "flex" }}>
                                    <TextField
                                        select
                                        label="Material"
                                        name={`material${index + 1}`}
                                        value={field.material}
                                        onChange={(e) => {
                                            const newFields = [...materialFields];
                                            newFields[index].material = e.target.value;
                                            setMaterialFields(newFields);
                                        }}
                                        variant="outlined"
                                        sx={inputFieldStyles}
                                        style={{ width: "35%" }}
                                    >
                                        {Object.keys(materialOptions).map((material) => (
                                            <MenuItem key={material} value={material}>
                                                {material}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                    <TextField
                                        select
                                        label="Measurement"
                                        name={`measurement${index + 1}`}
                                        value={field.measurement}
                                        onChange={(e) => {
                                            const newFields = [...materialFields];
                                            newFields[index].measurement = e.target.value;
                                            setMaterialFields(newFields);
                                        }}
                                        variant="outlined"
                                        sx={inputFieldStyles}
                                        style={{ width: "35%" }}
                                    >
                                        <MenuItem value="kilogramm">Kilogramm(KG)</MenuItem>
                                        <MenuItem value="gramm">Gramm</MenuItem>
                                        <MenuItem value="liter">Litre</MenuItem>
                                        <MenuItem value="centiliter">Centiliter(CL)</MenuItem>
                                        <MenuItem value="bag">Bag</MenuItem>
                                        <MenuItem value="pack">Pack</MenuItem>
                                    </TextField>
                                    <TextField
                                        label="QTY"
                                        name={`quantity${index + 1}`}
                                        value={field.quantity}
                                        onChange={(e) => {
                                            const newFields = [...materialFields];
                                            newFields[index].quantity = e.target.value;
                                            setMaterialFields(newFields);
                                        }}
                                        variant="outlined"
                                        style={{ width: "30%" }}
                                        sx={inputFieldStyles}
                                    />
                                </Box>
                            ))}
                            <Button
                                type="button"
                                variant="contained"
                                onClick={addMaterialField}
                                sx={{ backgroundColor: "#4CAF88", width: "50%" }}
                            >
                                Add Material
                            </Button>
                       
                

                    <Button
                        type="submit"
                        variant="contained"
                        startIcon={<KeyboardOptionKey />}
                        sx={{ backgroundColor: "#4CAF50" }}
                    >
                        Register Product
                    </Button>
                </Box>
                <Footer />
            </div>
        </div>
    );
};

export default ProductForm;