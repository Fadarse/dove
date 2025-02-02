import React, { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

const MaterialTable = () => {
  const [materials, setMaterials] = useState([]);

  const sampleMaterials = [
   
    {
      name: "Flour",
      openingStock: 20,
      used: 10,
      damages: 2,
      transfer: 1,
      currentStock: 7,
      closingStock: 7,
      request: 15,
      materialCategory: "Procurement",
      materialId: "P001",
      bulkMeasurement: "bags (50kg)",
      unitMeasurement: "kg",
      bulkPrice: "#50,000",
      unitPrice: "#1,000"
    },
    {
      name: "Flour",
      openingStock: 20,
      used: 10,
      damages: 2,
      transfer: 1,
      currentStock: 7,
      closingStock: 7,
      request: 15,
      materialCategory: "Procurement",
      materialId: "P001",
      bulkMeasurement: "bags (50kg)",
      unitMeasurement: "kg",
      bulkPrice: "#50,000",
      unitPrice: "#1,000"
    },
    {
      name: "Flour",
      openingStock: 20,
      used: 10,
      damages: 2,
      transfer: 1,
      currentStock: 7,
      closingStock: 7,
      request: 15,
      materialCategory: "Procurement",
      materialId: "P001",
      bulkMeasurement: "bags (50kg)",
      unitMeasurement: "kg",
      bulkPrice: "#50,000",
      unitPrice: "#1,000"
    },
    {
      name: "Flour",
      openingStock: 20,
      used: 10,
      damages: 2,
      transfer: 1,
      currentStock: 7,
      closingStock: 7,
      request: 15,
      materialCategory: "Procurement",
      materialId: "P001",
      bulkMeasurement: "bags (50kg)",
      unitMeasurement: "kg",
      bulkPrice: "#50,000",
      unitPrice: "#1,000"
    },
    {
      name: "Flour",
      openingStock: 20,
      used: 10,
      damages: 2,
      transfer: 1,
      currentStock: 7,
      closingStock: 7,
      request: 15,
      materialCategory: "Procurement",
      materialId: "P001",
      bulkMeasurement: "bags (50kg)",
      unitMeasurement: "kg",
      bulkPrice: "#50,000",
      unitPrice: "#1,000"
    },
    
  ];

  useEffect(() => {
    setMaterials(sampleMaterials);
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead style={{backgroundColor:"#D0F0D0",}}>
          <TableRow>
            <TableCell>Material</TableCell>
            <TableCell>Opening Stock</TableCell>
            <TableCell>Used</TableCell>
            <TableCell>Damages</TableCell>
            <TableCell>Transfer</TableCell>
            <TableCell>Current Stock</TableCell>
            <TableCell>Closing Stock</TableCell>
            <TableCell>Request</TableCell>
            <TableCell>Material Category</TableCell>
            <TableCell>Material ID</TableCell>
            <TableCell>Bulk Measurement</TableCell>
            <TableCell>Unit Measurement</TableCell>
            <TableCell>Bulk Price</TableCell>
            <TableCell>Unit Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {materials.map((material, index) => (
            <TableRow
              key={material.materialId}
              sx={{ backgroundColor: index % 2 === 0 ? 'white' : '#f5f5f5' }}
            >
              <TableCell>{material.name}</TableCell>
              <TableCell>{material.openingStock}</TableCell>
              <TableCell>{material.used}</TableCell>
              <TableCell>{material.damages}</TableCell>
              <TableCell>{material.transfer}</TableCell>
              <TableCell>{material.currentStock}</TableCell>
              <TableCell>{material.closingStock}</TableCell>
              <TableCell>{material.request}</TableCell>
              <TableCell>{material.materialCategory}</TableCell>
              <TableCell>{material.materialId}</TableCell>
              <TableCell>{material.bulkMeasurement}</TableCell>
              <TableCell>{material.unitMeasurement}</TableCell>
              <TableCell>{material.bulkPrice}</TableCell>
              <TableCell>{material.unitPrice}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MaterialTable;
