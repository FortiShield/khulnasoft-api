"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OPTIONS =
  exports.DELETE =
  exports.PATCH =
  exports.PUT =
  exports.POST =
  exports.HEAD =
  exports.GET =
    void 0;
var api_1 = require("../../../../api/api");
var next_1 = require("@khulnasoft-api/next");
var _a = (0, next_1.khulnasoftNextAppCatchAllRouter)(api_1.api, {
    catchAllParam: "splat",
    basePathMap: { "/api/": "/api/v3/" },
  }),
  GET = _a.GET,
  HEAD = _a.HEAD,
  POST = _a.POST,
  PUT = _a.PUT,
  PATCH = _a.PATCH,
  DELETE = _a.DELETE,
  OPTIONS = _a.OPTIONS;
exports.GET = GET;
exports.HEAD = HEAD;
exports.POST = POST;
exports.PUT = PUT;
exports.PATCH = PATCH;
exports.DELETE = DELETE;
exports.OPTIONS = OPTIONS;
