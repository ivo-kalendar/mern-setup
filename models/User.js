import { ObjectId } from 'mongodb';
import client from '../server/db.js'
const users = client.db().collection('users')

export default class User {
    constructor(data) {
        this.data = data;
        this.errors = [];
        console.log("User", this.data)
    }

    getById() {
        console.log(" Get By Id ", this.data.id)
        const query = { _id: ObjectId(this.data.id) };
        const options = { projection: { password: 0, token: 0 } };
        return users.findOne(query, options);
    }

    getNameById() {
        console.log(" Get NAme By Id ", this.data.id)
        const query = { _id: ObjectId(this.data.id) };
        const options = { projection: { name: 1, surname: 1, username: 1 } };
        return users.findOne(query, options);
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
        const user = {
            username: this.data.username ?? "test_user",
            date: new Date(),
            admin_approved: false,
            owner_approved: false,
            email: this.data.email ?? "pE5gj@example.com",
            phone: this.data.phone ?? "123456789",
            token: this.data.token ?? "123456789",
            name: this.data.name ?? "Виктор",
            surname: this.data.surname ?? "Календаров",
            password: this.data.password ?? "$2a$10$kcuim1YG5/.OwCX4H96GDOGI2NwfqwfNvrfA5V2N8V64iFDFIr4N2",
        }
        return users.insertOne(user)
    }

    update() {}

    delete() {}
}

