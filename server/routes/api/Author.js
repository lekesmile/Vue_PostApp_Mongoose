const express = require('express');
const mongodb = require('mongodb')
const Author = require('../../schema/Author')
const uuid = require('uuid')

const router = express.Router();

router.get('/', async (req, res) =>{
    try {
       const author = await Author.find({})
        res.json(author).status(200) 
         
    } catch (error) {
        res.json(error)
    }
       
  
})

router.post('/', async (req, res)=>{
    try {
    let{author, dob, address, post} = req.body
    const user = new Author({
       author: author,
       dob: dob,
       address:address,
       registeredDate: Date.now(),
      
    });

   const savedauthor = await user.save()
   res.json(savedauthor).json(200)

    } catch (error) {
     res.json({message:"error saving new author " + error}).json(400)   
    }
   
   
})


module.exports = router;