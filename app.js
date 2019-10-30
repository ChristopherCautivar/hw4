//express and ejs setup
const express = require("express");
const app = express();
app.set("view engine","ejs");
app.use(express.static("public"));

//routing
app.get("/",function(req,res){
    res.render("index")
});
app.get("/about",function(req,res){
    res.render("about")
});
app.get("/contact",function(req,res){
    res.render("contact")
});

//start server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express server is running...")
});