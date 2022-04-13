//Imports
import express from 'express';
//Importamos la conexion a la db
import { connect } from './app/config/db.js';
// const {connect} = require("./app/config/database");
const PORT = 3000;
const server = express();
//Ejecutamos la funcion que conecta con la db
connect();

const app = express();

//Config app

app.listen(PORT, () => {
    console.log(`Node server listening on port http://localhost:${PORT}`);
  });