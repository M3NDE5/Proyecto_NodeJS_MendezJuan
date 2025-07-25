import { MongoClient, ObjectId } from "mongodb";

export class Conexion {
    constructor(uri, dbName) {
        this.uri = uri;
        this.dbName = dbName;
        this.client = new MongoClient(this.uri);
        this.db = null;
    }

    async conectar() {
        try {
            await this.client.connect();
            this.db = this.client.db(this.dbName);
            console.log('Se logro la conexion con la base de datos');
            return this.db;
        } catch (err) {
            console.error('Error al conectar con la base de datos:', err);
            throw err;
        }
    }

    cerrar() {
        this.client.close();
        console.log('Conexión cerrada');
    }
}






