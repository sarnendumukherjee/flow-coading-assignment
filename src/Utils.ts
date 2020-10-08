import { FXObject, StockObject } from "./Service";

export const updateFXList = (list: [FXObject] | [], newData: FXObject) => {
  const slicedList = list.filter(
    (item) => !(newData.from === item.from && newData.to === item.to)
  );
  slicedList.push(newData);
  return [...slicedList];
};

export const updateStockList = (
  list: [StockObject] | [],
  newData: StockObject
) => {
  const newList = [...list];
  const index = newList.findIndex((item) => item.id === newData.id);
  if (index === -1) {
    newList.push(newData);
  } else {
    newList[index] = newData;
  }
  return newList;
};

export const getStocksWithViewCurrency = (
  stocks: StockObject[],
  fxData: FXObject[],
  viewCurrency: string
) => {
  const stockWithViewCurrency = stocks.map((stock) => ({
    ...stock,
    viewPrice: getViewPrice(stock.price, stock.currency, viewCurrency, fxData),
  }));
  return stockWithViewCurrency;
};

export const getViewPrice = (
  currency: number,
  from: string,
  to: string,
  fxData: FXObject[]
) => {
  const fx = fxData.find(
    (fx) =>
      (fx.to === to && fx.from === from) || (fx.from === to && fx.to === from)
  );
  if (!fx) {
    return null;
  } else if (fx.to === to) {
    return (currency * fx.rate).toFixed(2);
  } else {
    return (currency * fx.reverseRate).toFixed(2);
  }
};
