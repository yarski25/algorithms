// 1, 1, 2, 3, 5, 8, 13
export const fibonachi = (n: number): number => {
  if (n === 1 || n === 2) {
    return 1;
  }
  return fibonachi(n - 2) + fibonachi(n - 1);
};
