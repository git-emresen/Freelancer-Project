const Portfolio=require("../models/portfolioModel")

exports.getIndexPage=async (req,res)=>{
    //await yalmadığı için çalışmaz
    /* const portfolios=Portfolio.find()
    res.render("index",{
        portfolios        
     }) */      
        const portfolios= await Portfolio.find().sort('-createdAt')
        res.render("index",{
           portfolios
        })
}

exports.getAdminPage=async (req,res)=>{
    res.render("admin")
}