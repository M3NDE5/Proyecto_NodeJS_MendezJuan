import rl from './readline.js';
import { db, conexion } from './db.js';
import { coleccionNombre } from './config.js';
import { registros, Lectura } from './lectura1.js';
import { showMenu } from './app.js';



// INGRESAR EMPLEADOS
export async function insertar() {
    try {
        const collection = db.collection(coleccionNombre.prueba);
        const archivo = new Lectura()
        archivo.leer('data.csv')
        const x = await collection.insertMany(registros)
        console.log('Documento cargado con exito')
        showMenu()
    } catch (err) {
        console.error('Error al ingresar el nombre:', err);
        showMenu()
    }
}



// LISTAR EMPLEADOS
// export async function listarEmpleados() {
//     try {
//         const collection = db.collection(coleccionNombre.empleados);

//         rl.question('Ingresa el número de ID a buscar: ', async (id) => {
//             const items = await collection.find({ numeroId: id }).toArray();

//             console.log('Lista de empleados:');
//             items.forEach(item => {
//                 console.log(`ID: ${item.numeroId} - Nombre: ${item.nombres}`);
//             });

//             rl.close();
//             conexion.cerrar(); 
//         });

//     } catch (err) {
//         console.error('Error al listar empleados:', err);
//         rl.close();
//         conexion.cerrar();
//     }
// }



// export async function listarEmpleados() {
//     try {
//         const collection = db.collection(coleccionNombre.empleados);
        
//         rl.question('Ingresa el número de ID a buscar: ', async (id) => {
//             const items = await collection.find({ numeroId: id }).toArray();
//             let numero = null;
//             let nombre = null
//             console.log('Lista de empleados:');
//             items.forEach(item => {
//                 console.log(`ID: ${item.numeroId} - Nombre: ${item.nombres}`);
//                 numero = item.numeroId,
//                 nombre = item.nombres
//             });
//             const html = `<html lang="en">
//                                 <head>
//                                     <meta charset="UTF-8">
//                                     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//                                     <title>Document</title>
//                                 </head>
//                                 <body>
//                                     <p>EMPLEADO</p>    
//                                     <p>${numero}</p>
//                                     <p>${nombre}</p>
//                                 </body>
//                             </html>`
//             fs.writeFileSync('reporte.html', html)
//             rl.close();
//             conexion.cerrar();
//         });

//     } catch (err) {
//         console.error('Error al listar empleados:', err);
//         rl.close();
//         conexion.cerrar();
//     }
// }

// listarEmpleados()