"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var swr_1 = __importDefault(require("swr"));
var fetcher_1 = __importDefault(require("../libs/fetcher"));
var useUser = function (userId) {
  var _a = (0, swr_1.default)(
      userId ? "/api/users/".concat(userId) : null,
      fetcher_1.default
    ),
    data = _a.data,
    error = _a.error,
    isLoading = _a.isLoading,
    mutate = _a.mutate;
  return {
    data: data,
    error: error,
    isLoading: isLoading,
    mutate: mutate,
  };
};
exports.default = useUser;
