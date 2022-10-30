var express = require("express");
var bp = require("body-parser")
var app = express();

app.use(bp.urlencoded({extended:true}));

app.get("/",function(req,res){
  res.sendFile(__dirname + "/index.html");
});
app.post("/",function(req,res){
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;
  res.send("Result is "+ result);
});

// For BMI Calculator

app.get("/bmicalculator",function(req,res){
  res.sendFile(__dirname+"/bmiCalculator.html");
});

app.post("/bmicalculator",function(req,res){
  var w = req.body.weight;
  var h = req.body.height;
  var BMI = h/w;
  res.send("Your BMI is "+BMI);

});

app.listen(3000,function(){
  console.log("Server started");
});
