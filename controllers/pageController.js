
exports.getIndexPage=async (req,res)=>{
    res.render("index",{
        null:null
     })
}

exports.getAdminPage=async (req,res)=>{
    res.render("admin")
}