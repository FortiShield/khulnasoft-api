"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var comments_1 = require("../../api/comments");
var next_1 = require("@khulnasoft-api/next");
exports.default = (0, next_1.khulnasoftNextPageRoute)(
  comments_1.comments.actions.create
);
