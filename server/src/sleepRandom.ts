import randomFloat from './randomFloat';

/**
 * Sleeps for a random duration between 100 ms and 5 sec.
 */
const sleepRandom = (): Promise<void> => {
  const millis = Math.floor(randomFloat(100, 5000));
  return new Promise<void>((resolve) => setTimeout(resolve, millis));
};

export default sleepRandom;
