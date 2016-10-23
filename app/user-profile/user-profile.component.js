export default {
    template: require('./user-profile.template.html'),
    controller: function UserProfileController($http, $routeParams) {
        'ngInject';
        var self = this;
        $http({
            method: 'GET',
            url: 'http://localhost:3000/user' + $routeParams.userId
        }).then((response) =>
            self.user = response.data
        );
    }
};
