"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var users_1 = require("../../../api/users");
var next_1 = require("@khulnasoft-api/next");
exports.default = (0, next_1.khulnasoftNextPageRoute)(
  users_1.users.actions.list
);
