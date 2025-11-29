import { IncomingMessage, ServerResponse } from "node:http";

export type Routehandler = (req: IncomingMessage, res: ServerResponse) => void;

export const routes: Map<string, Map<string, Routehandler>> = new Map()

function addRoutes(method: string, path: string, hander: Routehandler) {
    if (!routes.has(method)) {
        routes.set(method, new Map())
    }
    routes.get(method)!.set(path, hander)
}

export default addRoutes;