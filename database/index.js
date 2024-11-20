const express = require('express')
const pool = require('./connect')
const user = require('./user')

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.post('/registration', async (req, res) => {
    const login = req.body.login
    const password = req.body.password
    user.registration(pool, login, password)
})

app.post('/login', async (req, res) => {
    const login = req.body.login
    const password = req.body.password
    const result = await user.login(pool, login, password)
    res.json({'result_database': result})
})

const PORT = 3002

app.listen(PORT, ()=>{
    console.log(`Server started: http://localhost:${PORT}`)
})