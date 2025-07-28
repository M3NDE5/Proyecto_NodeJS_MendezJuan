import fs from 'fs'
import { ObjectId } from 'mongodb'




export const registrosEmpleados = []


function setearValor(obj, path, value) {
    const llave = path.split('.')
    let current = obj

    llave.forEach((key, index) => {
        if (index === llave.length - 1) {
            current[key] = value
        } else {
            if (!current[key]) current[key] = {}
            current = current[key]
        }
    })
}

export class Lectura {
    leer(archivo) {
        const data = fs.readFileSync(archivo, 'utf-8')
        const lines = data.replace(/\r/g, '').trim().split('\n')
        const headers = lines[0].split(',')

        for (let i = 1; i < lines.length; i++) {
            const valores = lines[i].split(',')
            const obj = {}

            headers.forEach((header, index) => {
                if (header === '_id') {
                    obj[header] = new ObjectId(valores[index])
                } else {
                    setearValor(obj, header, parseValue(valores[index]))
                }
            })

            registrosEmpleados.push(obj)
        }
    }
}


function parseValue(value) {
    if (value === 'true') return true
    if (value === 'false') return false
    return value 
}


