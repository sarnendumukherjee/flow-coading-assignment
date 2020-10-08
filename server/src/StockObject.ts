import Currency from './Currency';

interface StockObject {
  id: string;
  name: string;
  currency: Currency;
  price: number;
}

export default StockObject;
