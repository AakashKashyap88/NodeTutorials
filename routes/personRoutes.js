const express = require('express')
const route=express.Router()


const Person=require('../models/Person')


route.post('/',async (req,res)=>{
    try{
    const data=req.body
    
    const newPerson=new Person(data)
    
    const response = await newPerson.save()
    console.log("Data Saved Sucessfully")
    return res.status(200).json({msg:"Data Saved Sucessfully"})
    
    }catch(error){
      console.log("error",error)
      return  res.status(500).json({error:"Internal Server Error"})
    
    }
    
    })





    route.put('/:id',async (req,res)=>{
        try{
            const personId=req.params.id
            const updatedData=req.body


          const response= await Person.findByIdAndUpdate(personId,updatedData,{
            new :true,
            runValidators:true,
          })

          if(!response){
            return res.status(404).json({error:"Person Not Found!"})
          }

       console.log("Data is Updated")
       return res.status(200).json(response)

        }catch(e){
          console.log("error",e)
          return  res.status(500).json({error:"Internal Server Error"})
        }
    })



    
    route.delete('/:id',async (req,res)=>{
  try{
const PersonId=req.params.id

    const response=await Person.findByIdAndDelete(PersonId)
    if(!response){
      return res.status(404).json({error:"Person Not Found!"})
    }
    console.log("Data Deleted Sucessfully!")
    return res.status(200).json(response)

}catch(e){
  console.log("error",e)
  return  res.status(500).json({error:"Internal Server Error"})

}
   })





    
    route.get('/:workType',async (req,res)=>{
        try{
      const workType = req.params.workType
      if(workType=='chef'|| workType=='waiter'|| workType=='manager'){
        const response = await Person.find({work:workType})
        console.log('Data Fateched')
        return res.status(200).json(response)
      }else{
        return  res.status(404).json({error:'Invalid workType'})
      }
      
        }catch(e){
          console.log("Error",e)
          return  res.status(500).json({error:'Internal Server Error'})
        }
      })






      module.exports=route;