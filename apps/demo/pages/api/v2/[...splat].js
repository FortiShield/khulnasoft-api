"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = require("../../../api/api");
var next_1 = require("@khulnasoft-api/next");
exports.default = (0, next_1.khulnasoftNextPageCatchAllRouter)(api_1.api, {
  catchAllParam: "splat",
  basePathMap: { "/api/": "/api/v2/" },
});
