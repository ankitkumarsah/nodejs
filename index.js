const express = require('express');
const app = express();
app.get("/",function(req,res){
    res.send("prerna");
});
app.get("/prerna",function(req,res){
    res.send("ghjk");
});

app.get("/prerna",function(req,res){
    res.send("ghjk");
});
app.listen(80);