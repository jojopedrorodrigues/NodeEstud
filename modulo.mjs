import fs from "fs";
import url from "url";
import http, { STATUS_CODES } from 'http';
const webEndereco = 'https://www.siteonline.com/catalogo?produtos=cadeira';
const convertUrl = new url.URL(webEndereco);
const port = 3000;
console.log(convertUrl.hostname);
console.log(convertUrl.port);
console.log(convertUrl.pathname);
console.log(convertUrl.search);
console.log(convertUrl.searchParams.get('produtos'));
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
        response.setHeader('Content-Type' , 'text/html' );
        response.end('<h1>Server online</h1>');
    });

    server.listen(port,
        function () {
            console.log('servidor rodando ' + port),
                writeResponseServer(port);
        }
    );

}


export default connectServer;