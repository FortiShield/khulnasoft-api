"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = void 0;
var khulnasoft_1 = require("../../libs/khulnasoft");
var list_1 = require("./list");
var retrieve_1 = require("./retrieve");
var models_1 = require("./models");
var models_2 = require("../notifications/models");
exports.users = khulnasoft_1.khulnasoft.resource({
  summary: "Users",
  internal: false,
  models: {
    User: models_1.User,
    UserSelection: models_1.UserSelection,
    Notification: models_2.Notification,
    NotificationSelection: models_2.NotificationSelection,
  },
  actions: {
    list: list_1.list,
    retrieve: retrieve_1.retrieve,
  },
});
