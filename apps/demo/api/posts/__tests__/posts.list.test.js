"use strict";
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
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
var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (
          e.indexOf(p[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(s, p[i])
        )
          t[p[i]] = s[p[i]];
      }
    return t;
  };
Object.defineProperty(exports, "__esModule", { value: true });
var testClient_1 = require("../../testClient");
var lodash_1 = require("lodash");
describe("/api/posts", function () {
  // @todo: get includable working again!
  it.skip("pagination", function () {
    return __awaiter(this, void 0, void 0, function () {
      var firstPage, secondPage, _a;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            return [
              4 /*yield*/,
              testClient_1.testClient.posts.list({
                userId: "187f77f6-5570-40ae-84f7-bcd28fab78a2",
                sortBy: "id",
                pageSize: 3,
              }),
            ];
          case 1:
            firstPage = _b.sent();
            expect(firstPage.data).toMatchInlineSnapshot(
              '\n      {\n        "endCursor": "IjAzNGNlOTA1LWZkMGQtNDA5Yi1hMDZhLTAyNDAyNDAxYjg0YiI=",\n        "hasNextPage": true,\n        "items": [\n          {\n            "body": "Nemo beatae natus. Nostrum cumque quod modi deleniti voluptatum. Provident quasi esse autem amet. Saepe maiores eveniet possimus exercitationem iusto optio cupiditate quasi. Eligendi ab perferendis earum hic.",\n            "createdAt": "2023-05-22T22:17:14.338Z",\n            "id": "003031b5-6157-4b35-9d11-3e8b9b8745f3",\n            "image": null,\n            "likedIds": [],\n            "updatedAt": "2023-05-22T22:17:14.338Z",\n            "userId": "187f77f6-5570-40ae-84f7-bcd28fab78a2",\n          },\n          {\n            "body": "Fugit doloremque voluptatum harum neque facere ducimus enim. Atque molestiae veritatis natus repellat. Non reiciendis asperiores exercitationem incidunt iure sint doloribus. Dicta eaque sequi mollitia at error iste fugit quae. Sit cum vitae veritatis incidunt quasi explicabo neque.",\n            "createdAt": "2023-05-22T22:17:14.338Z",\n            "id": "0284c330-a9ef-4a09-ae97-d0e0afdf0a1d",\n            "image": null,\n            "likedIds": [],\n            "updatedAt": "2023-05-22T22:17:14.338Z",\n            "userId": "187f77f6-5570-40ae-84f7-bcd28fab78a2",\n          },\n          {\n            "body": "Explicabo doloribus ipsam reiciendis laboriosam magni veniam voluptate. Molestias molestiae a iusto occaecati repellat.",\n            "createdAt": "2023-05-22T22:17:14.338Z",\n            "id": "034ce905-fd0d-409b-a06a-02402401b84b",\n            "image": null,\n            "likedIds": [],\n            "updatedAt": "2023-05-22T22:17:14.338Z",\n            "userId": "187f77f6-5570-40ae-84f7-bcd28fab78a2",\n          },\n        ],\n        "startCursor": "IjAwMzAzMWI1LTYxNTctNGIzNS05ZDExLTNlOGI5Yjg3NDVmMyI=",\n      }\n    '
            );
            return [4 /*yield*/, firstPage.getNextPage()];
          case 2:
            secondPage = _b.sent();
            expect(secondPage.data).toMatchInlineSnapshot(
              '\n      {\n        "endCursor": "IjA5NTBmZDk2LTQyOGUtNDEwMy05NzFjLTllOWZkMzhhYjAxZiI=",\n        "hasNextPage": true,\n        "items": [\n          {\n            "body": "Deserunt temporibus et alias sapiente dolorem quidem saepe. Autem quia odit eaque architecto porro.",\n            "createdAt": "2023-05-22T22:17:14.338Z",\n            "id": "060d546e-f7a9-4ab1-8124-016b7345e8b4",\n            "image": null,\n            "likedIds": [],\n            "updatedAt": "2023-05-22T22:17:14.338Z",\n            "userId": "187f77f6-5570-40ae-84f7-bcd28fab78a2",\n          },\n          {\n            "body": "Ipsam voluptatibus fugiat ex fugit fugit vitae. Possimus natus culpa tempora sit. Ipsum minima incidunt nulla vitae corporis laboriosam quia commodi vel.",\n            "createdAt": "2023-05-22T22:17:14.338Z",\n            "id": "0662d97e-dae6-4160-884c-28ca140ef209",\n            "image": null,\n            "likedIds": [],\n            "updatedAt": "2023-05-22T22:17:14.338Z",\n            "userId": "187f77f6-5570-40ae-84f7-bcd28fab78a2",\n          },\n          {\n            "body": "Aperiam harum dolores. Eligendi fuga incidunt illo sed perspiciatis nisi. Eum a soluta sapiente asperiores molestias magnam libero nihil.",\n            "createdAt": "2023-05-22T22:17:14.338Z",\n            "id": "0950fd96-428e-4103-971c-9e9fd38ab01f",\n            "image": null,\n            "likedIds": [],\n            "updatedAt": "2023-05-22T22:17:14.338Z",\n            "userId": "187f77f6-5570-40ae-84f7-bcd28fab78a2",\n          },\n        ],\n        "startCursor": "IjA2MGQ1NDZlLWY3YTktNGFiMS04MTI0LTAxNmI3MzQ1ZThiNCI=",\n      }\n    '
            );
            _a = expect;
            return [4 /*yield*/, secondPage.getPreviousPage()];
          case 3:
            _a.apply(void 0, [_b.sent().data]).toEqual(
              __assign(
                __assign({}, (0, lodash_1.omit)(firstPage.data, "hasNextPage")),
                { hasPreviousPage: false }
              )
            );
            return [2 /*return*/];
        }
      });
    });
  });
  // skipped because of issues with include
  it.skip("inclusion + selection", function () {
    return __awaiter(this, void 0, void 0, function () {
      var _a;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            _a = expect;
            return [
              4 /*yield*/,
              testClient_1.testClient.posts.list({
                userId: "187f77f6-5570-40ae-84f7-bcd28fab78a2",
                pageSize: 3,
                // @ts-ignore
                include: ["items.user"],
                select: "items.user_fields{id,name}",
              }),
            ];
          case 1:
            _a.apply(void 0, [_b.sent().data]).toMatchInlineSnapshot(
              '\n      {\n        "endCursor": "IjAzNGNlOTA1LWZkMGQtNDA5Yi1hMDZhLTAyNDAyNDAxYjg0YiI=",\n        "hasNextPage": true,\n        "items": [\n          {\n            "body": "Nemo beatae natus. Nostrum cumque quod modi deleniti voluptatum. Provident quasi esse autem amet. Saepe maiores eveniet possimus exercitationem iusto optio cupiditate quasi. Eligendi ab perferendis earum hic.",\n            "createdAt": "2023-05-22T22:17:14.338Z",\n            "id": "003031b5-6157-4b35-9d11-3e8b9b8745f3",\n            "image": null,\n            "likedIds": [],\n            "updatedAt": "2023-05-22T22:17:14.338Z",\n            "user": {\n              "bio": null,\n              "coverImage": null,\n              "createdAt": "2023-05-22T22:17:13.969Z",\n              "email": "Buddy18@yahoo.com",\n              "emailVerified": null,\n              "followingIds": [\n                "d8026e07-9bb1-4693-8c33-814ed79c5ab4",\n                "5fb6a9a2-ef81-4d19-99c8-b772c56a4617",\n                "f7043a71-8171-4fa0-9686-7a35c1bf3c4c",\n                "ed917b5c-e22e-4d80-ae92-2a578ee2a1e4",\n                "ff829dbc-95ee-462a-a6ae-7ea05f8d2719",\n              ],\n              "hasNotification": null,\n              "hashedPassword": null,\n              "id": "187f77f6-5570-40ae-84f7-bcd28fab78a2",\n              "image": null,\n              "name": "Claudia Tremblay",\n              "profileImage": null,\n              "updatedAt": "2023-05-22T22:17:14.325Z",\n              "username": "Pearl",\n            },\n            "userId": "187f77f6-5570-40ae-84f7-bcd28fab78a2",\n            "user_fields": {\n              "id": "187f77f6-5570-40ae-84f7-bcd28fab78a2",\n              "name": "Claudia Tremblay",\n            },\n          },\n          {\n            "body": "Fugit doloremque voluptatum harum neque facere ducimus enim. Atque molestiae veritatis natus repellat. Non reiciendis asperiores exercitationem incidunt iure sint doloribus. Dicta eaque sequi mollitia at error iste fugit quae. Sit cum vitae veritatis incidunt quasi explicabo neque.",\n            "createdAt": "2023-05-22T22:17:14.338Z",\n            "id": "0284c330-a9ef-4a09-ae97-d0e0afdf0a1d",\n            "image": null,\n            "likedIds": [],\n            "updatedAt": "2023-05-22T22:17:14.338Z",\n            "user": {\n              "bio": null,\n              "coverImage": null,\n              "createdAt": "2023-05-22T22:17:13.969Z",\n              "email": "Buddy18@yahoo.com",\n              "emailVerified": null,\n              "followingIds": [\n                "d8026e07-9bb1-4693-8c33-814ed79c5ab4",\n                "5fb6a9a2-ef81-4d19-99c8-b772c56a4617",\n                "f7043a71-8171-4fa0-9686-7a35c1bf3c4c",\n                "ed917b5c-e22e-4d80-ae92-2a578ee2a1e4",\n                "ff829dbc-95ee-462a-a6ae-7ea05f8d2719",\n              ],\n              "hasNotification": null,\n              "hashedPassword": null,\n              "id": "187f77f6-5570-40ae-84f7-bcd28fab78a2",\n              "image": null,\n              "name": "Claudia Tremblay",\n              "profileImage": null,\n              "updatedAt": "2023-05-22T22:17:14.325Z",\n              "username": "Pearl",\n            },\n            "userId": "187f77f6-5570-40ae-84f7-bcd28fab78a2",\n            "user_fields": {\n              "id": "187f77f6-5570-40ae-84f7-bcd28fab78a2",\n              "name": "Claudia Tremblay",\n            },\n          },\n          {\n            "body": "Explicabo doloribus ipsam reiciendis laboriosam magni veniam voluptate. Molestias molestiae a iusto occaecati repellat.",\n            "createdAt": "2023-05-22T22:17:14.338Z",\n            "id": "034ce905-fd0d-409b-a06a-02402401b84b",\n            "image": null,\n            "likedIds": [],\n            "updatedAt": "2023-05-22T22:17:14.338Z",\n            "user": {\n              "bio": null,\n              "coverImage": null,\n              "createdAt": "2023-05-22T22:17:13.969Z",\n              "email": "Buddy18@yahoo.com",\n              "emailVerified": null,\n              "followingIds": [\n                "d8026e07-9bb1-4693-8c33-814ed79c5ab4",\n                "5fb6a9a2-ef81-4d19-99c8-b772c56a4617",\n                "f7043a71-8171-4fa0-9686-7a35c1bf3c4c",\n                "ed917b5c-e22e-4d80-ae92-2a578ee2a1e4",\n                "ff829dbc-95ee-462a-a6ae-7ea05f8d2719",\n              ],\n              "hasNotification": null,\n              "hashedPassword": null,\n              "id": "187f77f6-5570-40ae-84f7-bcd28fab78a2",\n              "image": null,\n              "name": "Claudia Tremblay",\n              "profileImage": null,\n              "updatedAt": "2023-05-22T22:17:14.325Z",\n              "username": "Pearl",\n            },\n            "userId": "187f77f6-5570-40ae-84f7-bcd28fab78a2",\n            "user_fields": {\n              "id": "187f77f6-5570-40ae-84f7-bcd28fab78a2",\n              "name": "Claudia Tremblay",\n            },\n          },\n        ],\n        "startCursor": "IjAwMzAzMWI1LTYxNTctNGIzNS05ZDExLTNlOGI5Yjg3NDVmMyI=",\n      }\n    '
            );
            return [2 /*return*/];
        }
      });
    });
  });
  // skipped because of issues with include
  it.skip("inclusion + selection 2", function () {
    return __awaiter(this, void 0, void 0, function () {
      var data;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [
              4 /*yield*/,
              testClient_1.testClient.posts.list({
                userId: "187f77f6-5570-40ae-84f7-bcd28fab78a2",
                pageSize: 3,
                // @ts-ignore
                include: ["items.user"],
                select: "items.user_fields{id,name,comments_fields{id}}",
              }),
            ];
          case 1:
            data = _a.sent().data;
            expect(
              __assign(__assign({}, data), {
                items: data.items.map(function (_a) {
                  var _b = _a.user_fields,
                    comments_fields = _b.comments_fields,
                    user_fields_rest = __rest(_b, ["comments_fields"]),
                    rest = __rest(_a, ["user_fields"]);
                  return __assign(__assign({}, rest), {
                    user_fields: __assign(
                      __assign({}, user_fields_rest),
                      comments_fields
                        ? { comments_fields: comments_fields.slice(0, 5) }
                        : null
                    ),
                  });
                }),
              })
            ).toMatchInlineSnapshot(
              '\n      {\n        "endCursor": "IjAzNGNlOTA1LWZkMGQtNDA5Yi1hMDZhLTAyNDAyNDAxYjg0YiI=",\n        "hasNextPage": true,\n        "items": [\n          {\n            "body": "Nemo beatae natus. Nostrum cumque quod modi deleniti voluptatum. Provident quasi esse autem amet. Saepe maiores eveniet possimus exercitationem iusto optio cupiditate quasi. Eligendi ab perferendis earum hic.",\n            "createdAt": "2023-05-22T22:17:14.338Z",\n            "id": "003031b5-6157-4b35-9d11-3e8b9b8745f3",\n            "image": null,\n            "likedIds": [],\n            "updatedAt": "2023-05-22T22:17:14.338Z",\n            "user": {\n              "bio": null,\n              "coverImage": null,\n              "createdAt": "2023-05-22T22:17:13.969Z",\n              "email": "Buddy18@yahoo.com",\n              "emailVerified": null,\n              "followingIds": [\n                "d8026e07-9bb1-4693-8c33-814ed79c5ab4",\n                "5fb6a9a2-ef81-4d19-99c8-b772c56a4617",\n                "f7043a71-8171-4fa0-9686-7a35c1bf3c4c",\n                "ed917b5c-e22e-4d80-ae92-2a578ee2a1e4",\n                "ff829dbc-95ee-462a-a6ae-7ea05f8d2719",\n              ],\n              "hasNotification": null,\n              "hashedPassword": null,\n              "id": "187f77f6-5570-40ae-84f7-bcd28fab78a2",\n              "image": null,\n              "name": "Claudia Tremblay",\n              "profileImage": null,\n              "updatedAt": "2023-05-22T22:17:14.325Z",\n              "username": "Pearl",\n            },\n            "userId": "187f77f6-5570-40ae-84f7-bcd28fab78a2",\n            "user_fields": {\n              "comments_fields": [\n                {\n                  "id": "679e5478-c025-4a38-a701-a00d9fdcd847",\n                },\n                {\n                  "id": "2c0b1f16-44cc-4ea5-bf95-7fb854c600eb",\n                },\n                {\n                  "id": "5f67c2dd-9dea-47d5-afd5-8a8dc5567872",\n                },\n                {\n                  "id": "39baaa50-bb3c-4f12-9ba2-07da7b5b8cb1",\n                },\n                {\n                  "id": "edab2a6a-0987-4969-ad05-a79b3d1e36f0",\n                },\n              ],\n              "id": "187f77f6-5570-40ae-84f7-bcd28fab78a2",\n              "name": "Claudia Tremblay",\n            },\n          },\n          {\n            "body": "Fugit doloremque voluptatum harum neque facere ducimus enim. Atque molestiae veritatis natus repellat. Non reiciendis asperiores exercitationem incidunt iure sint doloribus. Dicta eaque sequi mollitia at error iste fugit quae. Sit cum vitae veritatis incidunt quasi explicabo neque.",\n            "createdAt": "2023-05-22T22:17:14.338Z",\n            "id": "0284c330-a9ef-4a09-ae97-d0e0afdf0a1d",\n            "image": null,\n            "likedIds": [],\n            "updatedAt": "2023-05-22T22:17:14.338Z",\n            "user": {\n              "bio": null,\n              "coverImage": null,\n              "createdAt": "2023-05-22T22:17:13.969Z",\n              "email": "Buddy18@yahoo.com",\n              "emailVerified": null,\n              "followingIds": [\n                "d8026e07-9bb1-4693-8c33-814ed79c5ab4",\n                "5fb6a9a2-ef81-4d19-99c8-b772c56a4617",\n                "f7043a71-8171-4fa0-9686-7a35c1bf3c4c",\n                "ed917b5c-e22e-4d80-ae92-2a578ee2a1e4",\n                "ff829dbc-95ee-462a-a6ae-7ea05f8d2719",\n              ],\n              "hasNotification": null,\n              "hashedPassword": null,\n              "id": "187f77f6-5570-40ae-84f7-bcd28fab78a2",\n              "image": null,\n              "name": "Claudia Tremblay",\n              "profileImage": null,\n              "updatedAt": "2023-05-22T22:17:14.325Z",\n              "username": "Pearl",\n            },\n            "userId": "187f77f6-5570-40ae-84f7-bcd28fab78a2",\n            "user_fields": {\n              "comments_fields": [\n                {\n                  "id": "679e5478-c025-4a38-a701-a00d9fdcd847",\n                },\n                {\n                  "id": "2c0b1f16-44cc-4ea5-bf95-7fb854c600eb",\n                },\n                {\n                  "id": "5f67c2dd-9dea-47d5-afd5-8a8dc5567872",\n                },\n                {\n                  "id": "39baaa50-bb3c-4f12-9ba2-07da7b5b8cb1",\n                },\n                {\n                  "id": "edab2a6a-0987-4969-ad05-a79b3d1e36f0",\n                },\n              ],\n              "id": "187f77f6-5570-40ae-84f7-bcd28fab78a2",\n              "name": "Claudia Tremblay",\n            },\n          },\n          {\n            "body": "Explicabo doloribus ipsam reiciendis laboriosam magni veniam voluptate. Molestias molestiae a iusto occaecati repellat.",\n            "createdAt": "2023-05-22T22:17:14.338Z",\n            "id": "034ce905-fd0d-409b-a06a-02402401b84b",\n            "image": null,\n            "likedIds": [],\n            "updatedAt": "2023-05-22T22:17:14.338Z",\n            "user": {\n              "bio": null,\n              "coverImage": null,\n              "createdAt": "2023-05-22T22:17:13.969Z",\n              "email": "Buddy18@yahoo.com",\n              "emailVerified": null,\n              "followingIds": [\n                "d8026e07-9bb1-4693-8c33-814ed79c5ab4",\n                "5fb6a9a2-ef81-4d19-99c8-b772c56a4617",\n                "f7043a71-8171-4fa0-9686-7a35c1bf3c4c",\n                "ed917b5c-e22e-4d80-ae92-2a578ee2a1e4",\n                "ff829dbc-95ee-462a-a6ae-7ea05f8d2719",\n              ],\n              "hasNotification": null,\n              "hashedPassword": null,\n              "id": "187f77f6-5570-40ae-84f7-bcd28fab78a2",\n              "image": null,\n              "name": "Claudia Tremblay",\n              "profileImage": null,\n              "updatedAt": "2023-05-22T22:17:14.325Z",\n              "username": "Pearl",\n            },\n            "userId": "187f77f6-5570-40ae-84f7-bcd28fab78a2",\n            "user_fields": {\n              "comments_fields": [\n                {\n                  "id": "679e5478-c025-4a38-a701-a00d9fdcd847",\n                },\n                {\n                  "id": "2c0b1f16-44cc-4ea5-bf95-7fb854c600eb",\n                },\n                {\n                  "id": "5f67c2dd-9dea-47d5-afd5-8a8dc5567872",\n                },\n                {\n                  "id": "39baaa50-bb3c-4f12-9ba2-07da7b5b8cb1",\n                },\n                {\n                  "id": "edab2a6a-0987-4969-ad05-a79b3d1e36f0",\n                },\n              ],\n              "id": "187f77f6-5570-40ae-84f7-bcd28fab78a2",\n              "name": "Claudia Tremblay",\n            },\n          },\n        ],\n        "startCursor": "IjAwMzAzMWI1LTYxNTctNGIzNS05ZDExLTNlOGI5Yjg3NDVmMyI=",\n      }\n    '
            );
            return [2 /*return*/];
        }
      });
    });
  });
});
describe("authenticated create /api/posts", function () {
  it("no authentication", function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [
              4 /*yield*/,
              expect(
                testClient_1.testClient.posts.create({
                  body: "nefarious post",
                })
              ).rejects.toThrow(),
            ];
          case 1:
            _a.sent();
            return [2 /*return*/];
        }
      });
    });
  });
});
