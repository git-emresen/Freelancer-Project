const express=require('express')
const ejs=require('ejs')
const path=require("path")
const fileUpload = require('express-fileupload')
const mongoose=require('mongoose')
const pageController=require('./controllers/pageController')
const portfolioController=require('./controllers/portfolioController')

mongoose.connect("mongodb://localhost:27017/freelancer").then(()=>{
console.log("db connected")
}).catch(()=>{
    console.log("baglanti hatasi")
})

const app=express()

app.set('view engine','ejs')
/* app.use(express.Router()) */
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(fileUpload())


app.get("/",pageController.getIndexPage)
app.get("/admin",pageController.getAdminPage)
app.post("/addPortfolio",portfolioController.add)



app.listen(3000,()=>{
    console.log('server stated to listen port 3000')
})

