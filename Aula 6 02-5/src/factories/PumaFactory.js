const Shirt = require('../products/Shirt');

class PumaFactory {
    createShirt() {
        return new Shirt('Puma', 'Botafogo');
    }
}

module.exports = PumaFactory;