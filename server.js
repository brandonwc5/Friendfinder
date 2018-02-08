var bodyParser = require("body-parser");
var express = require("express");
var app = express();
var PORT = process.env.PORT || 3308;
app.get("/", function(req, response){
	response.send("Hello world");
})
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json);
app.use(bodyParser.text);

app.use(function(req, response){
	response.setHeader('content-type', 'text/html');
	response.write("You posted:\N");
	response.end(JSON.stringify(req.body, null, 2));
})

app.listen(PORT, function(){
	console.log("Helller");
});
