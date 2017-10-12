#!/usr/bin/env node

'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var https = require('https');

var Market = function () {
  function Market() {
    (0, _classCallCheck3.default)(this, Market);
  }

  (0, _createClass3.default)(Market, [{
    key: 'hello',
    value: function hello() {
      console.log('hello');
    }
  }, {
    key: 'getMarketPrice',
    value: function getMarketPrice() {
      return new Promise(function (resolve, reject) {
        https.get('https://api.iextrading.com/1.0/stock/aapl/price', function (response) {
          response.setEncoding('utf8');
          response.on('data', resolve);
          response.on('error', reject);
        });
      });
    }
  }, {
    key: 'logOpeningPrice',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.t0 = console;
                _context.next = 3;
                return this.getMarketPrice();

              case 3:
                _context.t1 = _context.sent;

                _context.t0.log.call(_context.t0, _context.t1);

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function logOpeningPrice() {
        return _ref.apply(this, arguments);
      }

      return logOpeningPrice;
    }()
  }]);
  return Market;
}();

_commander2.default.option('-r, --run', 'Run program').parse(process.argv);

if (_commander2.default.run) {
  var market = new Market();
  market.hello();
}

module.exports = Market;