export default {
    template: require('./user-list.template.html'),
    controller: UserListController
};

export function UserListController($http) {
    'ngInject';
    const vm = this;
    activate();

    function activate() {
        $http.get('http://localhost:3000/users')
            .then(({data}) => {
                vm.users = data;
            });
        vm.orderProp = '-regDate';
    }
}
