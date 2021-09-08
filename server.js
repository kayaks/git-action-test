const http = require('http');
const hasParams = require('./utils/hasParams');

const serverOrigin = 'http://localhost:3000/'

const PORT = process.env.PORT || 3000;

const server = http.createServer((request, response) => {

    response.setHeader('Content-Type', 'text/html')

    switch(true) {
        case request.url === '/': {
            response.end('<strong>Hello client</strong><ul><li><a href="/user">User page</a></li></ul>');
            break;
        }
        case hasParams(request.url, '/user'): {
            const currentUrl = new URL(request.url, serverOrigin);
            const name = currentUrl.searchParams.get('name');

            response.end(`Hello <strong>${name}</strong>`);
            break;
        }
        case request.url === '/user': {
            response.end('Hello Nikita<ul><li><a href="/">Home page</a></li></ul>');
            break;
        }
        default: response.end('Hello client!');
    }
}) 

server.listen(PORT, () => console.log(`Server listening on ${PORT} port`));