
var app = angular.module('testapp', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/index.html',
			controller: 'MainController'
		})
		.when('/select', {
			templateUrl: 'views/select.html',
			controller: 'SelectController'
		})
		.when('/add', {
			templateUrl: 'views/add.html',
			controller: 'AddController'
		})
		.otherwise({
			redirectTo: '/'
		});
});

app.controller('MainController', function($scope) {
	$scope.info = 'Это главнейшая страница!!!';
});

app.controller('SelectController', function($scope) {
	$scope.items = [
		'Иванов',
		'Петров',
		'Сидоров'
	];
});


app.controller('AddController', function($scope) {
	$scope.info = 'Сдесь вы можете добавить абонента.';
});