export function cashFunction(fn: Function) {
  const cash: any = {};
  return function (n: any) {
    if (cash[n]) {
      console.log("Given from cash", cash[n]);
      return cash[n];
    }
    let result = fn(n);
    console.log("Calculated by function =", result);
    cash[n] = result;
    return result;
  };
}

export function factorial2(n: number) {
  let result = 1;
  while (n != 1) {
    result *= n;
    n -= 1;
  }
  return result;
}
