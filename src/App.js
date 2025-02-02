import React from 'react';
import Accounts from './components/Accounts';
import BranchPage from './components/Branch';
import DashboardPage from './components/Dashboard';
import Facility from './components/Facility';
import HumanResources from './components/HumanResource';
import Login from './components/Login';
import Material from './components/Material';
import SalesForm from './components/Forms/SalesForm';
import UserManagement from './components/UserManagement';

import ProductPage from './components/Products';
import ProductTransferForm from './components/Products/ProductTransferForm';
import ProductDamagesForm from './components/Products/ProductDamagesForm';
import ProductSales from './components/Products/ProductSales';
import ProductForm from './components/Products/ProductForm';
import ProductRecipe from './components/Products/ProductRecipe';


import MaterialPage from './components/Material';
import MaterialForm from './components/Material/MaterialForm';
import MaterialRequestForm from './components/Material/MaterialRequestForm';
import MaterialTransferForm from './components/Material/MaterialTransferForm';
import MaterialDamagesForm from './components/Material/MaterialDamagesForm';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LiveOrderTracking from './components/LiveOrderTracking';




function App() {
return (

    <Router>
        <Routes>

            
            <Route path="/Dashboard/Products" element={<ProductPage />} />
            <Route path="/ProductTransferForm" element={<ProductTransferForm />} />
            <Route path="/ProductDamagesForm" element={<ProductDamagesForm />} />
            <Route path="/ProductSales" element={<ProductSales />} />
            <Route path="/ProductForm" element={<ProductForm />} />
            <Route path="/ProductRecipe" element={<ProductRecipe />} />




            <Route path="/Dashboard/Material" element={<MaterialPage />} />
            <Route path="/MaterialRequestForm" element={<MaterialRequestForm />} />
            <Route path="/MaterialtransferForm" element={<MaterialTransferForm />} />
            <Route path="/MaterialDamagesForm" element={<MaterialDamagesForm/>} />

            <Route path="/" element={<Login/>} />
            <Route path="/Accounts" element={<Accounts/>} />
            <Route path="/Branch" element={<BranchPage/>}/>
            <Route path="/Dashboard" element={<DashboardPage/>}/>
            <Route path="/Facility" element={<Facility/>}/>
            <Route path="/HumanResources" element={<HumanResources/>} />
            <Route path="/Material" element={<Material/>} />
            <Route path="/MaterialForm" element={<MaterialForm/>} />
            <Route path="/SalesForm" element={<SalesForm/>} />
            <Route path="/UserManagement" element={<UserManagement/>} />
            <Route path="/LiveOrderTracking" element={<LiveOrderTracking/>} />
        </Routes>
    </Router>
);
 
}

export default App;
