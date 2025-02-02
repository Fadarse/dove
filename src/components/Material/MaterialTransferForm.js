import React, { useState } from "react";
import { Header, Footer } from "../custom";
import { TextField, MenuItem, Button, Box, Typography, MenuList, AppBar, Toolbar } from "@mui/material";
import InputField from "../Dashboard/InputField";
import { KeyboardOptionKey, TextFields } from "@mui/icons-material";
import {Link} from "react-router-dom";

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
const indirectMaterialOptions = {
    Diesel: "",
    Pastry_bowl: "",
    Pastry_brush:"",
    Sponge: "",
    Detergent: "",
    Apron: "",
    Scale: "",
    Hand_gloves: "",
    Oven_gloves: "", 
    Footwear: "", 
    Napkin: "",
    Sweeper: "",
    Mopping_stick: "",
    Scrapper: "",
    Dust_bin: "",
    Pen: "",
    Book: "",
    Uniform: "",
    Foil_paper: "",
    
};

const MaterialTransferForm = () => {
    const [formData, setFormData] = useState({
        material: "",
        measurement: "",
        quantity: "",
        indirectMaterial: "",
        indirectMeasurement: "",
        indirectQuantity: "",
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
    const [indirectMaterialFields, setIndirectMaterialFields] = useState([{ material: "", measurement: "", quantity: "" }]);

    const addIndirectMaterialField = () => {
        setIndirectMaterialFields([...indirectMaterialFields, { material: "", measurement: "", quantity: "" }]);
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
                <Typography variant="h5">Material Transfer Form</Typography>
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
                <Link to="/Dashboard/Material">
                            <Button
                                type="button"
                                variant="contained"
                                sx={{ backgroundColor: "#FF69B4", width: "15%", height:"25px", position:"absolute", left:"10px", top:"4.5rem" }}
                            >
                                Return
                            </Button>
                            </Link>


                <Typography sx={{ margin: "1rem 0" }} variant="h6">
                    Direct Production Materials
                </Typography>
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                >
                    
                        
                    
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
                                        <MenuItem value="kilogram">Kilogram(KG)</MenuItem>
                                        <MenuItem value="gram">Gram</MenuItem>
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

                       
                    <Typography sx={{ margin: "1rem 0" }} variant="h6">
                        Indirect Materials
                    </Typography>
                    {indirectMaterialFields.map((field, index) => (
                                <Box key={index} style={{ display: "flex" }}>
                                    <TextField
                                        select
                                        label="Material"
                                        name={`indirectMaterial${index + 1}`}
                                        value={field.indirectMaterial}
                                        onChange={(e) => {
                                            const newFields = [...indirectMaterialFields];
                                            newFields[index].indirectMaterial = e.target.value;
                                            setIndirectMaterialFields(newFields);
                                        }}
                                        variant="outlined"
                                        sx={inputFieldStyles}
                                        style={{ width: "35%" }}
                                    >
                                        {Object.keys(indirectMaterialOptions).map((material) => (
                                            <MenuItem key={material} value={material}>
                                                {material}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                    <TextField
                                        select
                                        label="Measurement"
                                        name={`indirectMeasurement${index + 1}`}
                                        value={field.indirectMeasurement}
                                        onChange={(e) => {
                                            const newFields = [...indirectMaterialFields];
                                            newFields[index].indirectMeasurement = e.target.value;
                                            setIndirectMaterialFields(newFields);
                                        }}
                                        variant="outlined"
                                        sx={inputFieldStyles}
                                        style={{ width: "35%" }}
                                    >
                                        <MenuItem value="kilogram">Kilogram(KG)</MenuItem>
                                        <MenuItem value="gram">Gram</MenuItem>
                                        <MenuItem value="liter">Litre</MenuItem>
                                        <MenuItem value="centiliter">Centiliter(CL)</MenuItem>
                                        <MenuItem value="bag">Bag</MenuItem>
                                        <MenuItem value="pack">Pack</MenuItem>
                                    </TextField>
                                    <TextField
                                        label="QTY"
                                        name={`indirectQuantity${index + 1}`}
                                        value={field.indirectQuantity}
                                        onChange={(e) => {
                                            const newFields = [...indirectMaterialFields];
                                            newFields[index].indirectQuantity = e.target.value;
                                            setIndirectMaterialFields(newFields);
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
                                onClick={addIndirectMaterialField}
                                sx={{ backgroundColor: "#4CAF88", width: "50%" }}
                            >
                                Add Material
                            </Button>
                            <TextField 
                            select
                            label="Select Recipient"
                            name="recipient"
                            // value={DataTransfer.recipient}
                            sx={inputFieldStyles}
                            required
                            >
                                <MenuItem value="ojodu"> Ojodu</MenuItem>
                                <MenuItem value="lekki"> Lekki</MenuItem>
                                <MenuItem value="osogbo"> Osogbo</MenuItem>
                            </TextField>
                            <TextField 
                            label="reason"
                            name="reason"
                            required
                            ></TextField>

                    <Button
                        type="submit"
                        variant="contained"
                        startIcon={<KeyboardOptionKey />}
                        sx={{ backgroundColor: "#4CAF50" }}
                    >
                        Transfer Materials
                    </Button>
                </Box>
            <Footer />
            </div>
        </div>
    );
};

export default MaterialTransferForm;