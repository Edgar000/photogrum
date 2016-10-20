export default {
    templateUrl: './app/user-list/user-list.template.html',
    controller: ['$http',
        function UserListController($http) {
            var self = this;
            $http({
                method: 'GET',
                url: 'http://localhost:3000/users'
            }).then((response) =>
                self.users = response.data
            );
            this.orderProp = '-regDate';
        }
    ]
};
