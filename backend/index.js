const express = require('express')
const mongoose = require('mongoose')
const usersRouter = require('./routers/users.router')
const postsRouter = require('./routers/posts.router')
const cors = require('cors')
const path = require('path')

require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.DB_PORT;
const server = process.env.DB_NAME;
app.use('/users', usersRouter)
app.use('/posts', postsRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    mongoose
        .connect(server)
        .then(() => {
            console.log(`Connected to DB and listening on port ${port}`)
        })
        .catch((err) => console.log(err))
})
