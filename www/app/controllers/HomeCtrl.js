myApp.controller('HomeCtrl',["$scope",'$location','$rootScope','$timeout','$interval',function($scope,$location,$rootScope,$timeout,$interval){
 
	$scope.FBLogin =function(){
		
	$scope.myvar = !$scope.myvar; // toggle button & show bar	
	$timeout(function() {
		$location.path("/StartQuiz"); console.log('6h');
	}, 8000); 
	
	FB.login(function(response) {
		if (response.authResponse) {			 
			FB.api('/me', function(response) {					
				var accessToken = FB.getAuthResponse();
				//console.log(accessToken);
				//exporting token,reponse in rootscope
				$rootScope.accessToken = accessToken;
				$rootScope.response = response;			
				});				
					console.log('18h');
			}
		else {
				console.log('User cancelled login or did not fully authorize.');
			}
	});	
	
	$interval(callAtInterval, 500);
	
	};
	
	function callAtInterval() {
		$scope.itimer=$scope.itimer+5;
	}
}]);