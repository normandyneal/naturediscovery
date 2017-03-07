// MEAN Stack RESTful API Tutorial - Contact List App

//gets express.
var express = require('express'); 

//Creates an express application. The express() function is a top-level function exported by the 
//express module.
//now we can use the functions and commands contained within the express module in the server.js file. 
var app = express();  

var mongojs = require('mongojs');

//1st param :which mongo db database, 2nd paramater: which collection we are using


//var db = mongojs('contactlist', ['contactlist']);

//we use body parser to parse the body.
var bodyParser = require('body-parser');

//we want to use index.html as a template for are app so we need this
//static means an html, javascript or html file, css, images, they do not change.
//the __dirname + '/public' tells the server where to look for our static files. 

//app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/public'));



//this makes it so we parse the body of the input it recieves.
app.use(bodyParser.json());


var dbURI= 'mongodb://norm:norm@ds019960.mlab.com:19960/musicartist'
var artistDb = mongojs(dbURI, ['artists']);

app.get('/artists', function (req, res) {
    console.log('I received a GET request for the artists collection');
	
    //has the server find the data from the contactlist database and contact list collection.
    //docs means it will respond with the documents from the database (contacts from database)
    artistDb.artists.find(function (err, docs) {

	//here is a test that makes sure we recieve data from the database. 
	    console.log("here shows we recived data from the data base");

	    //this tests if we recied the data from the database.
	    console.log(docs); 

        //this sends the data back to the controller.
	    //this can be displayed on the webpage if navigate to localhost:3000
	    //this responds to the get request by sending back the contace list data in a json format which the controller can use.
	    res.json(docs);
	
    });
  
});


app.put('/artists/:id', function (req, res) {
    var id = req.params.id;
    
	//we will print the changed name sally to sally 222, sally 222 will be print in console.
    console.log("We are in here");
	console.log(req.body.name);
	
  
    //this will officially update and modify the contact.
    artistDb.artists.findAndModify({
        
		//the contact id. this selects the contact we want to modify.
	    query: {_id: mongojs.ObjectId(id)},
    
	    //this is the updates we want to set for the contact we selected. 
	    update: {$set: {reviews: req.body.reviews}}, new: true}, function (err, doc) {
            
			//doc is the doc that has been updated
	        //respond with the json of the doc that has been updated.
	        res.json(doc);
        });
});


app.listen(process.env.PORT || 3000);

//can be seen in command prompt
console.log("Server running on port 3000");


