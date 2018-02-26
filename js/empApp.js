var app=angular.module("empApp",['angularUtils.directives.dirPagination']);
app.controller("empCtrl",function($scope,$http){
    console.log("Angular is loaded....");
    $scope.employeess={id:'',name:'',age:'',department:'',currentEmp:''};
    $scope.employee=[];
    $scope.emps=[];
    $scope.emps=$scope.employeess;
    function _init(){
       _getEmployee();
    }
    _init();
    function _getEmployee(){
        $http.get("http://localhost:3000/employees", 
    ).then(function(response){
        console.log(response);
        $scope.employee=response.data;
      //  console.log("geting employees");
        },function(response){
            console.log(response);
        })
    }

    $scope.sort=function(key){
        $scope.sortKey=key;
        $scope.reverse=!$scope.reverse;
    }

    $scope.addEmployee= function(){
        console.log($scope.employeess);
        $http.post("http://localhost:3000/employees/",$scope.employeess).then(function(response){
           _getEmployee();
            $scope.employeess={id:'',name:'',age:'',department:'',currentEmp:''};
            alert("Employee added successfully....");
          //  console.log("Adding into json");
        }, function(response){
            console.log(response);
        })
    }

    $scope.deleteEmployee = function(emp){
        $http.delete('http://localhost:3000/employees/'+emp.id).then(function(response){
            _getEmployee();
            alert("Employee Deleted!!!");
        },function(response){
            console.log(response);
        });
    }

    $scope.editEmployee=function(emps){
        _getEmployee();
        console.log("id : ",emps.id);
       $http.get("http://localhost:3000/employees/"+emps.id).then(function(response){
        console.log("id inside get : ",emps.id);
            $scope.emps=response.data;
            },function(response){
                console.log(response);
            })
        $http({
            method: 'PUT',
            url: 'http://localhost:3000/employees/'+ emps.id,
            data: $scope.emps
        }).then(function(response){
            _getEmployee();
            $scope.employeess={id:'',name:'',age:'',department:'',currentEmp:''};
        },function(response){
            console.log(response);
        })

    }


    $scope.logIn = function () {
        if($scope.userid==='admin' && $scope.psw==='123')
        {
           location="./index.html";
        }
        else{
            alert("Enter valid user id & password");
        }

    }



    $scope.showList = function () {
        $scope.showlist = true;
        $scope.showadd = false;
        $scope.showabout = false;
    }


    $scope.showAdd = function () {
        $scope.showlist = false;
        $scope.showadd = true;
        $scope.showabout = false;
    }

    $scope.showAbout = function () {
        $scope.showlist = false;
        $scope.showadd = false;
        $scope.showabout = true;
    }

});
