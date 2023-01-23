
import express from "express";
import cors from 'cors'
import route from "./router";


class App {
    constructor() {
        this.server = express();

        this.middlewares()
        this.route()
    }
    middlewares() {
        //cors serve para definir limitações de uso da api criada
        this.server.use(cors({
            origin: '*'
        }));
        this.server.use(express.json());

    }
    route() {
        this.server.use(route);
    }
}
export default new App().server