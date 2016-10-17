module.exports = {
    templateUrl: 'user-profile/user-profile.template.html',
    controller: ['$http', '$routeParams',
        function UserProfileController($http, $routeParams) {
            var self = this;
            $http({
                method: 'GET',
                url: 'http://localhost:3000/user' + $routeParams.userId
            }).then(function (response) {
                self.user = response.data;
            });
        }
    ]
};
