import React, { useEffect, useState } from "react";
import { getAllBranches } from "./branchApi";

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
      <h1>Company Branches</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Branch ID</th>
            <th>Location</th>
            <th>Manager</th>
            <th>Other Elements</th>
          </tr>
        </thead>
        <tbody>
          {branches.map((branch) => (
            <tr key={branch.branchId}>
              <td>{branch.name}</td>
              <td>{branch.branchId}</td>
              <td>{branch.location}</td>
              <td>{branch.manager}</td>
              <td>{branch.otherElements}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BranchTable;
