import EventEmitter from "events";
import connectServer from "./modulo.mjs";

const port = 3000;



const eventEmitter = new EventEmitter();


eventEmitter.on('start', () => {
    connectServer(port);
});

eventEmitter.emit('start');