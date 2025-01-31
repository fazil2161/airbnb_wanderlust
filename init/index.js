const mongoose =require ("mongoose");
const initData= require("./data.js");
const Listing = require("../models/listing.js");

const mongo_url= "mongodb://127.0.0.1:27017/wanderlust";

main(). then(() => {
    console.log("connected to DB");
})
.catch ( (err) => {
    console.log(err);
}
);

async function main() {
    mongoose.connect(mongo_url);
}

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj, owner:"67986f2c1f24090d1b8728da"}));
    await Listing.insertMany(initData.data);
    console.log("initialised data");
};

initDB();