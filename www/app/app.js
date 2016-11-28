var myApp=angular.module('myApp',['ngRoute', 'firebase']);
 
window.fbAsyncInit = function() {
	FB.init({
	  appId      : '222791588154421',
	  xfbml      : true,
	  version    : 'v2.8'
	});
	FB.AppEvents.logPageView();
	
	FB.Event.subscribe('auth.statusChange', function(response) {
		if (response.status === 'connected') {
        //the user is logged & authorzied 
		  console.log(JSON.stringify(response)); 	 
		} else if (response.status === 'not_authorized') {
			  console.log('15a'); //ask for permissions
		} else {
			  console.log('17a');//ask the user to login to facebook cos Logout
		}
	});
};

(function(d, s, id){
	 var js, fjs = d.getElementsByTagName(s)[0];
	 if (d.getElementById(id)) {return;}
	 js = d.createElement(s); js.id = id;
	 js.src = "//connect.facebook.net/en_US/sdk.js";
	 fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
 