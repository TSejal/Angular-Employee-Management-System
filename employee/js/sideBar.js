myApp.controller('SideBarCtrl', function($scope){

    $scope.sidebarLinks = [
        {
            id : 1,
            'text': 'List Employee',
            'url' : '/'
        },
        {
            id : 2,
            'text': 'Add Employee',
            'url' : '/'
        },{
            id : 3,
            'text': 'About',
            'url' : '/'
        }       
    ]

});