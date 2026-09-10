"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var swr_1 = __importDefault(require("swr"));
var client_1 = require("../api/client");
var useUsers = function () {
  var client = (0, client_1.useClient)();
  var _a = (0, swr_1.default)("users-list", function () {
      return client.users.list({ pageSize: 3 });
    }),
    data = _a.data,
    error = _a.error,
    isLoading = _a.isLoading,
    mutate = _a.mutate;
  return {
    data: data === null || data === void 0 ? void 0 : data.items,
    error: error,
    isLoading: isLoading,
    mutate: mutate,
  };
};
exports.default = useUsers;
