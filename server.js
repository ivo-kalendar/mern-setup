import express from 'express'
import router from './routes/router.js'
import createProdServer from './config/prodServer.js'
import createDevServer from './config/devServer.js'

const PORT = process.env.PORT || 7788
const PRODUCTION = process.env.NODE_ENV === 'production'
const app = express()

app.use(express.json({ extended: false }));
app.use("/api", router);

if (PRODUCTION) {
    await createProdServer(app)
} else {
    await createDevServer(app)
}

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`)
})