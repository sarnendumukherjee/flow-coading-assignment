import { EventEmitter } from "events";

/**
 * Represents an instrument ticking on an exchange.
 */
abstract class Ticker<T> extends EventEmitter {
  /**
   * Stops the ticker.
   */
  abstract stop(): void;

  /**
   * Returns a serialization of the ticker's value.
   */
  abstract toObject(): T;
}

export default Ticker;
