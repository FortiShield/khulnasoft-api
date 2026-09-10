"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g = Object.create(
        (typeof Iterator === "function" ? Iterator : Object).prototype
      );
    return (
      (g.next = verb(0)),
      (g["throw"] = verb(1)),
      (g["return"] = verb(2)),
      typeof Symbol === "function" &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while ((g && ((g = 0), op[0] && (_ = 0)), _))
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y["return"]
                  : op[0]
                  ? y["throw"] || ((t = y["return"]) && t.call(y), 0)
                  : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
Object.defineProperty(exports, "__esModule", { value: true });
var hono_1 = require("hono");
var khulnasoft_1 = require("khulnasoft");
var vitest_1 = require("vitest");
var honoPlugin_1 = require("./honoPlugin");
var khulnasoft = new khulnasoft_1.Khulnasoft({ plugins: {} });
(0, vitest_1.describe)("basic routing", function () {
  var api = khulnasoft.api({
    basePath: "/api",
    resources: {
      posts: khulnasoft.resource({
        summary: "posts",
        actions: {
          retrieve: khulnasoft.endpoint({
            endpoint: "GET /api/posts/:postId",
            path: khulnasoft_1.z.object({
              postId: khulnasoft_1.z.coerce.number(),
            }),
            query: khulnasoft_1.z.object({
              expand: khulnasoft_1.z.string().array().optional(),
            }),
            response: khulnasoft_1.z.object({
              postId: khulnasoft_1.z.coerce.number(),
            }),
            handler: function (params) {
              return params;
            },
          }),
          update: khulnasoft.endpoint({
            endpoint: "POST /api/posts/:postId",
            path: khulnasoft_1.z.object({
              postId: khulnasoft_1.z.coerce.number(),
            }),
            body: khulnasoft_1.z.object({ content: khulnasoft_1.z.string() }),
            response: khulnasoft_1.z.object({
              postId: khulnasoft_1.z.coerce.number(),
              content: khulnasoft_1.z.string(),
            }),
            handler: function (params) {
              return params;
            },
          }),
          list: khulnasoft.endpoint({
            endpoint: "GET /api/posts",
            response: khulnasoft_1.z.any().array(),
            handler: function () {
              return [];
            },
          }),
        },
      }),
      comments: khulnasoft.resource({
        summary: "comments",
        actions: {
          retrieve: khulnasoft.endpoint({
            endpoint: "GET /api/comments/:commentId",
            path: khulnasoft_1.z.object({
              commentId: khulnasoft_1.z.coerce.number(),
            }),
            response: khulnasoft_1.z.object({
              commentId: khulnasoft_1.z.coerce.number(),
            }),
            handler: function (params) {
              return params;
            },
          }),
          update: khulnasoft.endpoint({
            endpoint: "POST /api/comments/:commentId",
            path: khulnasoft_1.z.object({
              commentId: khulnasoft_1.z.coerce.number(),
            }),
            handler: function () {
              throw new khulnasoft_1.UnauthorizedError();
            },
          }),
        },
      }),
    },
  });
  var app = new hono_1.Hono();
  app.use("*", (0, honoPlugin_1.khulnasoftApi)(api));
  (0, vitest_1.test)("list posts", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var response, _a;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            return [4 /*yield*/, app.request("/api/posts")];
          case 1:
            response = _b.sent();
            (0, vitest_1.expect)(response).toHaveProperty("status", 200);
            _a = vitest_1.expect;
            return [4 /*yield*/, response.json()];
          case 2:
            _a.apply(void 0, [_b.sent()]).toMatchInlineSnapshot(
              "\n      []\n    "
            );
            return [2 /*return*/];
        }
      });
    });
  });
  (0, vitest_1.test)("retrieve posts", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var response, _a;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            return [4 /*yield*/, app.request("/api/posts/5")];
          case 1:
            response = _b.sent();
            (0, vitest_1.expect)(response).toHaveProperty("status", 200);
            _a = vitest_1.expect;
            return [4 /*yield*/, response.json()];
          case 2:
            _a.apply(void 0, [_b.sent()]).toMatchInlineSnapshot(
              '\n      {\n        "postId": 5,\n      }\n    '
            );
            return [2 /*return*/];
        }
      });
    });
  });
  (0, vitest_1.test)("retrieve posts, wrong method", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var response, _a;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            return [
              4 /*yield*/,
              app.request("/api/posts/5", {
                method: "PUT",
              }),
            ];
          case 1:
            response = _b.sent();
            (0, vitest_1.expect)(response).toHaveProperty("status", 405);
            _a = vitest_1.expect;
            return [4 /*yield*/, response.json()];
          case 2:
            _a.apply(void 0, [_b.sent()]).toMatchInlineSnapshot(
              '\n      {\n        "message": "No handler for PUT; only GET, POST.",\n      }\n    '
            );
            return [2 /*return*/];
        }
      });
    });
  });
  (0, vitest_1.test)("update posts", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var response, _a;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            return [
              4 /*yield*/,
              app.request("/api/posts/5", {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify({ content: "hello" }),
              }),
            ];
          case 1:
            response = _b.sent();
            (0, vitest_1.expect)(response).toHaveProperty("status", 200);
            _a = vitest_1.expect;
            return [4 /*yield*/, response.json()];
          case 2:
            _a.apply(void 0, [_b.sent()]).toMatchInlineSnapshot(
              '\n      {\n        "content": "hello",\n        "postId": 5,\n      }\n    '
            );
            return [2 /*return*/];
        }
      });
    });
  });
  (0, vitest_1.test)("update posts, wrong content type", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var response, _a;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            return [
              4 /*yield*/,
              app.request("/api/posts/5", {
                method: "POST",
                headers: {
                  "content-type": "text/plain",
                },
                body: "hello",
              }),
            ];
          case 1:
            response = _b.sent();
            (0, vitest_1.expect)(response).toHaveProperty("status", 400);
            _a = vitest_1.expect;
            return [4 /*yield*/, response.json()];
          case 2:
            _a.apply(void 0, [_b.sent()]).toMatchInlineSnapshot(
              '\n      {\n        "error": "bad request",\n        "issues": [\n          {\n            "code": "invalid_type",\n            "expected": "object",\n            "message": "Required",\n            "path": [\n              "<body>",\n            ],\n            "received": "undefined",\n          },\n        ],\n        "message": "Required at "<body>"",\n      }\n    '
            );
            return [2 /*return*/];
        }
      });
    });
  });
  (0, vitest_1.test)("update posts, missing param", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var response, _a;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            return [
              4 /*yield*/,
              app.request("/api/posts/5", {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify({}),
              }),
            ];
          case 1:
            response = _b.sent();
            (0, vitest_1.expect)(response).toHaveProperty("status", 400);
            _a = vitest_1.expect;
            return [4 /*yield*/, response.json()];
          case 2:
            _a.apply(void 0, [_b.sent()]).toMatchInlineSnapshot(
              '\n      {\n        "error": "bad request",\n        "issues": [\n          {\n            "code": "invalid_type",\n            "expected": "string",\n            "message": "Required",\n            "path": [\n              "<body>",\n              "content",\n            ],\n            "received": "undefined",\n          },\n        ],\n        "message": "Validation error: Required at "<body>.content"",\n      }\n    '
            );
            return [2 /*return*/];
        }
      });
    });
  });
  (0, vitest_1.test)("retrieve comments", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var response, _a;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            return [4 /*yield*/, app.request("/api/comments/3")];
          case 1:
            response = _b.sent();
            (0, vitest_1.expect)(response).toHaveProperty("status", 200);
            _a = vitest_1.expect;
            return [4 /*yield*/, response.json()];
          case 2:
            _a.apply(void 0, [_b.sent()]).toMatchInlineSnapshot(
              '\n      {\n        "commentId": 3,\n      }\n    '
            );
            return [2 /*return*/];
        }
      });
    });
  });
  (0, vitest_1.test)("not found", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var response, _a;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            return [4 /*yield*/, app.request("/api/not-found")];
          case 1:
            response = _b.sent();
            (0, vitest_1.expect)(response).toHaveProperty("status", 404);
            _a = vitest_1.expect;
            return [4 /*yield*/, response.json()];
          case 2:
            _a.apply(void 0, [_b.sent()]).toMatchInlineSnapshot(
              '\n      {\n        "error": "not found",\n      }\n    '
            );
            return [2 /*return*/];
        }
      });
    });
  });
  (0, vitest_1.test)("throwing inside handler", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var response, _a;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            return [
              4 /*yield*/,
              app.request("/api/comments/3", {
                method: "POST",
              }),
            ];
          case 1:
            response = _b.sent();
            (0, vitest_1.expect)(response).toHaveProperty("status", 401);
            _a = vitest_1.expect;
            return [4 /*yield*/, response.json()];
          case 2:
            _a.apply(void 0, [_b.sent()]).toMatchInlineSnapshot(
              '\n      {\n        "error": "unauthorized",\n      }\n    '
            );
            return [2 /*return*/];
        }
      });
    });
  });
});
(0, vitest_1.describe)("hono passthrough", function () {
  var baseApi = khulnasoft.api({
    basePath: "/api",
    resources: {
      posts: khulnasoft.resource({
        summary: "posts",
        actions: {
          retrieve: khulnasoft.endpoint({
            endpoint: "GET /api/posts",
            handler: function () {
              throw new Error("arbitrary error");
            },
          }),
          create: khulnasoft.endpoint({
            endpoint: "POST /api/posts",
            body: khulnasoft_1.z.any(),
            response: khulnasoft_1.z.any(),
            handler: function (body, context) {
              return __awaiter(void 0, void 0, void 0, function () {
                var c;
                var _a;
                return __generator(this, function (_b) {
                  switch (_b.label) {
                    case 0:
                      c = context.server.args[0];
                      _a = { bodyKhulnasoft: body };
                      return [4 /*yield*/, c.req.raw.text()];
                    case 1:
                      return [2 /*return*/, ((_a.bodyRaw = _b.sent()), _a)];
                  }
                });
              });
            },
          }),
        },
      }),
      redirect: khulnasoft.resource({
        summary: "redirect",
        actions: {
          retrieve: khulnasoft.endpoint({
            endpoint: "GET /api/redirect",
            response: khulnasoft_1.z.any(),
            handler: function (_, context) {
              var c = context.server.args[0];
              return c.redirect("/");
            },
          }),
        },
      }),
    },
  });
  var app = new hono_1.Hono();
  app.use(
    "*",
    (0, honoPlugin_1.khulnasoftApi)(baseApi, { handleErrors: false })
  );
  app.all("/public/*", function (c) {
    return c.text("public content", 200);
  });
  app.notFound(function (c) {
    return c.text("custom not found", 404);
  });
  app.onError(function (err, c) {
    return c.text("custom error: ".concat(err.message), 500);
  });
  (0, vitest_1.test)("hono response", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var response;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4 /*yield*/, app.request("/api/redirect")];
          case 1:
            response = _a.sent();
            (0, vitest_1.expect)(response).toHaveProperty("status", 302);
            (0, vitest_1.expect)(
              response.headers.get("location")
            ).toMatchInlineSnapshot('"/"');
            return [2 /*return*/];
        }
      });
    });
  });
  (0, vitest_1.test)("public passthrough", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var response, _a;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            return [4 /*yield*/, app.request("/public/foo/bar")];
          case 1:
            response = _b.sent();
            (0, vitest_1.expect)(response).toHaveProperty("status", 200);
            _a = vitest_1.expect;
            return [4 /*yield*/, response.text()];
          case 2:
            _a.apply(void 0, [_b.sent()]).toMatchInlineSnapshot(
              '"public content"'
            );
            return [2 /*return*/];
        }
      });
    });
  });
  (0, vitest_1.test)("not found passthrough", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var response, _a;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            return [4 /*yield*/, app.request("/api/comments")];
          case 1:
            response = _b.sent();
            (0, vitest_1.expect)(response).toHaveProperty("status", 404);
            _a = vitest_1.expect;
            return [4 /*yield*/, response.text()];
          case 2:
            _a.apply(void 0, [_b.sent()]).toMatchInlineSnapshot(
              '"custom not found"'
            );
            return [2 /*return*/];
        }
      });
    });
  });
  (0, vitest_1.test)("error passthrough", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var response, _a;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            return [4 /*yield*/, app.request("/api/posts")];
          case 1:
            response = _b.sent();
            (0, vitest_1.expect)(response).toHaveProperty("status", 500);
            _a = vitest_1.expect;
            return [4 /*yield*/, response.text()];
          case 2:
            _a.apply(void 0, [_b.sent()]).toMatchInlineSnapshot(
              '"custom error: arbitrary error"'
            );
            return [2 /*return*/];
        }
      });
    });
  });
  (0, vitest_1.test)("request passthrough", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var response, _a;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            return [
              4 /*yield*/,
              app.request("/api/posts", {
                method: "POST",
                body: JSON.stringify({ message: "hello" }),
              }),
            ];
          case 1:
            response = _b.sent();
            (0, vitest_1.expect)(response).toHaveProperty("status", 200);
            _a = vitest_1.expect;
            return [4 /*yield*/, response.json()];
          case 2:
            _a.apply(void 0, [_b.sent()]).toMatchInlineSnapshot(
              '\n      {\n        "bodyRaw": "{"message":"hello"}",\n        "bodyKhulnasoft": {\n          "message": "hello",\n        },\n      }\n    '
            );
            return [2 /*return*/];
        }
      });
    });
  });
});
