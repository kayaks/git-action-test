const http = require('http');

const server = http.createServer((request, response) => {
    response.sendDate = false;
    // response.statusCode = 599;
    // response.statusMessage = 'Crazy thing found';

    response.setHeader('Author', 'Nikita Baturin');
    response.setHeader('Content-Type', 'text/html');

    switch(request.url) {
        case '/': {
            response.end('<strong>Hello client</strong><ul><li><a href="/user">User page</a></li></ul>');
        }
        case '/user': {
            response.end('Hello Nikita<ul><li><a href="/">Home page</a></li></ul>');
        }
        default: response.end('Hello client');
    }
}) 

server.listen(9999, () => console.log('Server listening on 9999 port'));