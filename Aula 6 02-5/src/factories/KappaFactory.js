const Shirt = require('../products/Shirt');

class KappaFactory {
    createShirt() {
        return new Shirt('Kappa', 'Vasco');
    }
}

module.exports = KappaFactory;