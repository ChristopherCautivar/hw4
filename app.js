//express and ejs setup
const express = require("express");
const app = express();
const faker = require("faker");
app.set("view engine","ejs");
app.use(express.static("public"));

var current = 0;


//routing
app.get("/",function(req,res){
    let name = faker.name.findName();
    current = 1;
    res.render("index", {"current":current, "name":name});
});
app.get("/about",function(req,res){
    current = 2;
    res.render("about", {"current":current});
});
app.get("/contact",function(req,res){
    current = 3;
    res.render("contact", {"current":current});
});
app.get("/contacts",function(req,res){
    let contacts = [];
    for(let i = 0; i<10; i++){
        contacts.push(faker.name.findName())
    }
    current = 4;
    res.render("contacts", {"current":current, "contacts":contacts});
});

//start server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express server is running...")
});