const http = require('http');

const server = http.createServer((req,res) => {
    res.end('reponse duhtrhrt serv !');
});

server.listen(process.env.PORT || 3000);