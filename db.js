
import { Conexion } from './conexionMongo.js';
import { uri, dbNombre } from './config.js';

const conexion = new Conexion(uri, dbNombre);

const db = await conexion.conectar(); 

export { db, conexion }; 