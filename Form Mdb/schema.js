const mongoose = require('mongoose')
const schemaData = new mongoose.Schema({
    name: {
        type : String,
        lowercase : true,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password: {
        type : String,
        lowercase : true,
        required : true
    }
})
module.exports = mongoose.model('schema', schemaData)