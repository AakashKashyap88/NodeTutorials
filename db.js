const mongoose=require('mongoose')
require('dotenv').config()
//define database
//const mongoUrl='mongodb://127.0.0.1:27017/AakashDataBase'

const mongoUrl=process.env.MONGODBURL;

// mongoose.connect(mongoUrl,{
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// })

// const db=mongoose.connection

// db.on('connected',()=>{
//     console.log('connected to MongoDB Server');
// })

// db.on('error',(error)=>{
// console.log("MongoDB Connection Error: ",error);
// })

// db.on('disconnected',()=>{
//     console.log('MongoDB Disconnected')
// })



mongoose.connect(mongoUrl)
    .then(() => console.log('Connected to MongoDB Server'))
    .catch(err => console.error('MongoDB Connection Error:', err));

const db = mongoose.connection;

db.on('disconnected', () => {
    console.log('MongoDB Disconnected');
});




module.exports=db;