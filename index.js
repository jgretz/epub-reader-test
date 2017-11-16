'use strict';

var _nodeBits = require('node-bits');

var _nodeBits2 = _interopRequireDefault(_nodeBits);

var _nodeBitsExpress = require('node-bits-express');

var _nodeBitsExpress2 = _interopRequireDefault(_nodeBitsExpress);

var _nodeBitsCode = require('node-bits-code');

var _nodeBitsCode2 = _interopRequireDefault(_nodeBitsCode);

var _nodeBitsSpa = require('node-bits-spa');

var _nodeBitsSpa2 = _interopRequireDefault(_nodeBitsSpa);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _nodeBits2.default)([(0, _nodeBitsExpress2.default)({
  port: 4004,
  configurations: [(0, _nodeBitsExpress.accessControl)(), (0, _nodeBitsExpress.cors)(), (0, _nodeBitsExpress.bodyParser)({}), function (app) {
    app.use('/books', _express2.default.static(_path2.default.join(__dirname, 'books')));
  }]
}), (0, _nodeBitsCode2.default)({
  path: '' + __dirname
}), (0, _nodeBitsSpa2.default)({ path: __dirname + '/site' })]);