const http = require('http');

const server = http.createServer((req, res) => {
    res.sendDate = false;
    res.statusCode = 599;
    res.statusMessage = 'Crazy thing found';


    res.setHeader('Author', 'Nikita Baturin');
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello client');
}) 

server.listen(9999, () => console.log('Server listening on 9999 port'));