/**
 * Returns a random float between two numbers.
 */
const randomFloat = (min: number, max: number): number => {
  return min + Math.random() * (max - min);
};

export default randomFloat;
