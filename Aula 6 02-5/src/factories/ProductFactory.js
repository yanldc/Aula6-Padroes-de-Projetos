const NikeFactory = require('./NikeFactory');
const AdidasFactory = require('./AdidasFactory');
const PumaFactory = require('./PumaFactory');
const UmbroFactory = require('./UmbroFactory');
const KappaFactory = require('./KappaFactory');

class ProductFactory {
    static getFactory(team) {
        switch (team) {
            case 'Brasil':
                return new NikeFactory();
            case 'Flamengo':
                return new AdidasFactory();
            case 'Botafogo':
                return new PumaFactory();
            case 'Fluminense':
                return new UmbroFactory();
            case 'Vasco':
                return new KappaFactory();
            default:
                throw new Error('Time não encontrado!');
        }
    }
}

module.exports = ProductFactory;