export default {
    template: require('./photo-item.template.html'),
    bindings: {
        userData: '<',
        user: '<',
        photo: '<'
    },
    controller: PhotoItemController
};

export function PhotoItemController(ratingCountService) {
    'ngInject';
    const vm = this;

    vm.ratingInc = ratingCountService.ratingInc;
    vm.ratingDec = ratingCountService.ratingDec;
}
