const dotenv = require('dotenv');
const path = require('path');
const envPath = path.resolve(__dirname, './env/localhost.env')
dotenv.config({path: envPath});
const express = require('express');
const app = express();
const routes = require('./routes');
const DOOR = process.env.DOOR;

app.use('/index', ...routes);

app.listen(DOOR, () => {
    console.log(`Running in door ${DOOR}`);
})