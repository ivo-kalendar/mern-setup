import express from 'express'
import router from '../routes/router.js'
import createProdServer from './prodServer.js'
import createDevServer from './devServer.js'
import client from './db.js'

const PORT = process.env.PORT || 7788
const PRODUCTION = process.env.NODE_ENV === 'production'
const app = express()

client.once("connectionCreated", async () => {
    console.log(' [server.js] Connected to MongoDB');
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json({ extended: false }));
    app.use("/api", router);
    
    if (PRODUCTION) {
        await createProdServer(app)
    } else {
        await createDevServer(app)
    }
    
    app.listen(PORT, () => {
        console.log(` [server.js] started at http://localhost:${PORT}`)
    })
});
