import Currency from './Currency';

interface FXObject {
  from: Currency;
  to: Currency;
  rate: number;
  reverseRate: number;
}

export default FXObject;
