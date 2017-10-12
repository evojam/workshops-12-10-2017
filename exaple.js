const Market = require('./dist/index.js')
const https = require('https')

const market = new Market()
market.hello()
market.logOpeningPrice()