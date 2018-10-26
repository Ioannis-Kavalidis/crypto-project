module.exports = class Person {
    constructor(name, age, country) {
        this.name = name
        this.age = age
        this.country = country
        this.coins = []
        this.exchanges = []
    }

    add(coin) {
        this.coins.push(coin)
        coin.buyers.push(this.name)
    }

    buy(exchange) {
        this.exchanges.push(exchange)
        exchange.buyers.push(this.name)
    }
}
