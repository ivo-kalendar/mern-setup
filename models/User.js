import { ObjectId } from 'mongodb';
import client from '../server/db.js'
const users = client.db().collection('users')

export default class User {
    constructor(data) { this.data = data; }

    getById(id, options = { 
        // projection: { password: 0, token: 0 } // 0 exclude
        // projection: { name: 1, surname: 1, username: 1 } // 1 include
    }) {
        return users.findOne(this.getID(id), options);
    }

    getAll() {
        const query = {};
        const options = { projection: { password: 0, token: 0 } };
        return users
            .find(query, options)
            .sort({ /*poslednaPromena: -1, */ date: -1 })
            .toArray();
    }

    create() {
        return users.insertOne(this.data)
    }

    update(id, options = {}) {
        return users.updateOne(this.getID(id), { $set: this.data }, options);
    }

    delete(id) {
        return users.deleteOne(this.getID(id));
    }

    getID(id) {
        return { _id: ObjectId.createFromHexString(id) }
    }
}

