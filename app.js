const express = require("express")
const bodyParser = require("body-parser")
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

//Use the lambda function name along with the '/' when performing GET/POST

// app.get("/lambda-express", (req,res) => res.send("Hello world"));

app.post('/lambda-node-post', (req, res)=>{
	res.send(req.body.a);
});


module.exports = app