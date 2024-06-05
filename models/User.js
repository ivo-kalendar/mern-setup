import { ObjectId } from 'mongodb';
import client from '../server/db.js'
const users = client.db().collection('users')

export default class User {
    constructor(data) { this.data = data; }

    #getId() {
        return { _id: ObjectId.createFromHexString(this.data.id) }
    }

    getById() {
        const options = { projection: { password: 0, token: 0 } };
        return users.findOne(this.#getId(), options);
    }

    getNameById() {
        const options = { projection: { name: 1, surname: 1, username: 1 } };
        return users.findOne(this.#getId(), options);
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

    update() {}

    delete() {}
}

