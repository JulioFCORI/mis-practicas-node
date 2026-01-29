
import chalk from 'chalk';
import saludar from './saludo.js';
import {input, select} from '@inquirer/prompts';
/*
const saludar = require('./saludo');
console.log(chalk.bgGreen(saludar("inadaptado")));
*/

console.log(chalk.bgGreen(saludar("inadaptado")));

const nombre = await input({
    message: '¿Como te llamas?'
});

const color = await select({
    message:'¿Cuál es tu color favorito?',
    choices: [
        {
            name: 'Rojo', value: 'Rojo'
        },
        {
            name: 'Azul', value: 'Azul'
        },
        {
            name: 'Violeta', value: 'Violeta'
        }
    ]
});
console.log(saludar(nombre));
console.log(`Tu color favorito es ${color}`)

/* Old code from inquirer
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
        choices: ["Rojo","Azul","Violeta"]
    }
]).then(respuestas => {
    console.log(saludar(respuestas.nombre));
    console.log(`Tu color favorito es ${respuestas.color}`)
})*/