import csv from 'csv-parser';
import { execArgv } from 'process';
import fs from 'fs';


export const resultados = [];

class Lectura{
    leer(archivo){
        fs.createReadStream(archivo)
        .pipe(csv())
        .on('data', (fila) =>{
            const nombre = fila.nombre
            const edad = fila.edad
            const id = fila.id

            resultados.push({nombre, edad, id});
        })
        .on('end', () => {
            console.log('La lectura ha sido completada...')
        })
    }
}

const archivo1 = new Lectura()
archivo1.leer('data.csv')