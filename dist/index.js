#!/usr/bin/env node

'use strict';

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

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
    key: 'getPrice',
    value: function getPrice(companySymbol) {
      return new Promise(function (resolve, reject) {
        https.get('https://api.iextrading.com/1.0/stock/' + companySymbol + '/price', function (response) {
          response.setEncoding('utf8');
          response.on('data', resolve);
          response.on('error', reject);
        });
      });
    }
  }, {
    key: 'getPrices',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var _this = this;

        for (var _len = arguments.length, companies = Array(_len), _key = 0; _key < _len; _key++) {
          companies[_key] = arguments[_key];
        }

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Promise.all(companies.map(function (company) {
                  return _this.getPrice(company);
                }));

              case 2:
                return _context.abrupt('return', _context.sent);

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getPrices() {
        return _ref.apply(this, arguments);
      }

      return getPrices;
    }()
  }, {
    key: 'logOpeningPrices',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        var _console;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.t0 = (_console = console).log;
                _context2.t1 = _console;
                _context2.t2 = _toConsumableArray3.default;
                _context2.next = 5;
                return this.getPrices('aapl', 'acrx', 'HMNY');

              case 5:
                _context2.t3 = _context2.sent;
                _context2.t4 = (0, _context2.t2)(_context2.t3);

                _context2.t0.apply.call(_context2.t0, _context2.t1, _context2.t4);

              case 8:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function logOpeningPrices() {
        return _ref2.apply(this, arguments);
      }

      return logOpeningPrices;
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