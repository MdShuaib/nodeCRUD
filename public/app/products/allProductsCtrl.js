app.controller('allProductsCtrl', ['$scope', '$http', '$location', function($scope, $http, $location){
	
	$scope.location = function () {
		$location.path('/add');
	}

	$scope.initialize = function() {
		$http({
			method:'GET',
			url:"http://localhost:8080/myapi/products/"
		}).then(function mySuccess(response) {
			$scope.productData = response.data.docs;
		}, function myError(response){
			console.log(response);
		});	
	}


	$scope.submit = function (form) {
		if(form.$valid) {
			$http({
				method:'POST',
				url:"http://localhost:8080/myapi/product/",
				data:{'name':$scope.name, 'price':$scope.price}
			}).then(function mySuccess(response) {
				$scope.successResponse = response.data.message;
				$scope.message = "success";
				$scope.showSuccessAlert = true;
				$location.path('/')
			}, function myError(response){
				console.log(response);
			});	
		}
	};

	

	$scope.editProduct = function (productId) {
		$location.path('/edit/' + productId);
	};

	$scope.deleteProduct = function (productId) {
		$http({
			method:'delete',
			url:"http://localhost:8080/myapi/product/" + productId,
		}).then(function mySuccess(response) {
			$scope.initialize();
			$scope.successResponse = response.data.message;
			$scope.message = "danger";
			$scope.showSuccessAlert = true;
		}, function myError(response){
			console.log(response);
		});	
	};
	
}])
