#!/usr/bin/env node
'use strict'

import commander from 'commander'

class Market  {
  hello() {
    console.log('hello')
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
