const mongoose=require('mongoose')

const Schema=mongoose.Schema

const portfolioSchema=new Schema({
    portfolioName:String,
    title:String,    
    description:String,
    img:String

})

const Portfolio = mongoose.model("Portfolio",portfolioSchema)

module.exports=Portfolio