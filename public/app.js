var app = angular.module('productApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
	when("/add", {
		templateUrl: "app/products/addProducts.html", 
		controller: "productsCtrl"
	})
	
	.otherwise({
		templateUrl: "app/products/allProducts.html", 
		controller: "productsCtrl"
	});
}]);