app.controller('editProductCtrl', ['$scope', '$http', '$location', '$routeParams',  function($scope, $http, $location, $routeParams){
	
	$scope.getProductById = function() {
		$http({
			method:'GET',
			url:"http://localhost:8080/myapi/product/" + $routeParams.id,
		}).then(function mySuccess(response) {
			$scope.productById = response.data.doc
		}, function myError(response){
			console.log(response);
		});	
	}
	$scope.updateProduct = function (form) {
		if(form.$valid) {
			$http({
				method:'PUT',
				url:"http://localhost:8080/myapi/product/" + $routeParams.id,
				data: $scope.productById
			}).then(function mySuccess(response) {
				$location.path('/')
			}, function myError(response){
				console.log(response);
			});	
		}
	};


}])