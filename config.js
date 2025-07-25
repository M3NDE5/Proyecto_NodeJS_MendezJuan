import { MongoClient } from 'mongodb';

export const uri = 'mongodb+srv://juanangelmendez9:0jEGcVIRvM0FyJ70@cluster0.2y4ktep.mongodb.net/'
export const dbNombre = 'MER_NOMINA_ACME_CORPORATE'
export const coleccionNombre = {
    empleados : 'empleados',
    contratos : 'contratos',
    nominas : 'nominas',
    novedades : 'novedades',
    conceptos : 'conceptos',
    prueba : 'prueba'
}
const cliente = new MongoClient(uri)