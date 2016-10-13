module.exports = function() {
    var faker = require('faker');
    var lodash = require('lodash');
    return {
        users: lodash.times(10, function(n){
            return {
                id: n,
                mail: faker.internet.email(),
                name: faker.name.findName(),
                avatarUrl: faker.image.avatar(),
                regDate: faker.date.past(5)
            }
        })
    }
};