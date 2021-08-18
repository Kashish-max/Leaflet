const mongoose = require("mongoose");
//const { eventData } = require("../Leaflet/src/components/jsonData/eventData");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    image: String,
    title: String,
    site: String,
    prize: String,
    start_date: String,
    End_date: String,
    time: String,
    status: String,
    type: String,
    provider: String,
    eligibility: String,
});



//module.exports = mongoose.module('event',event,'events');

const Event = mongoose.model('Events',eventSchema)


exports.createEvent = (eventD) => {
    const ev = new Event(eventD);
    return ev.save();
}


