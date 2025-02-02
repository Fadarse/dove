import React, { useState } from "react";
import { Footer } from "../custom";
import { TextField, Button, Typography, Box } from "@mui/material";
import { createBranch } from "./branchApi";




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

const BranchForm = ({ onSubmit }) => {
  const [formData, SetFormData] = useState({
    branchName: '',
    branchId: '',
    location: '',
    manager: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    SetFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createBranch(formData);
      alert('Branch created successfully');
      SetFormData({ name: '', location: '', manager: '' });
    } catch (error) {
      console.error('Error creating branch', error);
    }
  };

  return (
    <div style={{
      width: "80%",
      maxWidth: "40rem",
      margin: "3rem auto",
      justifySelf: "center",
      // display:"none",
    }}>
    <Box component="form" onSubmit={handleSubmit} p={2}>
      <Typography variant="h4" gutterBottom>
        Create Branch
      </Typography>
      <Box mb={2}>
        <TextField
          label="Branch Name"
          name="branchName"
          value={formData.branchName}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
          sx={inputFieldStyles}
        />
      </Box>
      <Box mb={2}>
        <TextField
          label="Branch ID"
          name="branchId"
          value={formData.branchId}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
          sx={inputFieldStyles}
        />
      </Box>
      <Box mb={2}>
        <TextField
          label="Branch Location"
          name="branchLocation"
          value={formData.branchLocation}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
          sx={inputFieldStyles}
        />
      </Box>
      <Box mb={2}>
        <TextField
          label="Manager"
          name="branchManager"
          value={formData.branchManager}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
          sx={inputFieldStyles}
        />
      </Box>
      <Button type="submit" variant="contained" sx={{backgroundColor: "#4CAF50"}} >
        Create Branch
      </Button>
    </Box>
    <Footer />
    </div>
  );
};

export default BranchForm;
