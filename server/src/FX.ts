import Currency from './Currency';
import randomFloat from './randomFloat';
import sleepRandom from './sleepRandom';
import FXObject from './FXObject';
import Ticker from './Ticker';
import toPrecision from './toPrecision';

/**
 * Represents a foreign currency exchange ticking on an exchange.
 */
class FX extends Ticker<FXObject> {
  readonly from: Currency;
  readonly to: Currency;

  private stopped: boolean = false;
  private rate: number = 0;
  private reverseRate: number = 0;
  private readonly minRate: number;
  private readonly maxRate: number;

  constructor(from: Currency, to: Currency, minRate: number, maxRate: number) {
    super();
    this.from = from;
    this.to = to;
    this.minRate = minRate;
    this.maxRate = maxRate;
    this.tick();
  }

  stop(): void {
    this.stopped = true;
  }

  toObject(): FXObject {
    return {
      from: this.from,
      to: this.to,
      rate: this.rate,
      reverseRate: this.reverseRate,
    };
  }

  private async tick(): Promise<void> {
    this.rate = toPrecision(randomFloat(this.minRate, this.maxRate), 5);
    this.reverseRate = toPrecision(1 / this.rate + randomFloat(-0.05, +0.05), 5);
    this.emit('update', this.toObject());
    await sleepRandom();
    if (!this.stopped) {
      await this.tick();
    }
  }
}

export default FX;
