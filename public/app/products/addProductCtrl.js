app.controller('addProductCtrl', ['$scope', '$http', '$location', function($scope, $http, $location){
	
	$scope.submit = function () {
		// if(form.$valid) {
			$http({
				method:'POST',
				url:"http://localhost:8080/myapi/product/",
				data: {"name":$scope.name,"price":Number($scope.price)}
			}).then(function mySuccess(response) {
				$location.path('/')
			}, function myError(response){
				console.log(response);
			});	
		// }
	};

}])
