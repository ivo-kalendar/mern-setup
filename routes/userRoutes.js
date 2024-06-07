import express from 'express'
const userRoutes = express.Router();

import auth from '../middlewares/auth.js';
import validateUser from '../middlewares/validateUser.js';

import { 
    createUser,
    editUser,
    getAllUsers, 
    getUser,
    removeUser, 
} from '../controllers/userController.js';
import addExtraUserData from '../middlewares/addExtraUserData.js';

userRoutes.get('/all', auth, getAllUsers);
userRoutes.get('/find/:id', auth, getUser);

userRoutes.post('/new', validateUser, addExtraUserData, createUser);
userRoutes.put('/find/:id', auth, validateUser, editUser);
userRoutes.delete('/find/:id', auth, removeUser);

export default userRoutes