const sum = (a, b) => a + b;
const sub = (a, b) => a - b;
const div = (a, b) => ((b === 0) ? 'nao é possivel divisao por zero' : a / b);
const mult = (a, b) => a * b;

export {
  sum, sub, div, mult,
};
