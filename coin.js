module.exports = class Coin {
    constructor(abbreviation) {
        this.abbreviation = abbreviation
        this.buyers = []
        this.exchanges = []
    }

    transaction(exchange) {
        this.exchanges.push(exchange)
        exchange.coins.push(this.abbreviation)
    }
}
