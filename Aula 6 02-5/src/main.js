const readline = require('readline');
const ProductFactory = require('./factories/ProductFactory');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Escolha um time (Brasil, Flamengo, Botafogo, Fluminense, Vasco): ', (team) => {
    try {
        const factory = ProductFactory.getFactory(team);
        const shirt = factory.createShirt();
        console.log(shirt.getShirtInfo());
    } catch (error) {
        console.log(error.message);
    }

    rl.close();
});