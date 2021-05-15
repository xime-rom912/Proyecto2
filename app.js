const http = require('http');
const fs = require('fs');

function onRequest(request, response){
    var html = fs.createReadStream("./index.html");
    console.log("Simon carnal, recibi la peticion");
    response.writeHead(404, {"Content-Type": "text/html"});
    html.pipe(response)
}

const server = http.createServer(onRequest);

server.listen(8888);

console.log("Servidor funcionando en http://localhost:8888/");