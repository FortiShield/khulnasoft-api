"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationSelection =
  exports.Notification =
  exports.Notification0 =
    void 0;
var models_1 = require("../users/models");
var khulnasoft_1 = require("khulnasoft");
var prismadb_1 = __importDefault(require("../../libs/prismadb"));
exports.Notification0 = khulnasoft_1.z.response({
  id: khulnasoft_1.z.string().uuid(),
  body: khulnasoft_1.z.string(),
  createdAt: khulnasoft_1.z.date(),
  userId: khulnasoft_1.z.string().uuid(),
});
var Notification1 = exports.Notification0.extend({
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
});
exports.Notification = Notification1.prismaModel(
  prismadb_1.default.notification
);
exports.NotificationSelection = exports.Notification.selection();
