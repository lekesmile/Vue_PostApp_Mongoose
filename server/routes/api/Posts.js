const express = require('express');
const mongodb = require('mongodb')
const post = require('../../schema/Posts')
const uuid = require('uuid')

const router = express.Router();


router.get('/', async (req, res) =>{
     try {
         const posts = await post.find({}).populate('Author')
         return res.json({posts}).status(200);
     } catch (error) {
          return res.status(404).json({ error: error.message, message: 'Database error, try again later' });
     }
    
})

router.get('/:id', async(req, res)=>{
     try {
       const findpost=   await post.findById({_id:req.params.id})
       return res.json(findpost)
     } catch (error) {
          return res.status(404).json({ error: error.message, message: 'Sorry cannot find post ' + error });
     }
   })

router.post('/', async(req, res)=>{
     try {
       let {text, createdBy} = req.body
       const posti = new post({
          text: text, 
          createdAt: Date.now(),
          createdBy: createdBy,
          postid: uuid.v4()
          
     })

       const posted = await posti.save();
      return res.json({posted}).status(200);
     } catch (error) {
          return res.json("Error with the database " + error);

     }
   
})

router.put('/:id', async(req,res)=>{
   try {
     const postupdate = await post.findByIdAndUpdate({_id:req.params.id});
     return res.json(postupdate).status(200) 
   } catch (error) {
        return res.json(error).status(400)
   } 
})


router.delete('/:id', async (req, res)=>{
     try {
          await post.findByIdAndDelete({_id:req.params.id});
          return res.status(200).json({ message: 'Your post is successfully delected' });
          
     } catch (error) {
          return res.status(400).json({ error: error.message, message: 'Error delecting post' });
     }
})
module.exports = router;

