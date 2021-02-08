var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@babel/runtime-corejs3/regenerator", "@babel/runtime-corejs3/helpers/asyncToGenerator", "@babel/runtime-corejs3/core-js-stable/set-timeout", "@babel/runtime-corejs3/core-js-stable/promise"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@babel/runtime-corejs3/regenerator"), require("@babel/runtime-corejs3/helpers/asyncToGenerator"), require("@babel/runtime-corejs3/core-js-stable/set-timeout"), require("@babel/runtime-corejs3/core-js-stable/promise"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.regenerator, global.asyncToGenerator, global.setTimeout, global.promise);
    global.md = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _regenerator, _asyncToGenerator2, _setTimeout2, _promise) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

  _Object$defineProperty(_exports, "__esModule", {
    value: true
  });

  _exports.ybfn = ybfn;
  _regenerator = _interopRequireDefault(_regenerator);
  _asyncToGenerator2 = _interopRequireDefault(_asyncToGenerator2);
  _setTimeout2 = _interopRequireDefault(_setTimeout2);
  _promise = _interopRequireDefault(_promise);
  var yb = new _promise["default"](function (resolve, reject) {
    (0, _setTimeout2["default"])(function () {
      console.log('dddddddddd');
      resolve();
    }, 3000);
  });

  function ybfn() {
    return _ybfn.apply(this, arguments);
  }

  function _ybfn() {
    _ybfn = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return yb;

            case 2:
              console.log('enednednednen');

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _ybfn.apply(this, arguments);
  }
});