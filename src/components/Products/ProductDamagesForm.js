import React, { useState } from "react";
import { Header, Footer } from "../custom";
import { TextField, MenuItem, Button, Box, Typography, MenuList, AppBar, Toolbar } from "@mui/material";
import InputField from "../Dashboard/InputField";
import { KeyboardOptionKey, TextFields } from "@mui/icons-material";
import {Link} from "react-router-dom";

const productOptions = {
    Bread: "",
    Meat_Pie: "",
    Doughnut:"",
    Puff_Puff:"",
    Chicken:"",
    Fried_rice:"",
    Moi_moi:"",
}

const ProductDamagesForm = () => {
    const [formData, setFormData] = useState({
        product: "",
        quantity: "",
        recipient: "",
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

    const [productFields, setProductFields] = useState([{ product: "", quantity: "",}]);

    const addProductField = () => {
        setProductFields([...productFields, { product: "",  quantity: ""}]);
    };

    return (
        <div>
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
                <Typography variant="h5">Product Damages Form</Typography>
                  <img alt="logo" src="../superchefs-logo.png" style={{ 
                    height: 40, 
                    marginRight: 20, 
                    position:"fixed",
                    right: 0
                     }} />
            </Toolbar>

        </AppBar>
               
            <div
                style={{
                    width: "80%",
                    maxWidth: "40rem",
                    margin: "3rem auto",
                    justifySelf: "center",
                    marginTop:"5rem",
                }}
            >
                <Link to="/Dashboard/Products">
                            <Button
                                type="button"
                                variant="contained"
                                sx={{ backgroundColor: "#FF69B4", width: "15%", height:"25px", position:"absolute", left:"10px", top:"4.5rem" }}
                            >
                                Return
                            </Button>
                            </Link>
                            <Typography sx={{color:"red", textAlign:"center"}}> Note: <br/> Only record damaged products that were not recorded while trading here!</Typography>

                <Typography sx={{ margin: "1rem 0" }} variant="h6">
                    Damaged Product
                </Typography>
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                >
                    
                        
                    
                            {productFields.map((field, index) => (
                                <Box key={index} style={{ display: "flex" }}>
                                    <TextField
                                        select
                                        label="Product"
                                        name={`product${index + 1}`}
                                        value={field.product}
                                        onChange={(e) => {
                                            const newFields = [...productFields];
                                            newFields[index].product = e.target.value;
                                            setProductFields(newFields);
                                        }}
                                        variant="outlined"
                                        sx={inputFieldStyles}
                                        style={{ width: "50%" }}
                                    >
                                        {Object.keys(productOptions).map((product) => (
                                            <MenuItem key={product} value={product}>
                                                {product}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                    
                                    <TextField
                                        label="QTY"
                                        name={`quantity${index + 1}`}
                                        value={field.quantity}
                                        onChange={(e) => {
                                            const newFields = [...productFields];
                                            newFields[index].quantity = e.target.value;
                                            setProductFields(newFields);
                                        }}
                                        variant="outlined"
                                        style={{ width: "50%" }}
                                        sx={inputFieldStyles}
                                    />
                                </Box>
                            ))}
                            <Button
                                type="button"
                                variant="contained"
                                onClick={addProductField}
                                sx={{ backgroundColor: "#4CAF88", width: "50%" }}
                            >
                                Add Product
                            </Button>

                    <Button
                        type="submit"
                        variant="contained"
                        startIcon={<KeyboardOptionKey />}
                        sx={{ backgroundColor: "#4CAF50" }}
                    >
                        Record Damages
                    </Button>
                </Box>
            <Footer />
            </div>
        </div>
    );
};

export default ProductDamagesForm;