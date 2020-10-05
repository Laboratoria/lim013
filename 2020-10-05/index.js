// const sum = (a, b) => a + b;

// const sum = (a, b) => {
//   throw new Error('OMG');
// };

const sum = (a, b) => {
  setTimeout(() => {
    throw new Error('OMG');
  }, 1000);
};

// const multiply = (a, b) => a * b;

// const multiply = (a, b) => {
//   throw new Error('Algo salió mal :-(');
// };

const multiply = (a, b) => {
  let result = 0;
  for (let i = 0; i < b; i += 1) {
    result = sum(result, a);
  }
  return result;
};

const square = a => multiply(a, a);

console.log(square(10));


