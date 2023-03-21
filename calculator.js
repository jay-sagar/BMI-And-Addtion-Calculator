const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html"); // __dirname will the send directory of the file no matter where it is present
    // example ("d/web development/back-end-webdev/calculator")
});

app.get("/bmi", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/", function(req, res){

    var num1 = Number(req.body.num1); // number are coming as text we need to convert explicitly 
    var num2 = Number(req.body.num2);

    var result = num1 + num2;

    res.send("The result of the calculation is: " + result);
});

app.post("/bmi", function(req, res){
    var height = parseFloat(req.body.height);
    var weight = parseFloat(req.body.weight);

    var result = weight / (height * height);

    res.send("Your BMI is " + result);
})

app.listen(3000, function(){
    console.log("Server is running on port 3000");
});