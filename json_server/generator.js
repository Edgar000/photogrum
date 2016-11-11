module.exports = function () {
    var faker = require('faker');
    var lodash = require('lodash');
    return {
        users: lodash.times(10, function (n) {
            return {
                id: n,
                mail: faker.internet.email(),
                name: faker.name.findName(),
                avatarUrl: faker.image.avatar(),
                regDate: faker.date.past(5),
                photos: lodash.times(6, function (n) {
                    return {
                        photoId: n,
                        photoUrl: faker.image.avatar(),
                        photoDescription: faker.lorem.sentence(),
                        ratingCount: faker.random.number({min:-10, max:10})
                    }
                })
            }
        })
    }
};
