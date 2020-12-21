export function sum(numberArray: number[]): number {
  const sum = numberArray.reduce((sum, num) => sum + (num || 0), 0);

  return sum;
}
