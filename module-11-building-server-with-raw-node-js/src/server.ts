import http, { IncomingMessage, Server, ServerResponse } from 'http';
import config from './config';


const server: Server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
    console.log('Server is runnig');

    //  root route get method
    if (req.url === '/' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            message: 'Hello from Node.js server!',
            path: req.url,
        }));
    }

    //health route get method
    if (req.url === '/api' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            message: 'Health status ok',
            path: req.url,
        }));
    }

    if (req.url == '/api/users' && req.method == 'POST') {

        let body = '';

        //listen for data chunk
        req.on('data', (chunk) => {
            body += chunk.toString()
        });


        req.on('end', () => {
            try {
                const parseBody = JSON.parse(body);
                console.log(parseBody);
                console.log('catching current changes');
                res.end(JSON.stringify(parseBody))
            } catch (error: any) {
                console.log(error?.message);
            }
        })
    }

})


server.listen(config.port, () => {
    console.log(`Server is listening on port ${config.port}`);
});