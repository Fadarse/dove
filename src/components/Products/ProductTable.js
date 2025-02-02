import React, { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

const ProductTable = () => {
  const [products, setProducts] = useState([]);

  const sampleProducts = [
    {
      name: "Delight Bread", openingStock: 200, productionStock: 200, receivedStock: 1500, sales: 1400, damages: 10, transfer: 90,
      complimentary: 10, closingStock: 190, unitCost: "#700", noSalesCost: "#7,000", salesCost: "#70,000", unitPrice: "#1,000",
      salesAmount: "#100,000", productId:"B001",  productCategory:"Bread", unitProfitability: "70%", salesProfitability: "76%",
    },
    {
      name: "Delight Bread", openingStock: 200, productionStock: 200, receivedStock: 1500, sales: 1400, damages: 10, transfer: 90,
      complimentary: 10, closingStock: 190, unitCost: "#700", noSalesCost: "#7,000", salesCost: "#70,000", unitPrice: "#1,000",
      salesAmount: "#100,000", productId:"B001",  productCategory:"Bread", unitProfitability: "70%", salesProfitability: "76%",
    },
    {
      name: "Delight Bread", openingStock: 200, productionStock: 200, receivedStock: 1500, sales: 1400, damages: 10, transfer: 90,
      complimentary: 10, closingStock: 190, unitCost: "#700", noSalesCost: "#7,000", salesCost: "#70,000", unitPrice: "#1,000",
      salesAmount: "#100,000", productId:"B001",  productCategory:"Bread", unitProfitability: "70%", salesProfitability: "76%",
    },
    {
      name: "Delight Bread", openingStock: 200, productionStock: 200, receivedStock: 1500, sales: 1400, damages: 10, transfer: 90,
      complimentary: 10, closingStock: 190, unitCost: "#700", noSalesCost: "#7,000", salesCost: "#70,000", unitPrice: "#1,000",
      salesAmount: "#100,000", productId:"B001",  productCategory:"Bread", unitProfitability: "70%", salesProfitability: "76%",
    },
    {
      name: "Delight Bread", openingStock: 200, productionStock: 200, receivedStock: 1500, sales: 1400, damages: 10, transfer: 90,
      complimentary: 10, closingStock: 190, unitCost: "#700", noSalesCost: "#7,000", salesCost: "#70,000", unitPrice: "#1,000",
      salesAmount: "#100,000", productId:"B001",  productCategory:"Bread", unitProfitability: "70%", salesProfitability: "76%",
    },
    {
      name: "Delight Bread", openingStock: 200, productionStock: 200, receivedStock: 1500, sales: 1400, damages: 10, transfer: 90,
      complimentary: 10, closingStock: 190, unitCost: "#700", noSalesCost: "#7,000", salesCost: "#70,000", unitPrice: "#1,000",
      salesAmount: "#100,000", productId:"B001",  productCategory:"Bread", unitProfitability: "70%", salesProfitability: "76%",
    },
    {
      name: "Delight Bread", openingStock: 200, productionStock: 200, receivedStock: 1500, sales: 1400, damages: 10, transfer: 90,
      complimentary: 10, closingStock: 190, unitCost: "#700", noSalesCost: "#7,000", salesCost: "#70,000", unitPrice: "#1,000",
      salesAmount: "#100,000", productId:"B001",  productCategory:"Bread", unitProfitability: "70%", salesProfitability: "76%",
    },
  ];

  useEffect(() => {
    setProducts(sampleProducts);
  }, []);

  return (
    <TableContainer style={{ height: "600px" }} component={Paper}>
      <Table>
        <TableHead style={{ backgroundColor: "#D0F0D0", position: "sticky", top: 0, zIndex: 3 }}>
          <TableRow>
            <TableCell style={{ position: "sticky", left: 0, backgroundColor: "#D0F0D0" }}>Product</TableCell>
            <TableCell>Op. Stock</TableCell>
            <TableCell>Rcvd. Stock</TableCell>
            <TableCell>Prod. Stock</TableCell>
            <TableCell>Sales</TableCell>
            <TableCell>DMG</TableCell>
            <TableCell>TRF</TableCell>
            <TableCell>CMP</TableCell>
            <TableCell>Closing Stock</TableCell>
            <TableCell>Unit Cost</TableCell>
            <TableCell>NSC</TableCell>
            <TableCell>Sales Cost</TableCell>
            <TableCell>Unit Price</TableCell>
            <TableCell>Sales Amt</TableCell>
            <TableCell>Prod. ID</TableCell>
            <TableCell>CAT.</TableCell>
            <TableCell>UCRR%</TableCell>
            <TableCell>SCRR%</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product, index) => (
            <TableRow
              key={product.productId}
              sx={{ backgroundColor: index % 2 === 0 ? 'white' : '#f5f5f5' }}
            >
              <TableCell style={{ position: "sticky", left: 0, backgroundColor: index % 2 === 0 ? 'white' : '#f5f5f5' }}>{product.name}</TableCell>
              <TableCell>{product.openingStock}</TableCell>
              <TableCell>{product.receivedStock}</TableCell>
              <TableCell>{product.productionStock}</TableCell>
              <TableCell>{product.sales}</TableCell>
              <TableCell>{product.damages}</TableCell>
              <TableCell>{product.transfer}</TableCell>
              <TableCell>{product.complimentary}</TableCell>
              <TableCell>{product.closingStock}</TableCell>
              <TableCell>{product.unitCost}</TableCell>
              <TableCell>{product.noSalesCost}</TableCell>
              <TableCell>{product.salesCost}</TableCell>
              <TableCell>{product.unitPrice}</TableCell>
              <TableCell>{product.salesAmount}</TableCell>
              <TableCell>{product.productId}</TableCell>
              <TableCell>{product.productCategory}</TableCell>
              <TableCell>{product.unitProfitability}</TableCell>
              <TableCell>{product.salesProfitability}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductTable;
