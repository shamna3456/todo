require('dotenv').config()
const express=require('express')
const app=express()
 
const connectDb=require('./config/database')
connectDb()

app.set('view engine','ejs')
app.use(express.static('static'))

app.use(express.json())
app.use(express.urlencoded({extended:false}))

let homeRoute=require('./routes/home')
app.use('/',homeRoute)


app.listen(3000,'',()=>{
    console.log("started");
})