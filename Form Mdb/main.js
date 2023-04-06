const express = require('express')
const app = express();
const path = require('path')
const mongoose = require('mongoose')
const schemaData = require('./schema')
mongoose.connect('mongodb://localhost/SignUp', (err) => {
    if (!err) {
        console.log('Database Connected');
    } else {
        console.log('Error:' + err);
    }
})
const cors = require('cors')
app.use(cors())
app.use(express.json())

app.get('/', async (req, res) => {
    try {
        res.send('Hello World')
    } catch (error) {
        console.log(error);
    }
})

// app.post('/post_name', cors(), async (req, res, next) => {
//     try {
//         res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4000');
//         let { name } = req.body
//         console.log(name);
//         res.send('Post request')

//     } catch (error) {
//         console.log(error);
//     }
// })

app.post('/post_name', cors(), async (req, res, next) => {
    try {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4000');
        const detail = new schemaData ({
        name : req.body.name,
        email : req.body.email,
        password : req.body.password
        })
        const x = await detail.save()
        res.json(x)



        // Printing the data in console


        // let {name} = req.body
        // let {email} = req.body
        // let {password} = req.body


        // console.log(name);
        // console.log(email);
        // console.log(password);

        // res.send('Post request')

    } catch (error) {
        console.log(error);
    }
})

app.listen(4000, (err) => {
    if (!err) {
        console.log('Server connected');
    }
    else {
        console.log('Error:' + err);
    }
})

