// MEAN Stack RESTful API Tutorial - Contact List App

//gets express
var express = require('express'); 

//Creates an express application. The express() function is a top-level function exported by the 
//express module.
//now we can use the functions and commands contained within the express module in the server.js file. 
var app = express();  

var mongojs = require('mongojs');

//1st param :which mongo db database, 2nd paramater: which collection we are using
var db = mongojs('contactlist', ['contactlist']);

//we use body parser to parse the body.
var bodyParser = require('body-parser');

//we want to use index.html as a template for are app so we need this
//static means an html, javascript or html file, css, images, they do not change.
//the __dirname + '/public' tells the server where to look for our static files. 
app.use(express.static(__dirname + '/public'));

//this makes it so we parse the body of the input it recieves.
app.use(bodyParser.json());

//the '/contactlist is the same route from controller js's -> $http.get('/contactlist').success(function(response) 
//this tells the server to listen for the get request for our created contactlist route from controller.js  
app.get('/contactlist', function (req, res) {
   
   console.log('I received a GET request');
	
    //has the server find the data from the contactlist database and contact list collection.
    //docs means it will respond with the documents from the database (contacts from database)
    db.contactlist.find(function (err, docs) {

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

//the app.post listens to the post request from the contoller 
app.post('/contactlist', function (req, res) {
    
	//the console log will print the data it recieves to the command prompt.
    //the req.body means we are requesting the data from the body of the input data.
    //we use body parser to parse the body.
    console.log(req.body);
  
    //we will now insert the input data into the mongodb database.
    //this is the code to insert a new item. We will insert the body, what we recived and parsed.
    //doc represents the item we parsed and recieved.
    db.contactlist.insert(req.body, function(err, doc) {
        
		//we will then respond with the json format of the doc to our controller.
	    //this code inserts the input data into the database as well as sends the new data from the database 
        //back to the controller 	
	    res.json(doc);
    });
});


//the /:id is the way we choose the contact list from the url. the colon is to show it is not part of the string. 
app.delete('/contactlist/:id', function (req, res) {
    
	//this gets the value of the id from the url
    var id = req.params.id;
    
	//this prints the id of the console to the command prompt.
    //this means the server is reciveing the id that the contorller is sending to it.
    console.log(id);
  
    //delete the contact from mongodb database.
    // so we are choosing the property id, the id will be mongojs.object(d(id which refers to var id up there)
    //it chooses what contact to remove.
    //the doc in the callback function is the item we are removing
    //we are sending back the item we removed back to the contoller. 
    db.contactlist.remove({_id: mongojs.ObjectId(id)}, function (err, doc) {
        res.json(doc);
    });
});

//responds to the get request done by the contoller for the controller edit function.

app.get('/contactlist/:id', function (req, res) {
    var id = req.params.id;
    console.log(id);
    
	//find one specific contact from the contact list. 
    //we will then send back the data in the doc variable.
    //this will send back all the data for the contact we requested back to the controller.
    db.contactlist.findOne({_id: mongojs.ObjectId(id)}, function (err, doc) {
        
		//we will respond with a json of the doc.
	    res.json(doc);
    });
});


//this gets the thing you want to change and what you want to change it too (two paramaters in the update function put of controller)
app.put('/contactlist/:id', function (req, res) {
    var id = req.params.id;
    
	//we will print the changed name sally to sally 222, sally 222 will be print in console.
    console.log(req.body.name);
  
    //this will officially update and modify the contact.
    db.contactlist.findAndModify({
        
		//the contact id. this selects the contact we want to modify.
	    query: {_id: mongojs.ObjectId(id)},
    
	    //this is the updates we want to set for the contact we selected. 
	    update: {$set: {name: req.body.name, email: req.body.email, number: req.body.number}}, new: true}, function (err, doc) {
            
			//doc is the doc that has been updated
	        //respond with the json of the doc that has been updated.
	        res.json(doc);
        });
});
















//Here starts the code for the actual artist database api

var artistDb = mongojs('contactlist', ['artists']);

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


app.listen(3000);

//can be seen in command prompt
console.log("Server running on port 3000");