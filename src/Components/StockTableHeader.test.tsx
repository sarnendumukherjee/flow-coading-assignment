import React from "react";
import { render } from "@testing-library/react";
import StockTableHeader from "./StockTableHeader";

jest.mock("@material-ui/core", () => ({
  TableCell: ({ children, ...rest }: any) => <div {...rest}>{children}</div>,
}));

describe("StockTableHeader", () => {
  it("should render the children inside table cell with the proper alignment", () => {
    const testChild = "testChild";
    const testAlign = "left";
    const { getByTestId, getByText } = render(
      <StockTableHeader align={testAlign}>{testChild}</StockTableHeader>
    );
    const tableCell = getByTestId("stockTableHeader");
    expect(tableCell).toBeInTheDocument();
    expect(tableCell.getAttribute("align")).toEqual(testAlign);
    expect(getByText(testChild)).toBeInTheDocument();
  });
});
