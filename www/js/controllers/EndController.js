app.controller('EndController', ['$scope','$firebaseArray','$firebaseObject','FBURL','$rootScope',function($scope,$firebaseArray,$firebaseObject,FBURL,$rootScope ){
 
	var json =[];
	var ref = new Firebase("https://test-55ef7.firebaseio.com/Response/");
	 ref.orderByChild("User").on("child_added", function(snapshot) {
		var test =[];		 		 
			          // Array
			test.push(snapshot.val().QuestionID);
			test.push(snapshot.val().answer);
			test.push(snapshot.val().ResponseID);		
		json.push(test);	  
	});	 
	$scope.result=json;


	// access name from Rootobject	
	$scope.getOrig = function() {
	return $rootScope.test;
	};

}]);


