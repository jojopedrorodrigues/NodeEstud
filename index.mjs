import EventEmitter from "events";
import fs from "fs";
import http from 'http';
const port = 3000;
const server = http.createServer((requisition, response) => {
    response.write('Oi Http server');
    response.end();
});
server.listen(port, function () { console.log('servidor rodando ' + port) });
const eventEmitter = new EventEmitter();
const fileSystem = fs;

eventEmitter.on('start', () => {

});

eventEmitter.emit('start');