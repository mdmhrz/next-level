import http, { IncomingMessage, Server, ServerResponse } from 'http';
import config from './config';
import { Routehandler, routes } from './helpers/routeHandler';
import './routes'
import findDynamicRoute from './helpers/findDynamicRoute';



const server: Server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
    console.log('Server is runnig');

    const method = req.method?.toUpperCase() || "";
    const path = req.url || '';
    const methodMap = routes.get(method)
    const handler: Routehandler | undefined = methodMap?.get(path)

    if (handler) {
        handler(req, res)
    } else if (findDynamicRoute(method, path)) {
        const match = findDynamicRoute(method, path);
        (req as any).params = match?.params;

        match?.handler(req, res)
    }
    else {
        res.writeHead(404, {
            "Content-Type": "application/json"
        })
        res.end(JSON.stringify({
            success: false,
            message: "Route not found",
            path
        }))
    }


})


server.listen(config.port, () => {
    console.log(`Server is listening on port ${config.port}`);
});