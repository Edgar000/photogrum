export default function RatingCountService($stateParams, userDataService) {
    this.ratingInc = (user, photo) => {
        ratingUpdate(user, (photo.ratingCount += 1));
    };
    this.ratingDec = (user, photo) => {
        ratingUpdate(user, (photo.ratingCount -= 1));
    };

    function ratingUpdate(user, rating) {
        user.photos[$stateParams.photoId].ratingCount = rating;
        userDataService.update({userId: $stateParams.userId}, user);
    }
}
