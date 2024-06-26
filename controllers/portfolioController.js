const path = require('path')
const fs = require('fs');
const Portfolio = require('../models/portfolioModel')

exports.add = async (req,res)=>{


    // Get the file that was set to our field named "image"
    const image = req.files.img;
    
    // If no image submitted, exit
    if (!image) return res.sendStatus(400);

    let body=req.body
    Object.assign(body,{"img":req.files.img.name})
    await Portfolio.create(req.body)
    image.mv(process.cwd()+'/public/assets/img/portfolio/' + image.name)

res.redirect('/admin')
}
