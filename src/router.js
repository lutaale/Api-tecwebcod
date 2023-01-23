import { Router } from "express";
import NodemailerController from "./Controllers/NodemailerController";


const route = new Router();

route.post('/sendmail', NodemailerController.post)

export default route;