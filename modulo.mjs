import fs from "fs";
import url from "url";
import http, { STATUS_CODES } from 'http';
const webEndereco = 'https://www.siteonline.com/catalogo?produtos=cadeira';
const novoDados = new url.URL(webEndereco);
const port = 3000;

function connectServer(port) {

    const connect = http.createServer((req, callback) => {
        const urlInfo = new url.URL(req.url, `http://${req.headers.host}`);
        const nameTag = urlInfo.searchParams.get('name');

        if (!nameTag) {
            fs.readFile('page.html', (err, data) => {
                callback.writeHead(200, { 'Content-Type': 'text/html' });
                callback.write(data);
                return callback.end();
            })
        } else {
            fs.writeFile('save.txt', nameTag, (err, data) => {
                callback.writeHead(302, { location: '/' })
                return callback.end();
            })


        }

    });

    connect.listen(port, () => {
        console.log(`Servidor rodando na porta ${port}`);
    });
}
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


export default connectServer;
