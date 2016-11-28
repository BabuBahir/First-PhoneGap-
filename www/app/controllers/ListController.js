myApp.controller('ListController', ['$scope', '$firebaseArray','$location', '$firebaseObject','FBURL','$rootScope','$timeout',function($scope, $firebaseArray, $location,$firebaseObject, FBURL,$rootScope,$timeout){
  
  var products = new Firebase(FBURL);
  $scope.products = $firebaseArray(products);
    //*copied content for initializing
	var accessToken =$rootScope.accessToken;
	var response =$rootScope.response;
	if (accessToken == null){	 
	   window.location.href="https://angularfb-rohit.000webhostapp.com";	// redirecting 
	}

	console.log(JSON.stringify(accessToken));				
	var profilePic ="https://graph.facebook.com/"+accessToken.userID+"/picture?type=square";

	$scope.username =response.name;
	$scope.Profile_img=profilePic;
	document.getElementById("imageid").src=profilePic;
	//*
	
	//delaying page load by 3 seconds
	$timeout(function() {$scope.myVar = true},3000);
	
  //deleting previous response
    var ref = new Firebase("https://test-55ef7.firebaseio.com/Response/");
    var allResponse = $firebaseObject(ref)
    allResponse.$remove(); 
  
  //init
	$scope.init = function() {
		$scope.btn_class = "btn btn-danger";
		$scope.counter = 0;
		$scope.score = 0;
	}
  
   //detecting input
	$scope.newValue = function(value) {
		if (value === null){
			$scope.value ='null';
		}
		else{ 
		    $scope.value=value;		 
			$scope.btn_class = "btn btn-success";
		}
	};
 
   //adding responses   
   $scope.addProduct = function() {
	    $scope.counter = $scope.counter + 1; 		
		
		// increment score if correct answer
		if($scope.value == $scope.products[$scope.counter-1].answer){
			$scope.score =$scope.score +1;	
		}
		
		 if($scope.counter >= $scope.products.length)
		 {						 
			 // passing name to rootscope
			 $rootScope.test = $scope.username;
			 // redirecting if tests finsished
			 $location.path('/end');			 
		 };				
		var ref = new Firebase("https://test-55ef7.firebaseio.com/Response/");
		var response = $firebaseArray(ref);
		response.$add({
			QuestionID: $scope.products[$scope.counter-1].ques,
			ResponseID: $scope.value,
			answer: $scope.products[$scope.counter-1].answer,
			username : $scope.username
		});	
		// after response nullify $scope.value
			$scope.value = false;
			$scope.btn_class = "btn btn-danger";
	};
	 
}]);

 