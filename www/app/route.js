myApp.config(["$routeProvider",function($routeProvider){
	$routeProvider
		.when("/",{
			templateUrl : 'views/home/login.html',
			controller : 'HomeCtrl'
		})
		.when("/StartQuiz",{
			templateUrl : 'views/home/list.html',
			controller : 'ListController'
		})
		.when("/end",{
			templateUrl : 'views/home/end.html',
			controller : 'EndController'
		})
		.otherwise("/",{
			templateUrl : 'views/home/login.html',
			controller : 'HomeCtrl'
		});

}]);

myApp.constant("FBURL", 
  "https://test-55ef7.firebaseio.com/Questions/" //Use the URL of your project here
);
