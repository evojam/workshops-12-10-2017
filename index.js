#!/usr/bin/env node
'use strict'

import commander from 'commander'
const https = require('https');

class Market {
  hello() {
    console.log('hello')
  }

  getPrice(companySymbol) {
    return new Promise((resolve, reject) => {
      https.get(`https://api.iextrading.com/1.0/stock/${companySymbol}/price`, (response) => {
        response.setEncoding('utf8')
        response.on('data', resolve)
        response.on('error', reject)
      });
    })
  }

  async getPrices(...companies) {
    return await Promise.all(
      companies.map(company => this.getPrice(company))
    )
  }

  async logOpeningPrices() {
    console.log(...await this.getPrices('aapl', 'acrx', 'HMNY'))
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
