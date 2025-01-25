import React, { useState } from "react";
import { TextField, MenuItem, Button, Box } from "@mui/material";
import InputField from "./InputField";
import SelectField from "./SelectField";
import { KeyboardOptionKey } from "@mui/icons-material";

const CustomForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    id: "",
    password: "",
    email: "",
    phoneNumber: "",
    accountNumber: "",
    address: "",
    role: "",
    gender: "",
  });

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
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
    >
      <TextField
        label="First Name"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        variant="outlined"
        fullWidth
      />
      <TextField
        label="Last Name"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        variant="outlined"
        fullWidth
      />
      <InputField
        label="Id number"
        name="id"
        value={formData.id}
        onChange={handleChange}
        variant="outlined"
        fullWidth
      />
      <InputField
        label="Assign Password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        variant="outlined"
        fullWidth
      />
      <InputField
        label="E mail"
        name="email"
        value={formData.email}
        onChange={handleChange}
        variant="outlined"
        fullWidth
      />
      <InputField
        label="Phone Number"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
        variant="outlined"
        fullWidth
      />
      <InputField
        label="Account Number"
        name="accountNumber"
        value={formData.accountNumber}
        onChange={handleChange}
        variant="outlined"
        fullWidth
      />
      <InputField
        label="Address"
        name="address"
        value={formData.address}
        onChange={handleChange}
        variant="outlined"
        fullWidth
      />
      <TextField
        select
        label="Role"
        name="role"
        value={formData.role}
        onChange={handleChange}
        variant="outlined"
        fullWidth
      >
        <MenuItem value="director">Director</MenuItem>
        <MenuItem value="generalManager">General Manager</MenuItem>
        <MenuItem value="it">I T officer/Mngr.</MenuItem>
        <MenuItem value="maintenance">Maintenance Officer</MenuItem>
        <MenuItem value="Supplier">Supplier</MenuItem>
        <MenuItem value="procurement">Procurement Officer</MenuItem>
        <MenuItem value="qualityControl">Quality Control Officer</MenuItem>
        <MenuItem value="Account">Accountant</MenuItem>
        <MenuItem value="humanResource">Human Resource Officer/Mngr.</MenuItem>
        <MenuItem value="areaManager">Area Manager</MenuItem>
        <MenuItem value="branchManager">Branch Manager</MenuItem>
        <MenuItem value="headBaker">Head Baker</MenuItem>
        <MenuItem value="salesRep">Sales Representative</MenuItem>
        <MenuItem value="baker">Baker</MenuItem>
        <MenuItem value="cleaner">Cleaner</MenuItem>
      </TextField>
      <TextField
        select
        label="Gender"
        name="gender"
        value={formData.gender}
        onChange={handleChange}
        variant="outlined"
        fullWidth
      >
        <MenuItem value="male">Male</MenuItem>
        <MenuItem value="female">Female</MenuItem>
      </TextField>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        startIcon={<KeyboardOptionKey />}
      >
        Submit
      </Button>
    </Box>
  );
};

export default CustomForm;
