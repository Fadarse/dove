import React, { useEffect, useState } from "react";
import { getAllBranches } from "./branchApi";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from "@mui/material";

const BranchTable = () => {
  const [branches, setBranches] = useState([]);

  useEffect(() => {
    const getBranches = async () => {
      try {
        const data = await getAllBranches();
        setBranches(data);
      } catch (error) {
        console.error("There was an error fetching the branch data!", error);
      }
    };
    getBranches();
  }, []);

  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Branch ID</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Manager</TableCell>
              <TableCell>Other Elements</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {branches.map((branch, index) => (
              <TableRow
                key={branch.branchId}
                sx={{ backgroundColor: index % 2 === 0 ? 'white' : '#f5f5f5' }}
              >
                <TableCell>{branch.name}</TableCell>
                <TableCell>{branch.branchId}</TableCell>
                <TableCell>{branch.location}</TableCell>
                <TableCell>{branch.manager}</TableCell>
                <TableCell>{branch.otherElements}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default BranchTable;
