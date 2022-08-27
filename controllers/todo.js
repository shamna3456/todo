let Todo =require('../models/Todo')

exports.getTodos=async (req,res)=>{
    let data=await Todo.find()
    res.render('index',{data})
}

exports.addTodo=async(req,res)=>{
    let names=req.body.name
    await Todo.create({id:Date.now(),text:names})
    res.redirect('/')
}

exports.deleteTodo=async(req,res)=>{
    let id=req.params.id
    await Todo.deleteOne({id:id})
    res.redirect('/')
}

exports.updateTodo=async (req,res)=>{
    let {update,id}=req.body
    let updatedata= await Todo.findOne({id:id})
    updatedata.text=update
    await updatedata.save()
    res.redirect('/')
}