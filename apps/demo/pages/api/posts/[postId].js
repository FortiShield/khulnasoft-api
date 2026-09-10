"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var posts_1 = require("../../../api/posts");
var next_1 = require("@khulnasoft-api/next");
exports.default = (0, next_1.khulnasoftNextPageRoute)(
  posts_1.posts.actions.retrieve
);
