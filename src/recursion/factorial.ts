// 5! = 5 * 4 * 3 * 2 * 1 = 120
export const factorial = (n: number): number => {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
};
