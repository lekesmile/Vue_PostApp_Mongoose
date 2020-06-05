const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const AuthorSchema = new Schema({


 author:{
     type:String,
     unique: true

 },
 bod:{
     type:Number
 },
 address:{
   type:String
   
 },
 registeredDate: { 
     type: Date,
     default: Date.now    
},

posts:[{type: Schema.Types.ObjectId, ref: 'posts'}]


})


const Author = mongoose.model('Author ', AuthorSchema);
module.exports = Author;