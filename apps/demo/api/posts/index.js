"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.posts = void 0;
var khulnasoft_1 = require("../../libs/khulnasoft");
var create_1 = require("./create");
var list_1 = require("./list");
var retrieve_1 = require("./retrieve");
var models_1 = require("./models");
exports.posts = khulnasoft_1.khulnasoft.resource({
  summary: "Posts; the tweets of this twitter clone",
  internal: false,
  models: {
    Post: models_1.Post,
    PostPage: models_1.PostPage,
    PostSelection: models_1.PostSelection,
  },
  actions: {
    create: create_1.create,
    list: list_1.list,
    retrieve: retrieve_1.retrieve,
  },
});
