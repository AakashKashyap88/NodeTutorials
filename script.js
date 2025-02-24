const express = require('express')
const app = express()
const db=require('./db')
const bodyParser=require('body-parser')
app.use(bodyParser.json())
require('dotenv').config()

//const Person=require('./models/Person')


app.get('/', function (req, res) {
  res.send('Hellow')
})


// app.get('/getUser',(req,res)=>{
//     res.send
//     ('Hey this is User Details')
// })

// app.post('/person',async (req,res)=>{
// try{
// const data=req.body

// const newPerson=new Person(data)

// const response = await newPerson.save()
// console.log("Data Saved Sucessfully")
// res.status(200).json({msg:"Data Saved Sucessfully"})

// }catch(error){
//   console.log("error",error)
//   res.status(500).json({error:"Internal Server Error"})

// }

// })



// app.get('/person/:workType',async (req,res)=>{
//   try{
// const workType = req.params.workType
// if(workType=='chef'|| workType=='waiter'|| workType=='manager'){
//   const response = await Person.find({work:workType})
//   console.log('Data Fateched')
//   res.status(200).json(response)
// }else{
//   res.status(404).json({error:'Invalid workType'})
// }

//   }catch(e){
//     console.log("Error",e)
//     res.status(500).json({error:'Internal Server Error'})
//   }
// })
 
// app.get('/getPerson',async (req,res)=>{
//   try{
//     const data = await Person.find()
//     console.log("Data Fatched Sucessfully")
//     res.status(200).json(data)

//   }catch(e){
//     console.log("error",error)
//     res.status(500).json({error:"Internal Server Error"})
//   }
// })

const routes=require('./routes/personRoutes')
app.use('/person',routes)


const PORT=process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`Server is Running http://localhost:3000`)
})