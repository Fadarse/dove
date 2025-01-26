import React from 'react';
import Accounts from './components/Accounts';
import BranchPage from './components/Branch';
import DashboardPage from './components/Dashboard';
import Facility from './components/Facility';
import HumanResources from './components/HumanResource';
import Login from './components/Login';
import Material from './components/Material';
import ProcurementForm from './components/ProcurementForm';
import Product from './components/Product';
import ProductionForm from './components/ProductionForm';
import SalesForm from './components/Forms/SalesForm';
import UserManagement from './components/UserManagement';

import CustomForm from './components/Dashboard/CustomForm';
import ProductForm from './components/Product/ProductForm';
import MaterialForm from './components/Material/MaterialForm';
import MaterialRequestForm from './components/Material/MaterialRequestForm';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LiveOrderTracking from './components/LiveOrderTracking';




function App() {
return (

    <Router>
        <Routes>

            <Route path="/Dashboard/CustomForm" element={<CustomForm/>} />
            <Route path="/Dashboard/ProductForm" element={<ProductForm/>} />
            <Route path="/Dashboard/MaterialForm" element={<MaterialForm/>} />
            <Route path="/Dashboard/MaterialRequestForm" element={<MaterialRequestForm />} />

            <Route path="/" element={<Login/>} />
            <Route path="/Accounts" element={<Accounts/>} />
            <Route path="/Branch" element={<BranchPage/>}/>
            <Route path="/Dashboard" element={<DashboardPage/>}/>
            <Route path="/Facility" element={<Facility/>}/>
            <Route path="/HumanResources" element={<HumanResources/>} />
            <Route path="/Material" element={<Material/>} />
            <Route path="/MaterialForm" element={<MaterialForm/>} />
            <Route path="/ProcurementForm" element={<ProcurementForm/>} />
            <Route path="/Product" element={<Product/>} />
            <Route path="/ProductionForm" element={<ProductionForm/>} />
            <Route path="/SalesForm" element={<SalesForm/>} />
            <Route path="/UserManagement" element={<UserManagement/>} />
            <Route path="/LiveOrderTracking" element={<LiveOrderTracking/>} />
        </Routes>
    </Router>
);
 
}

export default App;
