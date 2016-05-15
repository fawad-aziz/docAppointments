var app = angular.module('docApp', [
	'ngRoute', 'ngAnimate', 'ui.bootstrap'
]);

app
	.config([
		'$routeProvider',
		function ($routeProvider) {
			$routeProvider.
				when('/', {
					templateUrl: 'views/main.html'
				}).
				when('/contactus', {
					templateUrl: 'views/contactus.html'
				}).
				when('/appointments', {
					templateUrl: 'views/appointment.html'
				});
		}
	]);