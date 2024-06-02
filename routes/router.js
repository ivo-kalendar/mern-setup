import express from 'express'
const router = express.Router();

router.get('/ping', (req, res) => {
    res.status(401).json({ msg: 'Нема Токен' })
})

router.get('/test', (req, res) => {
    res.status(200).json({ msg: 'Test Server Success!' })
})

export default router