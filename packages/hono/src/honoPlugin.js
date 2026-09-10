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
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.khulnasoftApi = khulnasoftApi;
var factory_1 = require("hono/factory");
var qs_1 = __importDefault(require("qs"));
var khulnasoft_1 = require("khulnasoft");
var routeMatcher_1 = require("./routeMatcher");
var methods = ["GET", "HEAD", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"];
function makeHandler(endpoints, options) {
  var _this = this;
  var _a;
  var khulnasoft =
    (_a = endpoints[0]) === null || _a === void 0 ? void 0 : _a.khulnasoft;
  if (!khulnasoft) {
    throw new Error("endpoints[0].khulnasoft must be defined");
  }
  var routeMatcher = (0, routeMatcher_1.makeRouteMatcher)(endpoints);
  return (0, factory_1.createMiddleware)(function (c, next) {
    return __awaiter(_this, void 0, void 0, function () {
      var match,
        search,
        enabledMethods,
        _a,
        endpoint,
        path,
        server,
        context,
        params,
        _b,
        _c,
        result,
        error_1;
      var _d;
      return __generator(this, function (_e) {
        switch (_e.label) {
          case 0:
            _e.trys.push([0, 5, , 6]);
            match = routeMatcher.match(c.req.method, c.req.path);
            search = new URL(c.req.url).search;
            if (!!(0, routeMatcher_1.isValidRouteMatch)(match))
              return [3 /*break*/, 2];
            enabledMethods = methods.filter(function (method) {
              return (0,
              routeMatcher_1.isValidRouteMatch)(routeMatcher.match(method, c.req.path));
            });
            if (enabledMethods.length) {
              return [
                2 /*return*/,
                c.json(
                  {
                    message: "No handler for "
                      .concat(c.req.method, "; only ")
                      .concat(
                        enabledMethods
                          .map(function (x) {
                            return x.toUpperCase();
                          })
                          .join(", "),
                        "."
                      ),
                  },
                  { status: 405 }
                ),
              ];
            }
            if (
              (options === null || options === void 0
                ? void 0
                : options.handleErrors) !== false
            ) {
              throw new khulnasoft_1.NotFoundError();
            }
            return [4 /*yield*/, next()];
          case 1:
            _e.sent();
            return [2 /*return*/];
          case 2:
            (_a = match[0][0]), (endpoint = _a[0]), (path = _a[1]);
            server = {
              type: "hono",
              args: [c],
            };
            context = khulnasoft.initContext({
              endpoint: endpoint,
              headers: c.req.header(),
              server: server,
            });
            _c = (_b = khulnasoft).initParams;
            _d = {
              path: path,
              query: search
                ? qs_1.default.parse(search.replace(/^\?/, ""))
                : {},
            };
            return [
              4 /*yield*/,
              c.req.raw
                .clone()
                .json()
                .catch(function () {
                  return undefined;
                }),
            ];
          case 3:
            params = _c.apply(_b, [
              // Don't use up the raw body in case the handler needs to use it:
              ((_d.body = _e.sent()), (_d.headers = c.req.header()), _d),
            ]);
            return [4 /*yield*/, khulnasoft.execute(params, context)];
          case 4:
            result = _e.sent();
            if (result instanceof Response) {
              return [2 /*return*/, result];
            }
            return [2 /*return*/, c.json(result)];
          case 5:
            error_1 = _e.sent();
            if (
              (options === null || options === void 0
                ? void 0
                : options.handleErrors) === false
            ) {
              throw error_1;
            }
            if ((0, khulnasoft_1.isKhulnasoftError)(error_1)) {
              return [
                2 /*return*/,
                c.json(error_1.response, error_1.statusCode),
              ];
            }
            console.error(
              "ERROR in ".concat(c.req.method, " ").concat(c.req.url, ":"),
              error_1 instanceof Error ? error_1.stack : error_1
            );
            return [
              2 /*return*/,
              c.json(
                { error: error_1, details: "Failed to handle the request." },
                500
              ),
            ];
          case 6:
            return [2 /*return*/];
        }
      });
    });
  });
}
function khulnasoftApi(_a, options) {
  var topLevel = _a.topLevel,
    resources = _a.resources;
  return makeHandler(
    (0, khulnasoft_1.allEndpoints)({
      actions:
        topLevel === null || topLevel === void 0 ? void 0 : topLevel.actions,
      namespacedResources: resources,
    }),
    options
  );
}
