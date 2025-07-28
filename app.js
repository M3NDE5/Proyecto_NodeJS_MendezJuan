import rl from './readline.js'
import {insertar, buscarEmpleado,modificarUsuario, eliminarUsuarios} from './empleados.js'




export function showMenu(){
    console.log('menu')
    console.log('1. INSERTAR DATA')
    console.log('2. BUSCAR')
    console.log('3. ACTUALIZAR')
    console.log('4. ELIMINAR')
    console.log('5. salir\n')
    rl.question('Seleciona una opcion: ', opt => {
        switch(opt){
            case '1':
                console.log('1. INSERTAR EMPLEADOS\n')
                rl.question('Ingrese una de las opciones: ', opc => {
                    switch(opc){
                        case '1':
                            insertar()
                    }   
                })
                break;
            case '2':
                console.log('1. BUSCAR EMPLEADO\n')
                buscarEmpleado()
                break;
            case '3':
                console.log('1. ACTUALIZAR EMPLEADO')
                modificarUsuario()
                break;
            case '4':
                console.log('1. ELIMINAR USUARIOS')
                eliminarUsuarios()
                break;
            case '5':
                console.log('programa terminado.....')
                rl.close();
                break;
            default:
                console.log('Opcion Invalida. ')
                showMenu();
        }
    })
}

showMenu()