import React, { FC } from "react";
import { TableRow, TableCell } from "@material-ui/core";

export interface Props {
  id: string;
  name: string;
  currency: string;
  price: number;
  priceEUR: number;
}

const StockRow: FC<Props> = ({ id, name, priceEUR, price, currency }) => {
  return (
    <TableRow key={id}>
      <TableCell component="th" scope="row">
        {id}
      </TableCell>
      <TableCell align="right">{name}</TableCell>
      <TableCell align="right">{currency}</TableCell>
      <TableCell align="right">{price}</TableCell>
      <TableCell align="right">{priceEUR}</TableCell>
    </TableRow>
  );
};

export default StockRow;
