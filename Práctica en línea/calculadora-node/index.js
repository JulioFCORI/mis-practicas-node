import { sumar, resta, multiplicacion, division } from "./operaciones.js";
import inquirer from "inquirer";

const { operaciones } = await inquirer.prompt([
  {
    type: "select",
    name: "operaciones",
    message: "¿Que operación quieres realizar?",
    choices: [
      {
        name: "Sumar",
        value: "sumar",
      },
      {
        name: "Restar",
        value: "restar",
      },
      {
        name: "Multiplicar",
        value: "multiplicar",
      },
      {
        name: "División",
        value: "división",
      },
    ],
  },
]);

const { a, b } = await inquirer.prompt([
  {
    type: "input",
    name: "a",
    message: "Dame el primer número",
  },
  {
    type: "input",
    name: "b",
    message: "Dame el segundo número",
  },
]);
console.log(operaciones)
let resultado = 0;
const valor1 = parseFloat(a);
const valor2 = parseFloat(b);

switch (operaciones) {
  case "sumar":
    resultado = sumar(valor1, valor2);
    break;
  case "restar":
    resultado = resta(valor1, valor2);
    break;
  case "multiplicar":
    resultado = multiplicacion(valor1, valor2);
    break;
  case "división":
    resultado = division(valor1, valor2);
    break;
  default:
    null;
    break;
}
console.log(resultado);
/*console.log("Suma",sumar(5,3));
console.log("Resta",resta(8,2));
console.log("Multiplicación",multiplicacion(4,6));
console.log("División",division(10,2));*/
