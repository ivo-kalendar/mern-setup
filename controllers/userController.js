import User from "../models/User.js";

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
        console.log("1 ",req.params)
        const user = await new User(req.params).getNameById();
        console.log("2 ", req.params)

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
        const new_user = await new User(req.body).create();
        res.status(200).json(new_user);
    } catch (error) {
        res.status(401).json({ msg: 'User not creted' });
    }
}
