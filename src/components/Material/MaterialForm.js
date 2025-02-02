import React, { useState, useEffect } from "react";
import { Header, Footer } from "../custom";
import { TextField, MenuItem, Button, Box, Typography, MenuList, AppBar, Toolbar } from "@mui/material";
import InputField from "../Dashboard/InputField";
import { KeyboardOptionKey, Message } from "@mui/icons-material";
import { Link } from "react-router-dom";


const MaterialForm = () => {
    const [formData, setFormData] = useState({
        materialName: "",
        materialCategory: "",
        materialId: "",
        bulkMeasurement: "",
        unitMeasurement: "",
        bulkPrice: "",
        unitPrice: "",
        
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

    useEffect(() => {
        const calculateUnitPrice = () => {
            let unitMeasurementValue = 1;
            switch (formData.unitMeasurement) {
                case "kilogram":
                    unitMeasurementValue = 50; // 0.02 bags
                    break;
                case "gram":
                    unitMeasurementValue = 1000; // 0.001 kilogram
                    break;
                case "centiliter":
                    unitMeasurementValue = 100; // 0.01 liter
                    break;
                case "milliliter":
                    unitMeasurementValue = 1000; // 0.001 liter
                    break;
                case "pack":
                    unitMeasurementValue = 24; // 1/24 pack
                    break;
                case "0.1":
                    unitMeasurementValue = 10; // 0.1 unit
                    break;
                default:
                    unitMeasurementValue = 1;
            }

            const bulkPrice = parseFloat(formData.bulkPrice) || 0;
            const unitPrice = bulkPrice / unitMeasurementValue;

            setFormData((prevData) => ({
                ...prevData,
                unitPrice: unitPrice.toFixed(2),
            }));
        };

        calculateUnitPrice();
    }, [formData.bulkMeasurement, formData.unitMeasurement, formData.bulkPrice]);





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
                <Typography variant="h5" >Create New Material</Typography>
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
                    margin: "5rem auto",
                    justifySelf: "center",
                }}
            >
                <Link to="/Dashboard/Material">
                                            <Button
                                                type="button"
                                                variant="contained"
                                                sx={{ backgroundColor: "#FF69B4", width: "15%", height:"25px", position:"absolute", left:"10px", top:"4.5rem" }}
                                            >
                                                Return
                                            </Button>
                                            </Link>



                <Typography sx={{ margin: "2rem 0" }} variant="h5">
                    Material Registration Form
                </Typography>
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                >
                    <TextField
                        label="Material Name"
                        name="materialName"
                        value={formData.materialName}
                        onChange={handleChange}
                        fullWidth
                        sx={inputFieldStyles}
                    />
                    <TextField
                        select
                        label="Material Category"
                        name="materialCategory"
                        value={formData.materialCategory}
                        onChange={handleChange}
                        variant="outlined"
                        fullWidth
                        sx={inputFieldStyles}
                    >
                        <MenuItem value="bread">Regular</MenuItem>
                        <MenuItem value="pastry">Compound</MenuItem>
                        <MenuItem value="food">Branch</MenuItem>
                        
                    </TextField>
                    
                    <TextField
                        label="Material ID"
                        name="materialId"
                        value={formData.materialId}
                        onChange={handleChange}
                        variant="outlined"
                        fullWidth
                        sx={inputFieldStyles}
                    />
                    <TextField
                        select
                        label="Bulk Measurement"
                        name="bulkMeasurement"
                        value={formData.bulkMeasurement}
                        onChange={handleChange}
                        variant="outlined"
                        fullWidth
                        sx={inputFieldStyles}
                    >
                        <MenuItem value="bag">Bag(50kg)</MenuItem>
                        <MenuItem value="kilogram">Kilogram</MenuItem>
                        <MenuItem value="liter">Liter</MenuItem>
                        <MenuItem value="centiliter">Centiliter</MenuItem>
                        <MenuItem value="carton">Carton(24)</MenuItem>
                        <MenuItem value="pack">pack</MenuItem>
                    </TextField>
                    <TextField
                        select
                        label="Unit Measurement"
                        name="unitMeasurement"
                        value={formData.unitMeasurement}
                        onChange={handleChange}
                        variant="outlined"
                        fullWidth
                        sx={inputFieldStyles}
                    >
                        <MenuItem value="kilogram">Kilogram</MenuItem>
                        <MenuItem value="gram">gram</MenuItem>
                        <MenuItem value="centiliter">Centiliter</MenuItem>
                        <MenuItem value="milliliter">Milliliter</MenuItem>
                        <MenuItem value="pack">Pack(1/24)</MenuItem>
                        <MenuItem value="0.1">0.1</MenuItem>
                    </TextField>
                    <TextField
                        label="Bulk Price"
                        name="bulkPrice"
                        value={formData.bulkPrice}
                        onChange={handleChange}
                        variant="outlined"
                        fullWidth
                        sx={inputFieldStyles}
                    />
                        
                    <TextField
                        label="Unit Price"
                        name="unitPrice"
                        value={formData.unitPrice}
                        onChange={handleChange}
                        variant="outlined"
                        fullWidth
                        sx={inputFieldStyles}
                    />
                    

                    <Button
                        type="submit"
                        variant="contained"
                        startIcon={<KeyboardOptionKey />}
                        sx={{ backgroundColor: "#4CAF50" }}
                    >
                        Register Material
                    </Button>
                </Box>
                <Footer />
            </div>
        </div>
    );
};

export default MaterialForm;