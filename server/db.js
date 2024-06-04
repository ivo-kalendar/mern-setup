import 'dotenv/config';
import { MongoClient } from "mongodb"

/** @type {import('mongodb').MongoClient} */
const client = new MongoClient(process.env.CONNECTION_STRING)

/** Asynchronous function to establish a connection to the database. */
async function makeConnection() {
    if (client.is_connected) {
        console.log(' [db.js] Already connected');
        return
    }
    
    try {
        await client.connect()
        client.is_connected = true
        console.log(' [db.js] Connected successfully to server');
    } catch (error) {
        client.is_connected = false
        console.error(' [db.js] connection error: ', error);
        client.close(true)
        process.exit(1)
    }
}

makeConnection()
export default client