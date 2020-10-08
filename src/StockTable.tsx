import React, { FC } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Select,
  MenuItem,
} from "@material-ui/core";
import StockRow from "./StockRow";

// TODO: Replace hard-coded stocks
const stocks = [
  {
    id: "AAPL",
    name: "Apple Inc.",
    currency: "USD",
    price: 273.52,
    priceEUR: 249.09,
  },
  {
    id: "FLOW",
    name: "Flow Traders NV",
    currency: "EUR",
    price: 21.74,
    priceEUR: 21.74,
  },
];

const StockTable: FC = () => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="Stocks table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Currency</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">
              Price &nbsp;
              <Select id="select" defaultValue="EUR">
                <MenuItem value="EUR">EUR</MenuItem>
                <MenuItem value="USD">USD</MenuItem>
              </Select>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {stocks.map((stock) => (
            <StockRow key={stock.id} {...stock} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StockTable;
