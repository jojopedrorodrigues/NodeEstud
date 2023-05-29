import fs from "fs";
import http from 'http';

const port = 3000;

async function writeResponseServer(port) {
    try {
        let x = 10;
        x = '${port}';
        fs.writeFile('arqddd.txt', 'Porta rodando = ' + String(port), (error) => {
            if (error) {
                console.log(error);
            }
        });
    }
    catch (e) {
        console.error(e)
    }
}
function connectServer(port) {
    const server = http.createServer((requisition, response) => {
        response.write('Oi Http server');
        response.end();
    });

    server.listen(port,
        function () {
            console.log('servidor rodando ' + port),
                writeResponseServer(port);
        }
    );

}


export default connectServer;