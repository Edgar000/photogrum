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
                regDate: faker.date.past(5)
            }
        }),

        user0: {
            id: 0,
            photos: lodash.times(6, function (n) {
                return {
                    photoId: n,
                    photoUrl: faker.image.avatar()
                }
            })
        },
        user1: {
            id: 1,
            photos: lodash.times(6, function (n) {
                return {
                    photoId: n,
                    photoUrl: faker.image.avatar()
                }
            })
        },
        user2: {
            id: 2,
            photos: lodash.times(6, function (n) {
                return {
                    photoId: n,
                    photoUrl: faker.image.avatar()
                }
            })
        },
        user3: {
            id: 3,
            photos: lodash.times(6, function (n) {
                return {
                    photoId: n,
                    photoUrl: faker.image.avatar()
                }
            })
        },
        user4: {
            id: 4,
            photos: lodash.times(6, function (n) {
                return {
                    photoId: n,
                    photoUrl: faker.image.avatar()
                }
            })
        },
        user5: {
            id: 5,
            photos: lodash.times(6, function (n) {
                return {
                    photoId: n,
                    photoUrl: faker.image.avatar()
                }
            })
        },
        user6: {
            id: 6,
            photos: lodash.times(6, function (n) {
                return {
                    photoId: n,
                    photoUrl: faker.image.avatar()
                }
            })
        },
        user7: {
            id: 7,
            photos: lodash.times(6, function (n) {
                return {
                    photoId: n,
                    photoUrl: faker.image.avatar()
                }
            })
        },
        user8: {
            id: 8,
            photos: lodash.times(6, function (n) {
                return {
                    photoId: n,
                    photoUrl: faker.image.avatar()
                }
            })
        },
        user9: {
            id: 9,
            photos: lodash.times(6, function (n) {
                return {
                    photoId: n,
                    photoUrl: faker.image.avatar()
                }
            })
        }
    }
};
