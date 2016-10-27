export default ($locationProvider, $stateProvider, $urlRouterProvider) => {
    'ngInject';

    $locationProvider.hashPrefix('!');

    $stateProvider
        .state('users', {
            url: '/users',
            template: '<user-list></user-list>'
        })
        .state('user', {
            url: '/users/:userId',
            template: '<user-profile></user-profile>'
        })
        .state('registration', {
            url: '/registration',
            template: ''
        })
        .state('login', {
            url: '/login',
            template: ''
        })
        .state('dashboard', {
            url: '/dashboard',
            template: ''
        })
        .state('photos', {
            url: '/photos',
            template: ''
        });

    $urlRouterProvider.otherwise('/users');
};
