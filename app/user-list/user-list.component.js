'use strict';

angular.
module('userList').
component('userList', {
    templateUrl: 'user-list/user-list.template.html',
    controller: ['$http',
        function UserListController($http) {
            var self = this;
            $http({
                method: 'GET',
                url: 'http://localhost:3000/users'
            }).then(function (response) {
                self.users = response.data;
            });
            this.orderProp = '-regDate';
        }
    ]
});