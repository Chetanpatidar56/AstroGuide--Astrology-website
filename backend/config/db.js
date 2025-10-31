const mongoose=require('mongoose');

async function main() {
    mongoose.connect(process.env.MONGO_URL);
    console.log("Database is connected");
    
}
module.exports=main;