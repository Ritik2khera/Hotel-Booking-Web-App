const mongoose = require("mongoose");
const initData = require("./data.js");
const listing = require("../models/listing.js");

const Mongo_URL = "mongodb://127.0.0.1:27017/wanderlust";

main().then(()=>{
    console.log("connected to db")
}).catch((err)=>{
    console.log(err)
});

async function main(){
    await mongoose.connect(Mongo_URL);
};

const initDB = async ()=>{
    await listing.deleteMany({});
   initData.data =  initData.data.map((obj)=> ({...obj,owner:"667fb5a7110ac7339edc888d"}));
    await listing.insertMany(initData.data);
    console.log("data was initialized");
};

initDB();