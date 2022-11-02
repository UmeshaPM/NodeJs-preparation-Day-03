//Q-01 :- How do you create a simple Express.js application?

const express = require('express')

const App = express();
App.get('/',(req,resp)=>{
 resp.send('Welcome to my page');
 console.log(req);
})

App.get('/About',(req,resp)=>{
    resp.send('Welcome to About page');
    console.log(req);
   })


App.listen('3000',function() {
    console.log('Question-1 Completed');
})

//Q-02 :- Implementation of all type of exports in backend application.

//Default import
//const add = require('./Operation');

//Named import
const {add,sub,mul} = require('./Operation')
console.log(add(7,0));
console.log(sub(15,30));
console.log(mul(20,40));

//Q-03 :- Create a middleware which will be applicable to all the routes

const express = require("express");
const app = express();
const port = process.env.port || 5000;

const middleWare1 = function (req,res,next ) {
  console.log("this is local middleware");
  next();
};

const middleWare2 = function (req,res,next ) {
  console.log("this is global middleware");
  next();
};

app.use(middleWare2);

app.get("/",  function (req, res) {
  res.send("<h1>Welcome to Home page <h1>");
  console.log(req);
});
app.get("/About", middleWare1, function (req, res) {
  res.send(
    "<h1>Welcome to About page<h1>"
  );
  console.log(req);
});
app.get("/signup",middleWare1, function (req, res) {
  res.send("<h1>Welcome to signup page<h1>");
  console.log(req);
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

//Q-04 :- Implement CORS.

const cors = require('cors')
app.use(cors())
app.get('/home',about,(req,res)=>{
    console.log('Welcome to Home page');
})

