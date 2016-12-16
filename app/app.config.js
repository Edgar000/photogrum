export default ($locationProvider, $stateProvider, $urlRouterProvider) => {
    'ngInject';

    $locationProvider.hashPrefix('!');

    $stateProvider
        .state('users', {
            url: '/users',
            template: '<pg-user-list></pg-user-list>'
        })
        .state('user', {
            url: '/users/:userId',
            template: '<pg-user-profile></pg-user-profile>'
        })
        .state('registration', {
            url: '/registration',
            template: '<pg-registration-page></pg-registration-page>'
        })
        .state('login', {
            url: '/login',
            template: ''
        })
        .state('dashboard', {
            url: '/dashboard',
            template: '<pg-dashboard></pg-dashboard>'
        })
        .state('photo-item', {
            url: '/users/:userId/photos/:photoId',
            component: 'pgPhotoItem',
            resolve: {
                userData: ($stateParams, userDataService) => {
                    return userDataService.get({userId: $stateParams.userId}).$promise;
                }
            }
        })
        .state('photo-list', {
            url: '/users/:userId/photos',
            component: 'pgPhotoList',
            resolve: {
                userData: ($stateParams, userDataService) => {
                    return userDataService.get({userId: $stateParams.userId}).$promise;
                }
            }
        });

    $urlRouterProvider.otherwise('/dashboard');
};
