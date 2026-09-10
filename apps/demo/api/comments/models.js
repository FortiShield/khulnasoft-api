"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentSelection = exports.Comment = void 0;
var models_1 = require("../users/models");
var models_2 = require("../posts/models");
var khulnasoft_1 = require("khulnasoft");
var prismadb_1 = __importDefault(require("../../libs/prismadb"));
var Comment0 = khulnasoft_1.z.response({
  id: khulnasoft_1.z.string().uuid(),
  body: khulnasoft_1.z.string(),
  createdAt: khulnasoft_1.z.date(),
  updatedAt: khulnasoft_1.z.date(),
  userId: khulnasoft_1.z.string().uuid(),
  postId: khulnasoft_1.z.string().uuid(),
});
var Comment1 = Comment0.extend({
  user: khulnasoft_1.z
    .lazy(function () {
      return models_1.User;
    })
    .includable(),
  user_fields: khulnasoft_1.z
    .lazy(function () {
      return models_1.UserSelection;
    })
    .selectable(),
  post: khulnasoft_1.z
    .lazy(function () {
      return models_2.Post;
    })
    .includable(),
  post_fields: khulnasoft_1.z
    .lazy(function () {
      return models_2.PostSelection;
    })
    .selectable(),
});
exports.Comment = Comment1.prismaModel(prismadb_1.default.comment);
exports.CommentSelection = exports.Comment.selection();
