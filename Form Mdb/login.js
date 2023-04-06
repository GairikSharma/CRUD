const express = require('express')
const path = require('path')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const schemaData = require('./schema')

mongoose.connect('mongodb://localhost/SignUp', (err) => {
    if (!err) {
        console.log('Database Connected');
    }
    else {
        console.log('Error:' + err);
    }
})

app.use(express.json())

app.use(cors())

app.post('/login', cors(), async (req, res, next) => {

    try {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4000');

        const name = req.body.name
        const password = req.body.password
        // console.log(name);
        // console.log(password);
        const x = await schemaData.findOne({ name: req.body.name })
        
        if (x) {
            console.log('Login Successful');
        } else {
            console.log('Invalid login');
        }
        
        // console.log(x);
    } catch (error) {
        res.status(400).send('Invalid user info')
    }
})

app.listen(4000, (err) => {
    if (!err) {
        console.log('Server Connected');
    } else {
        console.log('Error:' + err);
    }
})