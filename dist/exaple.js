'use strict';

var Market = require('./dist/index.js');
var https = require('https');

var market = new Market();
market.hello();
market.logOpeningPrices();