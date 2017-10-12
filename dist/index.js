#!/usr/bin/env node

'use strict';

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Market = function () {
  function Market() {
    (0, _classCallCheck3.default)(this, Market);
  }

  (0, _createClass3.default)(Market, [{
    key: 'hello',
    value: function hello() {
      console.log('hello');
    }
  }]);
  return Market;
}();

_commander2.default.option('-r, --run', 'Run program').parse(process.argv);

if (_commander2.default.run) {
  var market = new Market();
  market.hello();
}

module.exports = Market;