import Currency from './Currency';
import randomFloat from './randomFloat';
import sleepRandom from './sleepRandom';
import StockObject from './StockObject';
import Ticker from './Ticker';
import toPrecision from './toPrecision';

/**
 * Represents a stock ticking on an exchange.
 */
class Stock extends Ticker<StockObject> {
  readonly id: string;
  readonly name: string;
  readonly currency: Currency;

  private stopped: boolean = false;
  private price: number = 0;
  private readonly minPrice: number;
  private readonly maxPrice: number;

  constructor(id: string, name: string, currency: Currency, minPrice: number, maxPrice: number) {
    super();
    this.id = id;
    this.name = name;
    this.currency = currency;
    this.minPrice = minPrice;
    this.maxPrice = maxPrice;
    this.tick();
  }

  stop(): void {
    this.stopped = true;
  }

  toObject(): StockObject {
    return {
      id: this.id,
      name: this.name,
      currency: this.currency,
      price: this.price,
    };
  }

  private async tick(): Promise<void> {
    this.price = toPrecision(randomFloat(this.minPrice, this.maxPrice), 2);
    this.emit('update', this.toObject());
    await sleepRandom();
    if (!this.stopped) {
      await this.tick();
    }
  }
}

export default Stock;
