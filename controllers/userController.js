import User from "../models/User.js";
import UserSchema from "../models/UserSchema.js";

export async function getUser(req, res) {
    try {
        const user = await new User(req.params).getById();
        res.status(200).json(user);
    } catch (error) {
        res.status(401).json({ msg: 'No such user' });
    }
};

export async function getUserName(req, res) {
    try {
        const user = await new User(req.params).getNameById();
        res.status(200).json(user);
    } catch (error) {
        res.status(401).json({ msg: 'No such user' });
    }
};

export async function getAllUsers(req, res) {
    try {
        const users = await new User().getAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(401).json({ msg: 'No users', error });
    }
}

export async function createUser(req, res) {
    try {
        const user = new UserSchema().validate(req.body);
        if (!!user.errors.length) {
            return res.status(401).json({ 
                msg: 'User not creted', 
                errors: user.errors 
            });
        }

        const new_user = await new User(user.data).create();
        res.status(200).json(new_user);
    } catch (error) {
        res.status(401).json({ msg: 'User not creted' });
    }
}
