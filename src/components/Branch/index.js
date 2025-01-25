import React from "react";
import BranchTable from "./BranchTable";
import BranchForm from "./BranchForm";

const BranchPage = () => {
    return (
        <div>
            <h1>Branches</h1>
            <BranchTable />
            <h2>Add a New Branch</h2>
            <BranchForm />
        </div>
    );
};

export default BranchPage;