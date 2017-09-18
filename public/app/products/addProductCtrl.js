app.controller('addProductCtrl', ['$scope', '$http', '$location', '$uibModalInstance', function($scope, $http, $location, $uibModalInstance){
	
	$scope.addUser = function () {
		// if(form.$valid) {
			$http({
				method:'POST',
				url:"secure/user",
				data: $scope.user
			}).then(function mySuccess(response) {
				console.log(response);
				$location.path('/')
			}, function myError(response){
				console.log(response);
			});	
		// }
	};

	$scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    };
}])


