export function sumar(a, b) {
  return a + b;
}

const resta = (a, b) => {
  return a - b;
};
const multiplicacion = (a, b) => {
  return a * b;
};
const division = (a, b) => {
  return b !== 0 ? a / b : "Error: no se puede dividir entre 0";
};

export { resta, multiplicacion, division };
