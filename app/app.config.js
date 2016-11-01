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
            template: '<registration-page></registration-page>'
        })
        .state('login', {
            url: '/login',
            template: ''
        })
        .state('dashboard', {
            url: '/dashboard',
            template: '<dashboard></dashboard>'
        })
        .state('photos', {
            url: '/photos',
            template: ''
        });

    $urlRouterProvider.otherwise('/dashboard');
};
