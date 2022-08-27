const express=require('express')
const router=express.Router()

let { getTodos, addTodo, deleteTodo, updateTodo }=require('../controllers/todo')
router
    .route('/')
    .get(getTodos)
    .post(addTodo)


router
    .route('/delete/:id')
    .get(deleteTodo)

router
    .route('/update')
    .post(updateTodo)

module.exports=router