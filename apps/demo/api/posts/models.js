"use strict";
var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError(
          "Class extends value " + String(b) + " is not a constructor or null"
        );
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostPage =
  exports.PostSelection =
  exports.Post =
  exports.PostIdLoader =
  exports.PostResponse =
  exports.IncludableCommentsFieldSchema =
  exports.IncludableCommentsSchema =
  exports.SelectableUserSchema =
  exports.IncludableUserSchema =
    void 0;
var models_1 = require("../users/models");
var models_2 = require("../comments/models");
var prismadb_1 = __importDefault(require("../../libs/prismadb"));
var khulnasoft_1 = require("../../libs/khulnasoft");
var khulnasoft_2 = require("khulnasoft");
var prisma_1 = require("@khulnasoft-api/prisma");
var models_3 = require("../../.khulnasoft-codegen/api/posts/models");
exports.IncludableUserSchema = khulnasoft_2.z
  .lazy(function () {
    return models_1.User;
  })
  .includable();
exports.SelectableUserSchema = khulnasoft_2.z
  .lazy(function () {
    return models_1.UserSelection;
  })
  .selectable();
exports.IncludableCommentsSchema = khulnasoft_2.z
  .array(
    khulnasoft_2.z.lazy(function () {
      return models_2.Comment;
    })
  )
  .includable();
exports.IncludableCommentsFieldSchema = khulnasoft_2.z
  .array(
    khulnasoft_2.z.lazy(function () {
      return models_2.CommentSelection;
    })
  )
  .selectable();
var PostResponse = /** @class */ (function (_super) {
  __extends(PostResponse, _super);
  function PostResponse() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.model = prismadb_1.default.post;
    return _this;
  }
  return PostResponse;
})(prisma_1.PrismaModel);
exports.PostResponse = PostResponse;
var PostIdLoader = /** @class */ (function (_super) {
  __extends(PostIdLoader, _super);
  function PostIdLoader() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.model = prismadb_1.default.post;
    return _this;
  }
  return PostIdLoader;
})(prisma_1.PrismaModelLoader);
exports.PostIdLoader = PostIdLoader;
exports.Post = khulnasoft_1.khulnasoft.codegenSchema(models_3.PostResponse);
exports.PostSelection = exports.Post.selection();
exports.PostPage = khulnasoft_2.z.pageResponse(exports.Post);
