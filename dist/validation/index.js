"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddressValidation = exports.UserValidation = undefined;

var _UserValidation = require("./UserValidation");

var UserValidation = _interopRequireWildcard(_UserValidation);

var _AddressValidation = require("./AddressValidation.js");

var AddressValidation = _interopRequireWildcard(_AddressValidation);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.UserValidation = UserValidation;
exports.AddressValidation = AddressValidation;