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
    { useNewUrlParser: true },
    (err, client) => {
        if(err) console.log("Could not connect to Mongo: ", process.env.MONGO_DB_CONNECTION);
        else{
            console.log("Connected to AJMR Testing Cluster DB!");
            client.db.listCollections().toArray(function(err, collections) {
                console.log(collections);
            });
        }
    }
)

//Convert CSV to JSON then use insertMany to MongoDB using mongoose
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


//listening
app.listen(PORT, () => {
    console.log("Running on port:", PORT);
});