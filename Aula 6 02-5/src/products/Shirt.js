class Shirt {
    constructor(brand, team) {
        this.brand = brand;
        this.team = team;
    }

    getShirtInfo() {
        return `Camisa da marca ${this.brand} para o time ${this.team}`;
    }
}

module.exports = Shirt;