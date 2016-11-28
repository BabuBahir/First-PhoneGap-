var app = angular.module('myApp', ['ngRoute', 'firebase']);

app.config(function($routeProvider ){
  $routeProvider
	.when('/', {
		controller: 'ListController',
		templateUrl: 'views/list.html'
	})
	.when('/end', {
		controller: 'EndController',
		templateUrl: 'views/end.html'
	}) 
	.otherwise({
		redirectTo: '/'
	});
 
});

app.constant("FBURL", 
  "https://test-55ef7.firebaseio.com/Questions/" //Use the URL of your project here
);
