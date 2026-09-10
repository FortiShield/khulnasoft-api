"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = exports.GET = void 0;
var create_1 = require("../../../../api/posts/create");
var list_1 = require("../../../../api/posts/list");
var next_1 = require("@khulnasoft-api/next");
var routerOptions = {
  basePathMap: { "/api/": "/api/v4/" },
};
exports.GET = (0, next_1.khulnasoftNextAppRoute)(list_1.list, routerOptions);
exports.POST = (0, next_1.khulnasoftNextAppRoute)(
  create_1.create,
  routerOptions
);
