const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const url = 'mongodb+srv://mihir:qwerty123@cluster0.0kdev.mongodb.net/abc?retryWrites=true&w=majority'
var router = express.Router();

const eventModel = require('./event.model');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const mongooseconfig = require('./mongooseconfig.js');


app.post('/route1', (req, res) => {
    eventModel.createEvent(req.body).then((result)=>{
        res.status(201).send({status:"Event Sucessfully Saved"});
    })
});

app.post('/route2', (req, res) => {
    eventModel.getEventbyType(req.body).then((result)=>{
        res.status(200).send({eventData:result});
    })
});

const Port = process.env.PORT || 8000;

app.listen(Port, () => {
    console.log("Listening on Port:",Port)
})
