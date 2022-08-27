const mongoose=require('mongoose')
let todoschema=new mongoose.Schema({id:String,text:String})
module.exports=mongoose.model('Todo',todoschema)