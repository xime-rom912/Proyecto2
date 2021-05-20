const http = require('http');
const fs = require('fs');

http.createServer((request, response) =>{
 const file = request.url == '/'? './WWW/index.html' : `./WWW${request.url}`;

  if(request.url == '/enviar'){
    let data = [];
    request.on("data", value => {
        data.push(value);
    }).on("end", () => {
        let params = Buffer.concat(data).toString();
        params += '\n';

        fs.appendFile("./WWW/datos/datos.txt", params, (error) => {
            if (error){
                response.writeHead(500,{"Content-Type":"text/plain"});
                response.write("Error en el servidor");
                response.end();
            }
        });
    });
    
      fs.readFile("./WWW/formulario.html", (error, html) => {
          if (error){
              response.writeHead(500,{"Content-Type":"text/plain"});
              response.write("Error en el servidor");
              response.end();
          }
          response.writeHead(200, {"Content-Type":"text/html"});
          response.end(html);
      });
      console.log("Datos enviados");
 }else{
  fs.readFile(file, (err,data)=>{
  if(err){
    response.writeHead(404, {"Content-Type":"text/plain"});
    response.write("Not Found");
    response.end();
  }else{
    const extension = file.split('.').pop();
    switch(extension){
    case 'txt':
      response.writeHead(200, {"Content-Type":"text/plain"});
    break; 
    case 'html':  
      response.writeHead(200, {"Content-Type":"text/html"});
    break;
    case 'jpeg':  
      response.writeHead(200, {"Content-Type":"image/jpeg"});
      break;
    case 'css':  
      response.writeHead(200, {"Content-Type":"text/css"});
      break;
    case 'js':  
      response.writeHead(200, {"Content-Type":"text/javascript"});
      break;
    }
    response.write(data);
    response.end();
  }
  });
 } 
}).listen(8888);
console.log("Servidor funcionando en http://localhost:8888/");

