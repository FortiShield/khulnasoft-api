"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.comments = void 0;
var khulnasoft_1 = require("../../libs/khulnasoft");
var create_1 = require("./create");
var models_1 = require("./models");
exports.comments = khulnasoft_1.khulnasoft.resource({
  summary: "comments",
  internal: false,
  models: {
    Comment: models_1.Comment,
    CommentSelection: models_1.CommentSelection,
  },
  actions: {
    create: create_1.create,
  },
});
