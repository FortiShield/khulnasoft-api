"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logged = logged;
var util_1 = require("util");
function logged(t) {
  console.log((0, util_1.inspect)(t, { depth: 5 }));
  return t;
}
