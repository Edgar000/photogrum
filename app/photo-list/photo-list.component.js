export default {
    template: require('./photo-list.template.html'),
    bindings: {
        userData: '<'
    },
    controller: PhotoListController
};

export function PhotoListController() {
    'ngInject';
    const vm = this;

    activate();
    function  activate() {
        vm.user = vm.userData;
    }
}
