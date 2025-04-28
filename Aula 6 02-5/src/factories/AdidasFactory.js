const Shirt = require('../products/Shirt');

class AdidasFactory {
    createShirt() {
        return new Shirt('Adidas', 'Flamengo');
    }
}

module.exports = AdidasFactory;