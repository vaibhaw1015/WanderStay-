const mongoose=require("mongoose");
const initData=require("./data.js");
const Listing=require("../models/listing.js");

const MONGO_URL="mongodb://127.0.0.1:27017/wanderStay";
main().then(()=>{
    console.log("connected to db");
}).catch(err=>{
    console.log(err);
});
async function main() {
    await mongoose.connect(MONGO_URL); 
}
const initDB= async()=>{
   await Listing.deleteMany({});
 /*initData.data=initData.data.map((obj)=>({...obj,owner:"68b9cb44f50a22d459668aaa"}));*/
 initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "68b9cb44f50a22d459668aaa",
    geometry: {
        type: "Point",
        coordinates: [72.8777, 19.0760]  // Mumbai (valid coords)
    }
}));

   await Listing.insertMany(initData.data);
   console.log("data was initialized ");
};
initDB();
