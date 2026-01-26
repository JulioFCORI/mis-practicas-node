
import chalk from 'chalk';
import saludar from './saludo.js';
import inquirer from 'inquirer';
/*
const saludar = require('./saludo');
console.log(chalk.bgGreen(saludar("inadaptado")));
*/

console.log(chalk.bgGreen(saludar("inadaptado")));

inquirer.prompt([
    {
        type: "input",
        name: "nombre",
        message: "¿Como te llamas?"
    },
    {
        type: "list",
        name: "color",
        message: "¿Cuál es tu color favorito?",
        choice: ["Rojo","Azul","Violeta"]
    }
]).then(respuestas => {
    console.log(saludar(respuesta.nombre));
    console.log(`Tu color favorito es ${respuesta.color}`)
})