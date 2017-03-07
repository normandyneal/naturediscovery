var otherApp = angular.module('otherApp', []);

otherApp.controller('ArtistsFromDatabase', ['$scope','$http', function($scope,$http){
	
		$http.get('/artists').success(function(response) {
			
				//this is what happens after the response is recieved/. 
				console.log("I got the data I requested from the Artist Database!!");
				$scope.artistList=response;
				//the $scope.contactlist enables us to use  the variable contactlist in our view (index.html).
				//the =response is what we recieved from the response. it puts the data into scope which will be put in our html file.
				console.log("This is from the success function, here is the response:")
				console.log(response);
				
				console.log("Now print out the scope that should have the data from the get");
				console.log($scope.artistList);
			
		});
	
		$scope.checkGenre=function(x){
			
			for(var i=0; i<x.length; i++){
						
				if($scope.chosenGenre=== "All"){
					x[i].genreSelected=true;
					
				} else
				{
					if(x[i].genre===$scope.chosenGenre)
					{
						x[i].genreSelected=true;
					} else if(x[i].genre!==$scope.chosenGenre)
					{
						x[i].genreSelected=false;
					}
				}
				
				
			console.log(x[i].name+ " " + x[i].genre + " " + x[i].genreSelected )
			}	
			
			
		};
}]);

otherApp.controller('PanelController', function(){
	this.tab=1;
    
	this.selectTab = function(setTab){
		this.tab = setTab;
		
	};
	this.isSelected = function(checkTab){
		return this.tab === checkTab;
	};
	
});

otherApp.controller("ReviewController", ['$http', function($http){
    this.review = {};
  
    this.addReview = function(product) {
        product.reviews.push(this.review);
		this.review={};
		console.log("survival mode");
		console.log(product);
	
		$http.put('/artists/' + product._id, product).success(function(response) {
			console.log("Database changed!")
			
		})
	
	
	};
  
}]);





	