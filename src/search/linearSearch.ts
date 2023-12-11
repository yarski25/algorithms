export function linearSearch(array: Array<any>, item: any) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) return i;
  }
  return null;
}
