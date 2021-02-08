var _Reflect$construct = require("@babel/runtime-corejs3/core-js-stable/reflect/construct");

var _forEachInstanceProperty2 = require("@babel/runtime-corejs3/core-js-stable/instance/for-each");

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@babel/runtime-corejs3/core-js-stable/instance/for-each", "@babel/runtime-corejs3/helpers/inherits", "@babel/runtime-corejs3/helpers/possibleConstructorReturn", "@babel/runtime-corejs3/helpers/getPrototypeOf", "@babel/runtime-corejs3/helpers/classCallCheck", "./md"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"), require("@babel/runtime-corejs3/helpers/inherits"), require("@babel/runtime-corejs3/helpers/possibleConstructorReturn"), require("@babel/runtime-corejs3/helpers/getPrototypeOf"), require("@babel/runtime-corejs3/helpers/classCallCheck"), require("./md"));
  } else {
    var mod = {
      exports: {}
    };
    factory(_forEachInstanceProperty2(global), global.inherits, global.possibleConstructorReturn, global.getPrototypeOf, global.classCallCheck, global.md);
    global.index = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_forEach, _inherits2, _possibleConstructorReturn2, _getPrototypeOf2, _classCallCheck2, _md) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

  _forEach = _interopRequireDefault(_forEach);
  _inherits2 = _interopRequireDefault(_inherits2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf2);
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(_Reflect$construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  var Zzh = function Zzh() {
    (0, _classCallCheck2["default"])(this, Zzh);
    this.name = '123';
  };

  var Jc = /*#__PURE__*/function (_Zzh) {
    (0, _inherits2["default"])(Jc, _Zzh);

    var _super = _createSuper(Jc);

    function Jc() {
      (0, _classCallCheck2["default"])(this, Jc);
      return _super.call(this); // this.name = '456';
    }

    return Jc;
  }(Zzh);

  var zzh = new Zzh();
  var zzy = new Jc();
  var arr = ['ddd', 'eeeee'];
  console.log(zzh.name);
  console.log(zzy.name);
  (0, _forEach["default"])(arr).call(arr, function (item) {
    console.log(item);
  });
  (0, _md.ybfn)();
});