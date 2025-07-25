import rl from './readline.js'
import {listarEmpleados, insertar} from './empleados.js'




function showMenu(){
    console.log('menu')
    console.log('crear')
    console.log('listar')
    console.log('actualizar')
    console.log('eliminar')
    console.log('salir\n')
    rl.question('Seleciona una opcion: ', opt => {
        switch(opt){
            case '1':
                console.log('caso1')
                insertar()
                showMenu();
                break;
            case '2':
                console.log('Listar Usuarios')
                listarEmpleados()
                showMenu()
                break;
            case '3':
                console.log('caso3')
                showMenu();
                break;
            case '4':
                console.log('caso4')
                showMenu();
                break;
            case '5':
                rl.close();
                break;
            default:
                console.log('Opcion Invalida. ')
                showMenu();
        }
    })
}

showMenu()