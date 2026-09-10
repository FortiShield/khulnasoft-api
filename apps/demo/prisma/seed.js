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
var client_1 = require(".prisma/client");
var faker_1 = require("@faker-js/faker");
var lodash_1 = require("lodash");
var testdata_json_1 = __importDefault(require("./testdata.json"));
var prisma = new client_1.PrismaClient();
function main() {
  return __awaiter(this, void 0, void 0, function () {
    var _this = this;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [
            4 /*yield*/,
            prisma.$transaction(function (prisma) {
              return __awaiter(_this, void 0, void 0, function () {
                var users, _loop_1, _i, users_1, user;
                return __generator(this, function (_a) {
                  switch (_a.label) {
                    case 0:
                      return [
                        4 /*yield*/,
                        prisma.user.createMany({
                          data: testdata_json_1.default.users,
                        }),
                      ];
                    case 1:
                      _a.sent();
                      return [
                        4 /*yield*/,
                        prisma.post.createMany({
                          data: testdata_json_1.default.posts,
                        }),
                      ];
                    case 2:
                      _a.sent();
                      return [
                        4 /*yield*/,
                        prisma.comment.createMany({
                          data: testdata_json_1.default.comments,
                        }),
                      ];
                    case 3:
                      _a.sent();
                      return [
                        4 /*yield*/,
                        prisma.user.createMany({
                          data: (0, lodash_1.range)(10).map(function () {
                            return {
                              name: faker_1.faker.name.fullName(),
                              username: faker_1.faker.name.firstName(),
                              email: faker_1.faker.internet.email(),
                            };
                          }),
                        }),
                      ];
                    case 4:
                      _a.sent();
                      return [
                        4 /*yield*/,
                        prisma.user.findMany({
                          where: {
                            id: {
                              notIn: testdata_json_1.default.users.map(
                                function (u) {
                                  return u.id;
                                }
                              ),
                            },
                          },
                        }),
                      ];
                    case 5:
                      users = _a.sent();
                      _loop_1 = function (user) {
                        var posts, _loop_2, _b, _c, post;
                        return __generator(this, function (_d) {
                          switch (_d.label) {
                            case 0:
                              return [
                                4 /*yield*/,
                                prisma.user.update({
                                  where: { id: user.id },
                                  data: {
                                    followingIds: (0, lodash_1.sampleSize)(
                                      users,
                                      5
                                    ).map(function (u) {
                                      return u.id;
                                    }),
                                  },
                                }),
                              ];
                            case 1:
                              _d.sent();
                              return [
                                4 /*yield*/,
                                prisma.post.createMany({
                                  data: (0, lodash_1.range)(200).map(
                                    function () {
                                      return {
                                        userId: user.id,
                                        body: faker_1.faker.lorem.sentences(),
                                      };
                                    }
                                  ),
                                }),
                              ];
                            case 2:
                              _d.sent();
                              return [
                                4 /*yield*/,
                                prisma.post.findMany({
                                  where: { userId: user.id },
                                }),
                              ];
                            case 3:
                              posts = _d.sent();
                              _loop_2 = function (post) {
                                return __generator(this, function (_e) {
                                  switch (_e.label) {
                                    case 0:
                                      return [
                                        4 /*yield*/,
                                        prisma.comment.createMany({
                                          data: (0, lodash_1.range)(5).map(
                                            function () {
                                              return {
                                                postId: post.id,
                                                userId: (0, lodash_1.sample)(
                                                  users
                                                ).id,
                                                body: faker_1.faker.lorem.sentence(),
                                              };
                                            }
                                          ),
                                        }),
                                      ];
                                    case 1:
                                      _e.sent();
                                      return [2 /*return*/];
                                  }
                                });
                              };
                              (_b = 0),
                                (_c = (0, lodash_1.sampleSize)(
                                  posts,
                                  Math.floor(posts.length / 4)
                                ));
                              _d.label = 4;
                            case 4:
                              if (!(_b < _c.length)) return [3 /*break*/, 7];
                              post = _c[_b];
                              return [5 /*yield**/, _loop_2(post)];
                            case 5:
                              _d.sent();
                              _d.label = 6;
                            case 6:
                              _b++;
                              return [3 /*break*/, 4];
                            case 7:
                              return [2 /*return*/];
                          }
                        });
                      };
                      (_i = 0), (users_1 = users);
                      _a.label = 6;
                    case 6:
                      if (!(_i < users_1.length)) return [3 /*break*/, 9];
                      user = users_1[_i];
                      return [5 /*yield**/, _loop_1(user)];
                    case 7:
                      _a.sent();
                      _a.label = 8;
                    case 8:
                      _i++;
                      return [3 /*break*/, 6];
                    case 9:
                      return [2 /*return*/];
                  }
                });
              });
            }),
          ];
        case 1:
          _a.sent();
          return [2 /*return*/];
      }
    });
  });
}
main()
  .then(function () {
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4 /*yield*/, prisma.$disconnect()];
          case 1:
            _a.sent();
            return [2 /*return*/];
        }
      });
    });
  })
  .catch(function (e) {
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            console.error(e);
            return [4 /*yield*/, prisma.$disconnect()];
          case 1:
            _a.sent();
            process.exit(1);
            return [2 /*return*/];
        }
      });
    });
  });
