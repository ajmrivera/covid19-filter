const mongoose = require("mongoose");

const ProvinceSchema = mongoose.Schema({
    "SNo": String,
    "ObservationDate": String,
    "Province/State": String,
    "Country/Region": String,
    "Last Update": String,
    "Confirmed": String,
    "Deaths": String,
    "Recovered": String
}, { timestamps: true });

const Province = mongoose.model("covid_provinces", ProvinceSchema);

module.exports = Province;