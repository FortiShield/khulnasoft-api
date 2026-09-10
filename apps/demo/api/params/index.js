"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.params = void 0;
var khulnasoft_1 = require("../../libs/khulnasoft");
var retrieve_1 = require("./retrieve");
exports.params = khulnasoft_1.khulnasoft.resource({
  summary: "Param parsing tests",
  // internal: true,
  actions: {
    retrieve: retrieve_1.retrieve,
  },
});
