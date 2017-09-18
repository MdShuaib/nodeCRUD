app.controller('editProductCtrl', ['$scope', '$http', '$location', '$routeParams',  function($scope, $http, $location, $routeParams){
	
	$scope.getProductById = function() {
		$http({
			method:'GET',
			url:"secure/user/" + $routeParams.id,
		}).then(function mySuccess(response) {
			$scope.productById = response.data.doc
		}, function myError(response){
			console.log(response);
		});	
	}
	$scope.updateProduct = function () {
		// if(form.$valid) {
			$http({
				method:'PUT',
				url:"secure/user/" + $routeParams.id,
				data: $scope.productById
			}).then(function mySuccess(response) {
				$location.path('/')
			}, function myError(response){
				console.log(response);
			});	
		// }
	};


}])