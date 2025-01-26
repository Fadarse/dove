import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import { createBranch } from "./branchApi";

const BranchForm = ({ onSubmit }) => {
  const [formData, SetFormData] = useState({
    name: '',
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
    <div>
    <Box component="form" onSubmit={handleSubmit} p={2}>
      <Typography variant="h4" gutterBottom>
        Create Branch
      </Typography>
      <Box mb={2}>
        <TextField
          label="Branch Name"
          id="branchName"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
        />
      </Box>
      <Box mb={2}>
        <TextField
          label="Branch Location"
          id="branchLocation"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
        />
      </Box>
      <Box mb={2}>
        <TextField
          label="Manager"
          id="branchManager"
          name="manager"
          value={formData.manager}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
        />
      </Box>
      <Button type="submit" variant="contained" color="primary">
        Create Branch
      </Button>
    </Box>
    </div>
  );
};

export default BranchForm;
