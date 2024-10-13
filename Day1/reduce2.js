const numbers = [1, 2, 3, 4,6];
const product = numbers.reduce(
  (accumulator, currentValue) => accumulator * currentValue,
  1
);
console.log(product); 
