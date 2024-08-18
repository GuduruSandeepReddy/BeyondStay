const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");


main().then(()=>{
    console.log("connected successfully");
})
.catch(err => console.log(err));


async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/beyondstay');

  }

const initDB = async () =>{
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj)=>({...obj,owner:"66bed873e982bb36c9eee145"}));
    await Listing.insertMany(initData.data);
    console.log("data successfully added");

};

initDB();