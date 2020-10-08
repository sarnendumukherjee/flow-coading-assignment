/**
 * Rounds a number to a certain precision.
 */
const toPrecision = (number: number, precision: number): number => {
  return Number(number.toFixed(precision));
};

export default toPrecision;
