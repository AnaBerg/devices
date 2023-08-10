import express from "express";
import bodyParser from "body-parser";
import * as dotenv from "dotenv";

import router from "./router";

dotenv.config();

const server = express();

server.use(bodyParser.json());
server.use(router);

export default server;
