const Shirt = require('../products/Shirt');

class UmbroFactory {
    createShirt() {
        return new Shirt('Umbro', 'Fluminense');
    }
}

module.exports = UmbroFactory;