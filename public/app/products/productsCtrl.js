app.controller('productsCtrl', ['$scope', '$http', '$location', function($scope, $http, $location){
	
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
			}, function myError(response){
				console.log(response);
			});	
		}
	};

	$scope.editProduct = function (productId) {
		// if(form.$valid) {
			$http({
				method:'POST',
				url:"http://localhost:8080/myapi/product/" + productId,
				data:{'name':$scope.name, 'price':$scope.price}
			}).then(function mySuccess(response) {
				$scope.successResponse = response.data.message;
				$scope.message = "success";
				$scope.showSuccessAlert = true;
			}, function myError(response){
				console.log(response);
			});	
		// }
	};

	$scope.deleteProduct = function (productId) {
		console.log("Docs deleting ...")
		// if(form.$valid) {
			$http({
				method:'delete',
				url:"http://localhost:8080/myapi/product/" + productId,
			}).then(function mySuccess(response) {
				$scope.successResponse = response.data.message;
				$scope.message = "danger";
				$scope.showSuccessAlert = true;
			}, function myError(response){
				console.log(response);
			});	
		// }
	};
	
}])

// // public/core.js
// var scotchTodo = angular.module('scotchTodo', []);

// function mainController($scope, $http) {
//     $scope.formData = {};

//     // when landing on the page, get all todos and show them
//     $http.get('/api/todos')
//         .success(function(data) {
//             $scope.todos = data;
//             console.log(data);
//         })
//         .error(function(data) {
//             console.log('Error: ' + data);
//         });

//     // when submitting the add form, send the text to the node API
//     $scope.createTodo = function() {
//         $http.post('/api/todos', $scope.formData)
//             .success(function(data) {
//                 $scope.formData = {}; // clear the form so our user is ready to enter another
//                 $scope.todos = data;
//                 console.log(data);
//             })
//             .error(function(data) {
//                 console.log('Error: ' + data);
//             });
//     };

//     // delete a todo after checking it
//     $scope.deleteTodo = function(id) {
//         $http.delete('/api/todos/' + id)
//             .success(function(data) {
//                 $scope.todos = data;
//                 console.log(data);
//             })
//             .error(function(data) {
//                 console.log('Error: ' + data);
//             });
//     };

// }
// // 