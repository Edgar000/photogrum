module.exports = function config($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.
    when('/users', {
        template: '<user-list></user-list>'
    }).
    when('/users/:userId', {
        template: '<user-profile></user-profile>'
    }).
    otherwise('/users');
};
