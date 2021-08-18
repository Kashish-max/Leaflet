const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const url = 'mongodb+srv://mihir:qwerty123@cluster0.0kdev.mongodb.net/abc?retryWrites=true&w=majority'
var router = express.Router();

const eventModel = require('./event.model');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const mongooseconfig = require('./mongooseconfig.js');



app.post('/abc', (req, res) => {

    eventModel.createEvent(req.body).then((result)=>{
        console.log("easy");
        res.status(201).send({status:"Event Sucessfully Saved"});
    })


});

const Port = process.env.PORT || 3001;

app.listen(Port, () => {
    console.log("Listening on Port:",Port)
})