//Controllers are where we define our app's behavior by defining funtions and values.


//this controls the interactions between the view (what the user sees), which is the index.html file.
// and the model which contains the data.  

//Modules are where we write pieces of Angular application, and define dependencies.
//Modules can use other modules. The second paramater with the array is where we define dependencies.  
var myApp = angular.module('myApp', ['otherApp']);

//to put data from controller.js file into index.html file we are going to use $scope
//which is the glue from the application controller and the view(index.html file).
//the $http is so we can use $http.get it is a service and has to do with dependency injection
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    


    //this refreshes the contact list automatically when the add contact list is clicked. 
	var refresh = function() {
	  
	    //this sends a request to the server and the server will use app.get which will respond with data.  
	    //the /contactlist is the route that we are going to create to get our data from.  
	    // .success is a promise 
		$http.get('/contactlist').success(function(response) {
		
		    //this is what happens after the response is recieved/. 
		    console.log("I got the data I requested");
		
    		//the $scope.contactlist enables us to use  the variable contactlist in our view (index.html).
	    	//the =response is what we recieved from the response. it puts the data into scope which will be put in our html file.
		    $scope.contactlist = response;
		
	    	//this will clear input boxes after we call the refresh function. 
		    $scope.contact = "";
	    });
	};

	//this should print out in the chrome console.
	//our console log from controller will come from browser
	//console logs from servers come from command prompt 
	console.log("Hello World from controller");
	
	//this funtion call is to get the data when we load the page.
	console.log("First Load Page refresh")
	refresh();

	//this sends data from input boxes to the server to post or add to mongo db database. 
	//this will refer to the addContact in the html file.
	$scope.addContact = function() {
	  
	    //this will send to the console the info from the input boxes. It shows that the function is recieveing the info from the input boxes. 
	    console.log($scope.contact);
	  
	    //we will send the input data from our boxes to the server and make sure it is recived correctly.
	    //the /contactlist is our route. the $scope.contact is the data we are sending to the server.
	    //this sends the input data to the server. 
	    //the .success ect. takes the response from the server as the argument.
	    $http.post('/contactlist', $scope.contact).success(function(response) {
		
	    	//this should print the response that it recives to the console log
		    console.log(response);
		
		    //this function refreshes the page after we click the addContact button.
		    refresh();
	    });
	};

	//here we pass the id of the contace we want to remove.
	$scope.remove = function(id) {
	  
	    //this will send to the chrome console the id of the contact we want to remove.
	    console.log(id);
	  
	    //this will send the http.delete request to the server.
	    //this will be a specific url. we want to send the url of the id we want to delete.  
	    $http.delete('/contactlist/' + id).success(function(response) {
		
        //this will refresh. 
        refresh();
	    });
	};

	//first use a get request for the specific contact we want to edit.
	$scope.edit = function(id) {
	    console.log(id);
	    //the response that we recieved.
	    
		$http.get('/contactlist/' + id).success(function(response) {
		  //respond by putting the response into the contact boxes, so this will put the response 
		  //into the input boxes that have the ng-model="contact.x
		  $scope.contact = response;
	    });
	};  

	//we want to update the information for the contact we selected that got put into the input boxes.  
	$scope.update = function() {
	    //this will put the id of the contact in the input boxes into the chrome console. 
	    console.log($scope.contact._id);
	    
		//we will use a put request to send the data to the server to be updated.
	    //so first paramater is the url of the contact, and the second paramater is everything that is in
	    //the ng-model="contact.x will be sent to the server.
	    $http.put('/contactlist/' + $scope.contact._id, $scope.contact).success(function(response) {
		    //refresh the page after the update has been clicked.
		    refresh();
	    })
	};

	$scope.deselect = function() {
	    $scope.contact = "";
	}

}]);﻿



//Junk controller 
myApp.controller('JunkController', function(){
	this.tab=1;
    this.selectTab = function(setTab){
		this.tab = setTab;
		
	};
	
});
	
	
	
	
	






