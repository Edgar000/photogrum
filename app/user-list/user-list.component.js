export default {
    templateUrl: './app/user-list/user-list.template.html',
    controller: function UserListController($http) {
        'ngInject';
        var self = this;
        $http({
            method: 'GET',
            url: 'http://localhost:3000/users'
        }).then((response) =>
            self.users = response.data
        );
        this.orderProp = '-regDate';
    }
};
