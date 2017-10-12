#!/usr/bin/env node
'use strict'

import commander from 'commander'
const https = require('https');

class Market {
  hello() {
    console.log('hello')
  }

  getMarketPrice() {
    return new Promise((resolve, reject) => {
      https.get('https://api.iextrading.com/1.0/stock/aapl/price', (response) => {
        response.setEncoding('utf8')
        response.on('data', resolve)
        response.on('error', reject)
      });
    })
  }

  async logOpeningPrice() {
    console.log(await this.getMarketPrice())
  }
}

commander
  .option('-r, --run', 'Run program')
  .parse(process.argv)

if (commander.run) {
  const market = new Market()
  market.hello()
}

module.exports = Market
