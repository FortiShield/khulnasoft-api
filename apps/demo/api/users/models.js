"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSelection = exports.User = void 0;
var models_1 = require("../posts/models");
var models_2 = require("../comments/models");
var models_3 = require("../notifications/models");
var khulnasoft_1 = require("khulnasoft");
var prismadb_1 = __importDefault(require("../../libs/prismadb"));
var User0 = khulnasoft_1.z.response({
  id: khulnasoft_1.z.string().uuid(),
  name: khulnasoft_1.z.string().nullable().optional(),
  username: khulnasoft_1.z.string().nullable().optional(),
  bio: khulnasoft_1.z.string().nullable().optional(),
  email: khulnasoft_1.z.string().nullable().optional(),
  emailVerified: khulnasoft_1.z.date().nullable().optional(),
  image: khulnasoft_1.z.string().nullable().optional(),
  coverImage: khulnasoft_1.z.string().nullable().optional(),
  profileImage: khulnasoft_1.z.string().nullable().optional(),
  hashedPassword: khulnasoft_1.z.string().nullable().optional(),
  createdAt: khulnasoft_1.z.date(),
  updatedAt: khulnasoft_1.z.date(),
  followingIds: khulnasoft_1.z.array(khulnasoft_1.z.string().uuid()),
  hasNotification: khulnasoft_1.z.boolean().nullable().optional(),
  followersCount: khulnasoft_1.z.number().optional(),
});
var User1 = User0.extend({
  posts: khulnasoft_1.z
    .array(
      khulnasoft_1.z.lazy(function () {
        return models_1.Post;
      })
    )
    .includable(),
  posts_fields: khulnasoft_1.z
    .array(
      khulnasoft_1.z.lazy(function () {
        return models_1.PostSelection;
      })
    )
    .selectable(),
  comments: khulnasoft_1.z
    .array(
      khulnasoft_1.z.lazy(function () {
        return models_2.Comment;
      })
    )
    .includable(),
  comments_fields: khulnasoft_1.z
    .array(
      khulnasoft_1.z.lazy(function () {
        return models_2.CommentSelection;
      })
    )
    .selectable(),
  notifications: khulnasoft_1.z
    .array(
      khulnasoft_1.z.lazy(function () {
        return models_3.Notification;
      })
    )
    .includable(),
  notifications_fields: khulnasoft_1.z
    .array(
      khulnasoft_1.z.lazy(function () {
        return models_3.NotificationSelection;
      })
    )
    .selectable(),
});
exports.User = User1.prismaModel(prismadb_1.default.user);
exports.UserSelection = exports.User.selection();
