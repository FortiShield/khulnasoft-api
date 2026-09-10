"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = void 0;
var khulnasoft_1 = require("khulnasoft");
var khulnasoft_2 = require("../libs/khulnasoft");
var users_1 = require("./users");
var posts_1 = require("./posts");
var params_1 = require("./params");
var comments_1 = require("./comments");
exports.api = khulnasoft_2.khulnasoft.api({
  basePath: "/api",
  openapi: {
    endpoint: "GET /api/openapi",
  },
  resources: {
    users: users_1.users,
    posts: posts_1.posts,
    comments: comments_1.comments,
    params: params_1.params,
    test: khulnasoft_2.khulnasoft.resource({
      summary: "test",
      internal: false,
      actions: {
        foo: khulnasoft_2.khulnasoft.endpoint({
          endpoint: "PUT /api/foo/{value}",
          path: khulnasoft_1.z.path({
            value: khulnasoft_1.z.coerce.number(khulnasoft_1.z.string()),
          }),
          response: khulnasoft_1.z.response({
            foo: khulnasoft_1.z.number(),
          }),
          handler: function (_a) {
            var value = _a.value;
            return { foo: value };
          },
        }),
      },
    }),
  },
});
