import express from 'express'
const router = express.Router();

import auth from '../middlewares/auth.js';
import { 
    createUser,
    getAllUsers, 
    getUser, 
    getUserName 
} from '../controllers/userController.js';

router.post('/user', createUser);
router.get('/user/:id', auth, getUser);
router.get('/username/:id', auth, getUserName);
router.get('/allusers', auth, getAllUsers);




// router.get('/ping', (req, res) => {
//     res.status(401).json({ msg: 'Нема Токен' })
// })

// router.get('/test', async (req, res) => {

//     const all = await users.find({}).toArray()
//     res.status(200).json(all)
// })

// router.post('/login', async (req, res) => {
//     const user = await users.insertOne(doc)
//     res.status(200).json({ msg: 'Login Success!', user })
// })

export default router