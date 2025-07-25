import fs from 'fs'

const data = fs.readFileSync('data.csv', 'utf-8')


const lines = data.trim().split('\n')


const headers = lines[0].split(',')


export const registros = []


for (let i = 1; i < lines.length; i++) {
    const valores = lines[i].split(',')
    const obj = {}

    headers.forEach((header, index) => {
        obj[header] = valores[index]
    })

    registros.push(obj)
}

console.log(registros)