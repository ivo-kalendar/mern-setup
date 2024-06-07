import User from "../models/User.js";

export async function getUser(req, res) {
    try {
        const user = await new User().getById(req.params.id);
        if (!!user) res.status(200).json(user);
        else res.status(400).json({ msg: 'No such user' });
    } catch (error) {
        res.status(400).json({ msg: 'No such user' });
    }
};

export async function getAllUsers(req, res) {
    try {
        const users = await new User().getAll();
        if (!!users) res.status(200).json(users);
        else res.status(400).json({ msg: 'No users' });
    } catch (error) {
        res.status(400).json({ msg: 'No users' });
    }
}

export async function createUser(req, res) {
    try {
        const new_user = await new User(req.body).create();
        if (!!new_user) res.status(200).json(new_user);
        else res.status(400).json({ msg: 'User not creted' });
    } catch (error) {
        res.status(400).json({ msg: 'User not creted' });
    }
}

export async function editUser(req, res) {
    try {
        const changed = await new User(req.body).update(req.params.id);
        if (!!changed) res.status(200).json(changed);
        else res.status(400).json({ msg: 'User not changed!' });
    } catch (error) {
        res.status(400).json({ msg: 'User not changed', error });
    }
}

export async function removeUser(req, res) {
    try {
        const deleted = await new User().delete(req.params.id);
        if (!!deleted) res.status(200).json(deleted);
        else res.status(400).json({ msg: 'User not removed!' });
    } catch (error) {
        res.status(400).json({ msg: 'User not removed' });
    }
}
