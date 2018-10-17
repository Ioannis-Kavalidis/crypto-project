// create a person class

var Person = class {
       constructor (name, age, country) {
         this.name = name
         this.age = age
         this.country = country
         this.coins = []
         this.exchanges = []
       }

       hold(coin) {
          this.coins.push(coin)
          coin.buyers.push(this) 
       }

       buy(exchange) {
           this.exchanges.push(exchange)
           exchange.buyers.push(this)
       }
}

//list of buyers

var buyer1 = new Person ('Enrico', 31, 'USA')
var buyer2 = new Person ('Sharon', 27, 'Great Britain')
var buyer3 = new Person ('Linda', 24, 'France') 
var buyer4 = new Person ('Marcus', 29, 'Germany') 

// create a coin class

var Coin = class {
    constructor(abbreviation) {
        this.abbreviation = abbreviation
        this.buyers = []
        this.exchanges = []
    }

    transaction(exchange) {
        this.exchanges.push(exchange)
        exchange.coins.push(this)
    }
}

// list of coins

var btc = new Coin ("Bitcoin")
var eth = new Coin ("Ethereum")
var ltc = new Coin ("Litecoin") 
var xmr = new Coin ("Monero") 


// create an exchange class

var Exchange = class{
    constructor(name) {
        this.name = name 
        this.buyers=[] 
        this.coins=[] 
    }
 }

 //list of exchanges

var coinbase = new Exchange ('Coinbase')
var binance = new Exchange ('Binance')
var poloniex = new Exchange ('Poloniex') 

//interactions

buyer1.hold(btc) 
buyer2.hold(eth)
buyer3.hold(ltc)
buyer4.hold(xmr)


buyer1.buy(coinbase) 
buyer2.buy(binance) 
buyer3.buy(poloniex)
buyer4.buy(coinbase)
