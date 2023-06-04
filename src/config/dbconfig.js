const mongoose=require('mongoose');

const uri='mongodb://127.0.0.1:127017/cubicle-may-2023';

async function dbConnect(){
    await mongoose.connect(uri);

}
dbConnect
module.exports=dbConnect;