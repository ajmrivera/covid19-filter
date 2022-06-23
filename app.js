const express = require("express");
const mongoose = require("mongoose");
const csvtojson = require("csvtojson");
const Province = require("./schema/provinces");
require("dotenv/config");

const PORT = 3000;
const app = express();

const csvFilePath = "./public/covid_19_data.csv";
let parsedData = [];

//ROUTES
app.get("/", (req, res) => {
    res.send("Currently @ HOME");
})
app.use(require("./controller/provinces"));

//Connect to DB
mongoose.connect(
    process.env.MONGO_DB_CONNECTION,
    { useNewUrlParser: true }
)

const parseCovidDataCSV = () => {
    //Convert CSV to JSON then use insertMany to MongoDB using mongoose
    console.log("Parsing CSV to JSON");
    csvtojson().fromFile(csvFilePath)
        .then((response) => {
            parsedData = response;

            Province.insertMany(parsedData)
            .then((res) => {
                console.log("Data Inserted!");
            })
            .catch((err) => {
                console.log("ERR in Mongo inserting: ", err);
            })
        })
        .catch ((err) => {
            console.log("ERR in CSV reading: ", err);
        })
}

Province.count((err, count) => {
    if(!err && count == 0){
        console.log("Collection Empty, inserting data!");
        parseCovidDataCSV();    //Insert data to DB
    }else if(!err && count > 0){
        console.log("Collection Not Empty!");
    }
})

//listening
app.listen(PORT, () => {
    console.log("Running on port:", PORT);
});