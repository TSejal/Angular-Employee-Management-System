var myApp = angular.module('empApp', []);

myApp.controller('EmpListCtrl', function($scope, $http){
 
      console.log("EmpListCtrl loaded...");
      $scope.employee = {name: '', phone: ''}; 
      $scope.employess = [];

      function _init(){
        _getEmployees(); 
      };
      _init();

      function _getEmployees(){
        $http.get('http://localhost:3000/employees').then(function(response){
            console.log(response);
            $scope.employess = response.data;
            
          }, function(response){
            console.log(response);
          });
      }  

      $scope.addEmployee = function(){
          console.log($scope.employee);
          $http.post("http://localhost:3000/employees", $scope.employee).then(function(response){           
            _getEmployees(); 
            $scope.employee = {name: '', phone: ''}; 
          }, function(response){
            console.log(response);
          });
      }

      $scope.deleteEmployee = function(emp){
        console.log("Inside delete...");
        $http.delete('http://localhost:3000/employees/'+emp.id).then(function(response){
            _getEmployees();     
            alert("Employee deleted!");
          }, function(response){
            console.log(response);
          });        
      }

      

});


