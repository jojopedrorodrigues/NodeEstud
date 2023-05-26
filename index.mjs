import inquirer from "inquirer";
import EventEmitter from "events";
const eventEmitter = new EventEmitter();

eventEmitter.on('start', () => {
    inquirer.prompt([{ name: "p1", message: "Number" }]).then((res) => console.log(res.p1)).catch((err) => console.log(err));
    console.log('start programa');
});
eventEmitter.emit('start');
