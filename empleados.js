import rl from './readline.js';
import { db, conexion } from './db.js';
import { coleccionNombre } from './config.js';
import {registros} from './lectura1.js'
 

export async function insertar(){
    try {
        const collection = db.collection(coleccionNombre.prueba);
        const x = await collection.insertMany(registros)
            console.log('nombre agregado...')
            conexion.cerrar(); 


    }catch (err) {
        console.error('Error al ingresar el nombre:', err);
        rl.close();
        conexion.cerrar();
    }
}

export async function listarEmpleados() {
    try {
        const collection = db.collection(coleccionNombre.empleados);

        rl.question('Ingresa el número de ID a buscar: ', async (id) => {
            const items = await collection.find({ numeroId: id }).toArray();

            console.log('Lista de empleados:');
            items.forEach(item => {
                console.log(`ID: ${item.numeroId} - Nombre: ${item.nombres}`);
            });

            rl.close();
            conexion.cerrar(); 
        });

    } catch (err) {
        console.error('Error al listar empleados:', err);
        rl.close();
        conexion.cerrar();
    }
}