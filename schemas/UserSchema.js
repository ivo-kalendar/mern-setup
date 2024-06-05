import { ObjectId } from "mongodb";

export default class UserSchema {
    static Properties = {
        name: { type: 'string', required: true },
        email: { type: 'string', required: true },
        username: { type: 'string', required: true },
        password: { type: 'string', required: true },
        
        _id: { type: 'objectId', required: false },
        date: { type: 'date', required: false },
        admin_approved: { type: 'bool', required: false },
        owner_approved: { type: 'bool', required: false },
        phone: { type: 'string', required: false },
        token: { type: 'string', required: false },
        surname: { type: 'string', required: false },
    };

    constructor() {
        this.data = {};
        this.errors = [];
    }

    validate(data) {
        for (const [key, value] of Object.entries(UserSchema.Properties)) {
            if (value.required && !data.hasOwnProperty(key)) {
                this.errors.push(`Missing required field: ${key}`);
            } else if (data.hasOwnProperty(key) && typeof data[key] !== value.type) {
                this.errors.push(`Invalid type for field: ${key}, expected ${value.type}`);
            } else {
                this.data[key] = data[key];
            }
        }

        if (!!this.errors.length) return this
        this.#fillExtraData();
        return this
    }

    #fillExtraData() {
        const data = { 
            date: new Date(),
            _id: new ObjectId(),
            token: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
        };

        this.data = { 
            ...this.data, 
            ...data 
        };
    }
}