const express = require('express')
const bcrypt = require('bcrypt')
const axios = require('axios')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser');
const cors = require('cors')

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cookieParser('secret key'));
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))

let response_data = {
    "Service": "Login",
    "Version": "1.0.0",
    "Name": "Authorization",
    "Data": null
}

function generate_token(id) {
    const key = 'sAp is a cool gaming application'
    const token = jwt.sign({userId: id}, key, {expiresIn: '1h'})
    return token
}

app.get('/reg', async (req, res) => {
    try {
        const login = req.body.login
        const password = req.body.password
        let salt = bcrypt.genSalt(10)
        let hash_psw = bcrypt.hash(password, salt)
    }
    catch (err) {
        res.status(500).json({error: "Ошибка регистрации. Попробуйте позже"})
    }
})
app.post('/regContinue', async (req, res) => {
    try {
        const nikname = req.body.nik
    }
    catch (err) {
        res.status(500).json({error: "Ошибка регистрации. Попробуйте позже"})
    }
})
app.post('/log', async (req, res) => {    
    try {
        const login = req.body.login
        const password = req.body.password
        let jwt
        const response = await axios.post('http://localhost:3002/login', {
            'login': login,
            'password': password
        })
        let result = response.data.result_database
        const res_json = {
            "right_login": result.availability_data,
            "right_psw": null
        }
        if(res_json.right_login) {
            res_json.right_psw = await bcrypt.compare(password, result.data.password)
        }
        if(res_json.right_psw) {
            jwt = generate_token(result.data.id)
            res.cookie('jwt', jwt)
        }
        res.json(res_json)
    }
    catch (err) {
        res.status(500).json({error: "Ошибка"})
    }
})
app.post('/log/check-token',  (req, res) => {    
    const token = req.headers['authorization']
    console.log(token)
})
app.post('/authentication', async (req, res) => {    
    
})
const PORT = 3001

app.listen(PORT, ()=>{
    console.log(`Server started: http://localhost:${PORT}`)
})