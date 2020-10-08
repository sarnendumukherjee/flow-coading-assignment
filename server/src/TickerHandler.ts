import { EventEmitter } from 'events';
import Ticker from './Ticker';

class TickerHandler<T> extends EventEmitter {
  private readonly tickers = new Set<Ticker<T>>();

  addTicker(ticker: Ticker<T>): void {
    this.tickers.add(ticker);
    ticker.on('update', (obj) => {
      this.emit('update', obj);
    });
  }

  stop(): void {
    for (const ticker of this.tickers) {
      ticker.stop();
    }
  }

  subscribe(handler: (next: T) => void) {
    // Subscribe to changes of all tickers
    this.on('update', handler);

    // Initially send all current ticker prices
    for (const ticker of this.tickers) {
      handler(ticker.toObject());
    }
  }
}

export default TickerHandler;
