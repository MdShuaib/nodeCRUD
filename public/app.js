var app = angular.module('productApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
	when("/add", {
		templateUrl: "app/products/addProducts.html", 
		controller: "addProductCtrl"
	})

	.when("/edit/:id", {
		templateUrl: "app/products/editProducts.html", 
		controller: "editProductCtrl"
	})
	
	
	.otherwise({
		templateUrl: "app/products/allProducts.html", 
		controller: "allProductsCtrl"
	});
}]);