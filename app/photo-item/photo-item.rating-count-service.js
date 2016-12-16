export default function RatingCountService($stateParams, userDataService) {
    'ngInject';

    this.ratingInc = (user, photo) => {
        ratingUpdate(user, photo, (photo.ratingCount += 1));
    };
    this.ratingDec = (user, photo) => {
        ratingUpdate(user, photo, (photo.ratingCount -= 1));
    };

    function ratingUpdate(user, photo, rating) {
        user.photos[photo.photoId].ratingCount = rating;
        userDataService.update({userId: $stateParams.userId}, user);
    }
}
