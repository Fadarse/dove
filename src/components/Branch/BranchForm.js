import React, { useState } from "react";
import { createBranch } from "./branchApi";

const BranchForm = ({ onSubmit }) => {
  const [formData, SetFormData] = useState({
    name: '',
    location: '',
    manager: '',
  });
  const handleChange = (e) => {
    const {name, value} = e.target;
    SetFormData({ ...formData, [name]: value});
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createBranch(formData);
      alert('Branch created successfuly');
      SetFormData({name: '', location: '', manager: '',});
    }catch (error) {
      console.error('Error creating branch', error);
    }
  };

  return (

    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="branchName">Branch Name:</label>
        <input
          type="text"
          id="branchName"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="branchLocation">Branch Location:</label>
        <input
          type="text"
          id="branchLocation"
          value={formData.location}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="branchManager">Manager:</label>
        <input
          type="text"
          id="branchManager"
          value={formData.manager}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Create Branch</button>
    </form>
  );
};

export default BranchForm;
