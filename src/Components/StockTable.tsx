import React, { FC, useState, useCallback, Dispatch } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Select,
  MenuItem,
} from "@material-ui/core";
import StockRow from "./StockRow";
import { getStocksWithViewCurrency } from "../Utils";
import StockTableHeader from "./StockTableHeader";
import { AppState, Action } from "../Reducer";
import { StockObject } from "../Service";

interface StockTableProps {
  appState: AppState;
  appDispatch: Dispatch<Action>;
}

interface StockObjectWithViewPrice extends StockObject {
  viewPrice: string | null;
}

const StockTable: FC<StockTableProps> = (props: StockTableProps) => {
  const { appState } = props;
  const { stocks, fxData } = appState;

  const [viewCurrency, setViewCurrency] = useState("EUR");

  const handleViewCurrency = useCallback(
    (event) => {
      setViewCurrency(event.target.value);
    },
    [setViewCurrency]
  );

  const stocksWithViewCurrency: StockObjectWithViewPrice[] = getStocksWithViewCurrency(
    stocks,
    fxData,
    viewCurrency
  );

  const Currencies = ["EUR", "USD", "GBP", "CHF"];

  return (
    <TableContainer component={Paper}>
      <Table aria-label="Stocks table">
        <TableHead>
          <TableRow>
            <StockTableHeader>ID</StockTableHeader>
            <StockTableHeader align="right">Name</StockTableHeader>
            <StockTableHeader align="right">Currency</StockTableHeader>
            <StockTableHeader align="right">Price</StockTableHeader>

            <StockTableHeader align="right">
              View price in &nbsp;
              <Select
                id="viewCurrency"
                value={viewCurrency}
                onChange={handleViewCurrency}
              >
                {Currencies.map((currency: string) => (
                  <MenuItem key={currency} value={currency}>
                    {currency}
                  </MenuItem>
                ))}
              </Select>
            </StockTableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {stocksWithViewCurrency.map((stock: StockObjectWithViewPrice) => (
            <StockRow key={stock.id} {...stock} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StockTable;
