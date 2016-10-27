export default {
    template: require('./user-profile.template.html'),
    controller: UserProfileController
};

export function UserProfileController($http, $stateParams) {
    'ngInject';
    const vm = this;
    activate();

    function activate(){
        $http.get(`http://localhost:3000/user${$stateParams.userId}`) // TODO: make this user/0
            .then(({data}) => {
                vm.user = data;
            });
    }
}
