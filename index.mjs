import inquirer from "inquirer";
import EventEmitter from "events";
import fs from "fs";

const eventEmitter = new EventEmitter();
const fileSystem = fs;

eventEmitter.on('start', () => {
  inquirer.prompt([
    { name: "p1", message: "Number" },
    { name: "p2", message: "Number2" }
  ]).then(async (res) => {
    try {
      let p1 = res.p1;
      let p2 = res.p2;
      console.log('gravando dados -> ${p1} -> arq');
      fileSystem.writeFile('arq.txt', p1, (err) => {
        if (err) {
          console.error('Erro ao gravar arq.txt:', err);
        } else {
          console.log('Gravado com sucesso -> ${p1} -> arq');
        }
      });
      console.log('gravando dados -> ${p2} -> arq2');
      fileSystem.writeFile('arq2.txt', p2, (err) => {
        if (err) {
          console.error('Erro ao gravar arq2.txt:', err);
        } else {
          console.log('Gravado com sucesso -> ${p2} -> arq2');
        }
      });
    } catch (e) {
      console.error('Erro ao gravar arquivos:', e);
    }
  });
});

eventEmitter.emit('start');
