const Person = require('./person')
const Coin = require('./person')
const Exchange = require('./person')

//list of buyers

var enrico = new Person ('Enrico', 31, 'USA')
var sharon = new Person ('Sharon', 27, 'Great Britain')
var linda = new Person ('Linda', 24, 'France') 
var marcus = new Person ('Marcus', 29, 'Germany') 

// list of coins

var btc = new Coin ("Bitcoin")
var eth = new Coin ("Ethereum")
var ltc = new Coin ("Litecoin") 
var xmr = new Coin ("Monero") 

 //list of exchanges

var coinbase = new Exchange ('Coinbase')
var binance = new Exchange ('Binance')
var poloniex = new Exchange ('Poloniex') 

//interactions

enrico.add(btc) 
sharon.add(eth)
linda.add(ltc)
marcus.add(xmr)

enrico.buy(coinbase) 
sharon.buy(binance) 
linda.buy(poloniex)
marcus.buy(coinbase)
