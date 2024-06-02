import express from 'express'
import router from './server/router.js'
import useProduction from './server/production.js'
import useDevelopment from './server/development.js'

const PORT = process.env.PORT || 7788
const PRODUCTION = process.env.NODE_ENV === 'production'
const app = express()

app.use(express.json({ extended: false }));
app.use("/api", router);

if (PRODUCTION) {
    await useProduction(app)
} else {
    await useDevelopment(app)
}

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`)
})