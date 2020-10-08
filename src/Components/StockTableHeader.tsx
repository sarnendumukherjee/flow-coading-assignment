import React, { FC } from "react";
import { TableCell, TableCellProps } from "@material-ui/core";

interface StockTableHeaderProps {
  align?: TableCellProps["align"];
}

const StockTableHeader: FC<StockTableHeaderProps> = ({ children, align }) => (
  <TableCell
    data-testid="stockTableHeader"
    align={align}
    className="stockTableCell"
  >
    {children}
  </TableCell>
);

export default StockTableHeader;
