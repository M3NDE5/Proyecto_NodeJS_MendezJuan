import rl from './readline.js';
import { db, conexion } from './db.js';
import { coleccionNombre } from './config.js';
import { registrosEmpleados, Lectura } from './lectura1.js';
import { showMenu } from './app.js';
import { Console } from 'console';



// INGRESAR EMPLEADOS
export async function insertar() {
    try {
        const collection = db.collection(coleccionNombre.empleados);
        const archivo = new Lectura()
        archivo.leer('empleados.csv')
        const x = await collection.insertMany(registrosEmpleados)
        console.log('Empleados cargados con exito')
        showMenu()
    } catch (err) {
        console.error('Error al ingresar el empleado:', err);
        showMenu()
    }
}



 //BUSCAR EMPLEADOS
 export async function buscarEmpleado() {
     try {
         const collection = db.collection(coleccionNombre.empleados)
         rl.question('Ingresa el número de ID a buscar: ', async (id) => {
             const items = await collection.find({ numeroId: id }).toArray()
             console.log('Empleado encontrado:');
             items.forEach(item => {
                 console.log(`- ID: ${item.numeroId}\n- Nombre: ${item.nombres}\n- Apellido: ${item.apellidos}\n- Telefono: ${item.telefono}\n- Email: ${item.email}\n- Genero: ${item.genero}\n- Ciudad: ${item.ciudad.nombre}\n- Direccion: ${item.direccion}\n- Activo: ${item.activo === true ? 'Si' : 'No'}`);
             })
             showMenu()
         })
     } catch (err) {
         console.error('Error al encontrar el empleado:', err);
     }
}


// MODIFICAR USUARIOS
export async function modificarUsuario() {
    try{
        const collection = db.collection(coleccionNombre.empleados)
         rl.question('Ingresa el ID del empleado que quieres modificar: ', async (id) => {
             const items = await collection.find({ numeroId: id }).toArray()
             console.log('Empleado encontrado:');
             items.forEach(item => {
                 console.log(`- ID: ${item.numeroId}\n- Nombre: ${item.nombres}\n- Apellido: ${item.apellidos}\n- Telefono: ${item.telefono}\n- Email: ${item.email}\n- Genero: ${item.genero}\n- Ciudad: ${item.ciudad.nombre}\n- Direccion: ${item.direccion}\n- Activo: ${item.activo === true ? 'Si' : 'No'}`);
             })
             rl.question('Que campo quieres Cambiar?: ',async(campo)=>{
                rl.question('Ingresa el nuevo valor de ese campo: ', async(nuevoValor) => {
                    try{
                        const update = {$set:{[campo]: nuevoValor}}
                        const resultado = await collection.updateOne({numeroId: id}, update)
                        console.log('Campo Actualizado con exito')
                        showMenu()
                    }catch(err){
                        console.log('Error al actualizar el empleado', err)
                        showMenu()
                    }
                }) 
             })
             
         })
    }catch(err){
        console.log('Error al actualizar el empleado...', err)
    }
}

// ELIMINAR USUARIO
export async function eliminarUsuarios() {
    const collection = db.collection(coleccionNombre.empleados)
        rl.question('Ingresa el ID del empleado que quieres eliiminar: ', async (id) => {
            const items = await collection.find({ numeroId: id }).toArray()
             console.log('Empleado a borrar:');
             items.forEach(item => {
                 console.log(`- ID: ${item.numeroId}\n- Nombre: ${item.nombres}\n- Activo: ${item.activo === true ? 'Si' : 'No'}`);
            })
            rl.question('Seguro que quieres eliminarlo?Y/N: ',async (x) =>{
                x = x.toUpperCase() 
                try{
                    if(x === 'Y'){
                        const eliminar = await collection.deleteOne({numeroId: id})
                        console.log('Empleado eliminado con exito....')
                    }else{
                        showMenu()
                    }
                }catch(err){
                    console.log('Error al tratar de eliminar empleado..', err)
                }
            })
        })
}

