myApp.controller('PostCtrl',["$scope","$rootScope",'$location',function($scope,$rootScope,$location){	
	 
	var accessToken =$rootScope.accessToken;
	var response =$rootScope.response;
	if (accessToken == null){
		console.log('6');
		window.location.href="https://angularfb-rohit.000webhostapp.com";	// redirecting 
	}

	console.log(JSON.stringify(accessToken));				
	var profilePic ="https://graph.facebook.com/"+accessToken.userID+"/picture?type=square";
	 
	$scope.intro_msg ="welcome "+response.name;
	$scope.Profile_img=profilePic;
	 		
//logout
		$scope.FBLogout = function(){
			FB.logout(function(response) {
				window.location.href="https://angularfb-rohit.000webhostapp.com";
			});
		};
 
 }])