import { updateFXList, updateStockList } from "./Utils";
import { FXObject, StockObject } from "./Service";

export enum actionType {
  fxChange = "FX_CHANGE",
  stockChange = "STOCK_CHANGE",
}

export interface FxChangeAction {
  type: actionType.fxChange;
  payload: FXObject;
}

export interface StockChangeAction {
  type: actionType.stockChange;
  payload: StockObject;
}

export type Action = FxChangeAction | StockChangeAction;

export interface AppState {
  fxData: [FXObject] | [];
  stocks: [StockObject] | [];
}

export const initialState: AppState = { fxData: [], stocks: [] };

export const reducer = (state: AppState, action: Action) => {
  switch (action.type) {
    case actionType.fxChange:
      const updatedFXList = updateFXList(state.fxData, action.payload);
      return { ...state, fxData: updatedFXList };
    case actionType.stockChange:
      const updatedStocks = updateStockList(state.stocks, action.payload);
      return { ...state, stocks: updatedStocks };
    default:
      throw new Error("No matched action type found!");
  }
};
