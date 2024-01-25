import express from "express";
import db from "./connection.js";
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

//parsing the middlewere
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static('public'));

import router from './server/routers/user.js';
 app.use('/',router);

app.listen(port, () => console.log(`server run on: http://localhost:${port}/`));