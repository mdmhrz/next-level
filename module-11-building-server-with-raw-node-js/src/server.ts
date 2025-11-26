import http, { IncomingMessage, Server, ServerResponse } from 'http';
import config from './config';

const server: Server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
    console.log('Server is runnig');

    if (req.url === '/' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            message: 'Hello from Node.js server!',
            path: req.url,
        }));
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            message: 'Route not found',
        }));
    }
})


server.listen(config.port, () => {
    console.log(`Server is listening on port ${config.port}`);
});