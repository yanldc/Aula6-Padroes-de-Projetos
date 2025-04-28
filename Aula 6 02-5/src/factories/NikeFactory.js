const Shirt = require('../products/Shirt');

class NikeFactory {
    createShirt() {
        return new Shirt('Nike', 'Brasil');
    }
}

module.exports = NikeFactory;