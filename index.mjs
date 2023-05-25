import chalk from 'chalk';
import diminuir from './modulo.mjs';
import inquirer from 'inquirer'

inquirer.prompt(
    [
        { name: 'p1', message: 'Qual é a nota 01? ' },
        { name: 'p2', message: 'Qual é a nota 02? ' }
    ]
).then(
    (resposta) => console.log(resposta)
).catch((err) =>
    console.log(err)
);


