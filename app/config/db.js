//Requerimos dotenv para acceder a las variables de entorno
import dotenv from 'dotenv';
// const dotenv = require("dotenv");
dotenv.config();
//Requerimos mongoose para comunicarnos con la bd
import mongoose from 'mongoose';
//guardamos la url de Mongo en una variable
const mongoDb = process.env.MONGO_DB;
//Configuramos la función connect 
const connect = async () => {
  try {
    const db = await mongoose.connect(mongoDb, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const { name, host } = db.connection;
    console.log(`Connected with db: ${name}, in host: ${host}`);
  } catch (error) {
    console.log("Error to connect with BD", error);
  }
};
//exportamos la funcion connect
export { connect };
// module.exports = { connect };