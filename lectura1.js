import fs from 'fs'




export const registros = []
export class Lectura{
    leer(archivo){
        const data = fs.readFileSync(archivo, 'utf-8')
        const lines = data.replace(/\r/g, '').trim().split('\n')
        const headers = lines[0].split(',')
        for (let i = 1; i < lines.length; i++) {
            const valores = lines[i].split(',')
            const obj = {}
        
            headers.forEach((header, index) => {
                obj[header] = valores[index]
            })
        
            registros.push(obj)
        }
    }
}
