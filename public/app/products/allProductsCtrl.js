app.controller('allProductsCtrl', ['$scope', '$http', '$location', function($scope, $http, $location){
	
	$scope.location = function () {
		$location.path('/add');
	}

	$scope.initialize = function() {
		$http({
			method:'GET',
			url:"secure/users/"
		}).then(function mySuccess(response) {
			$scope.productData = response.data.docs;
		}, function myError(response){
			console.log(response);
		});	
	}


	// $scope.submit = function (form) {
	// 	if(form.$valid) {
	// 		$http({
	// 			method:'POST',
	// 			url:"secure/user",
	// 			data: $scope.user
	// 		}).then(function mySuccess(response) {
	// 			$scope.successResponse = response.data.message;
	// 			$location.path('/')
	// 		}, function myError(response){
	// 			console.log(response);
	// 		});	
	// 	}
	// };

	

	$scope.editProduct = function (productId) {
		$location.path('/edit/' + productId);
	};

	$scope.deleteProduct = function (productId) {
		$http({
			method:'delete',
			url:"secure/user/" + productId,
		}).then(function mySuccess(response) {
			$scope.initialize();
			$scope.successResponse = response.data.message;
		}, function myError(response){
			console.log(response);
		});	
	};
	
}])
