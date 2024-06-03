import express from 'express'
const router = express.Router();
import client from '../config/db.js'

router.get('/ping', (req, res) => {
    res.status(401).json({ msg: 'Нема Токен' })
})

router.get('/test', async (req, res) => {
    const users = client.db().collection('users')

    const all = await users.find({}).toArray()
    res.status(200).json(all)
})

router.post('/login', async (req, res) => {
    const username = "Stanko" 
    const password = 123 
    const users = client.db().collection('users')

    const user = await users.insertOne({ username, password })
    res.status(200).json({ msg: 'Login Success!', user })
})

export default router