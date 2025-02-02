import React, { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, AppBar, Typography, Toolbar, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Footer } from "../custom";

const ProductSales = () => {
    const [products, setProducts] = useState([]);

    const sampleProducts = [
        
        {
            name: "Delight Bread", openingStock: 200, productionStock: 200, receivedStock: 1500, sales: 1400, damages: 10, transfer: 90,
            complimentary: 10, closingStock: 190, productId: "B001", productCategory: "Bread",
        },
        {
            name: "Delight Bread", openingStock: 200, productionStock: 200, receivedStock: 1500, sales: 1400, damages: 10, transfer: 90,
            complimentary: 10, closingStock: 190, productId: "B001", productCategory: "Bread",
        },
        {
            name: "Delight Bread", openingStock: 200, productionStock: 200, receivedStock: 1500, sales: 1400, damages: 10, transfer: 90,
            complimentary: 10, closingStock: 190, productId: "B001", productCategory: "Bread",
        },
        {
            name: "Delight Bread", openingStock: 200, productionStock: 200, receivedStock: 1500, sales: 1400, damages: 10, transfer: 90,
            complimentary: 10, closingStock: 190, productId: "B001", productCategory: "Bread",
        },
        {
            name: "Delight Bread", openingStock: 200, productionStock: 200, receivedStock: 1500, sales: 1400, damages: 10, transfer: 90,
            complimentary: 10, closingStock: 190, productId: "B001", productCategory: "Bread",
        },
        {
            name: "Delight Bread", openingStock: 200, productionStock: 200, receivedStock: 1500, sales: 1400, damages: 10, transfer: 90,
            complimentary: 10, closingStock: 190, productId: "B001", productCategory: "Bread",
        },
    ];

    useEffect(() => {
        setProducts(sampleProducts);
    }, []);

    const [editIdx, setEditIdx] = useState(-1);

    const handleEdit = (index) => {
        setEditIdx(index);
    };

    const editableFields = ["damages", "transfer", "complimentary", "closingStock"];

    const handleSave = () => {
        setEditIdx(-1);
    };

    const handleChange = (e, index, field) => {
        const newProducts = [...products];
        newProducts[index][field] = e.target.value;
        setProducts(newProducts);
    };

    return (
        <div>
            <AppBar
                sx={{
                    backgroundColor: "#f0f0f0",
                    boxShadow: "0 1px 4px",
                    color: "#4CAF50",
                    width: "100%",
                    position: "fixed",
                    top: "0",
                    zIndex: "10",
                }}
            >
                <Toolbar>
                    <Typography variant="h5">Sales Record</Typography>
                    <img
                        alt="logo"
                        src="../superchefs-logo.png"
                        style={{
                            height: 40,
                            marginRight: 20,
                            position: "fixed",
                            right: 0,
                        }}
                    />
                </Toolbar>
            </AppBar>

            <div
                style={{
                    width: "80%",
                    maxWidth: "90rem",
                    margin: "3rem auto",
                    justifySelf: "center",
                    marginTop: "7rem",
                }}
            >
                <Link to="/Dashboard/Products">
                    <Button
                        type="button"
                        variant="contained"
                        sx={{
                            backgroundColor: "#FF69B4",
                            width: "15%",
                            height: "25px",
                            position: "absolute",
                            left: "10px",
                            top: "4.5rem",
                        }}
                    >
                        Return
                    </Button>
                </Link>

                <TableContainer style={{height:"600px"}} component={Paper}>
                    <Table>
                        <TableHead style={{ backgroundColor: "#D0F0D0", position: "sticky", top: 0, zIndex: 2 }}>
                            <TableRow>
                                <TableCell sx={{ position: "sticky", left: 0, backgroundColor: "#D0F0D0", zIndex: 3 }}>Product</TableCell>
                                <TableCell>Opening Stock</TableCell>
                                <TableCell>Received Stock</TableCell>
                                <TableCell>Produced Stock</TableCell>
                                <TableCell>Sales</TableCell>
                                <TableCell>Damages</TableCell>
                                <TableCell>Transfer</TableCell>
                                <TableCell>CMP</TableCell>
                                <TableCell>Closing Stock</TableCell>
                                <TableCell>Product ID</TableCell>
                                <TableCell>Category</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {products.map((product, index) => (
                                <TableRow
                                    key={product.productId}
                                    sx={{ backgroundColor: index % 2 === 0 ? "white" : "#f5f5f5" }}
                                >
                                    <TableCell sx={{ position: "sticky", left: 0, backgroundColor: index % 2 === 0 ? "white" : "#f5f5f5", zIndex: 1 }}>
                                        {editIdx === index && editableFields.includes("name") ? (
                                            <input
                                                type="text"
                                                value={product.name}
                                                onChange={(e) => handleChange(e, index, "name")}
                                            />
                                        ) : (
                                            product.name
                                        )}
                                    </TableCell>
                                    {Object.keys(product).slice(1).map((key) => (
                                        <TableCell key={key}>
                                            {editIdx === index && editableFields.includes(key) ? (
                                                <input
                                                    type="number"
                                                    value={product[key]}
                                                    onChange={(e) => handleChange(e, index, key)}
                                                    style={{
                                                        width:"3rem"
                                                    }}
                                                />
                                            ) : (
                                                product[key]
                                            )}
                                        </TableCell>
                                    ))}
                                    <TableCell>
                                        {editIdx === index ? (
                                            <Button onClick={handleSave}>Save</Button>
                                        ) : (
                                            <Button onClick={() => handleEdit(index)}>Edit</Button>
                                        )}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Typography sx={{color:"red", textAlign:"center"}}> Note: <br/> Confirm your inputs before submitting.</Typography>

                <Button
                    type="submit"
                    variant="contained"
                    sx={{ backgroundColor: "#4CAF50" }}
                >
                        Submit Sales Record
                </Button>
            </div>
            <Footer />
        </div>
    );
};

export default ProductSales;
