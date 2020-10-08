import { Dispatch } from "react";
import { actionType, Action } from "./Reducer";

export interface FXObject {
  from: string; // The source currency code
  to: string; // The target currency code
  rate: number; // The exchange rate
  reverseRate: number; // The reverse exchange rate
}

export interface StockObject {
  id: string; // The exchange identifier for the stock
  name: string; // The full name of the company
  currency: string; // The currency of the stock price
  price: number; // The stock price
}

let _dispatch: Dispatch<Action>;
// Listen to the FX data stream
const fx = new WebSocket("ws://localhost:8001");
// Listen to the stocks data stream
const stocks = new WebSocket("ws://localhost:8002");

const handleFxChanges = (event: MessageEvent) => {
  const currency = JSON.parse(event.data);
  _dispatch({ type: actionType.fxChange, payload: currency });
};

const handleStocksChanges = (event: MessageEvent) => {
  const stock = JSON.parse(event.data);
  _dispatch({ type: actionType.stockChange, payload: stock });
};

export const setupSockets = (dispatch: Dispatch<Action>) => {
  _dispatch = dispatch;
  fx.addEventListener("message", handleFxChanges);
  stocks.addEventListener("message", handleStocksChanges);
};

export const cleanupSockets = () => {
  fx.removeEventListener("message", handleFxChanges);
  stocks.removeEventListener("message", handleStocksChanges);
};
