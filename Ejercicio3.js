const array1 = [1, 2, 3, 4];

const initialValue = 0;
const sumaInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log("The sum is ",sumaInitial);


const array2 = [1, 2, 3, 4];
const initialValue2 = 1;
const productInitial2 = array2.reduce(
  (accumulator, currentValue) => accumulator * currentValue,
  initialValue2,
);

console.log("The product is ",productInitial2);