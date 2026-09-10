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
var testClient_1 = require("../../testClient");
// @todo: get includable working again!
describe.skip("/api/posts/[postId]", function () {
  it("inclusion + selection", function () {
    return __awaiter(this, void 0, void 0, function () {
      var _a;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            _a = expect;
            return [
              4 /*yield*/,
              testClient_1.testClient.posts.retrieve(
                "0284c330-a9ef-4a09-ae97-d0e0afdf0a1d",
                {
                  include: ["comments.user"],
                  select: "user_fields{id,name}",
                }
              ),
            ];
          case 1:
            _a.apply(void 0, [_b.sent()]).toMatchInlineSnapshot(
              '\n      {\n        "body": "Fugit doloremque voluptatum harum neque facere ducimus enim. Atque molestiae veritatis natus repellat. Non reiciendis asperiores exercitationem incidunt iure sint doloribus. Dicta eaque sequi mollitia at error iste fugit quae. Sit cum vitae veritatis incidunt quasi explicabo neque.",\n        "comments": [\n          {\n            "body": "Vitae earum consequatur deleniti magnam numquam occaecati nihil optio.",\n            "createdAt": "2023-05-22T22:17:14.466Z",\n            "id": "2367d101-8223-412e-8b9c-b29b589e9287",\n            "postId": "0284c330-a9ef-4a09-ae97-d0e0afdf0a1d",\n            "updatedAt": "2023-05-22T22:17:14.466Z",\n            "user": {\n              "bio": null,\n              "coverImage": null,\n              "createdAt": "2023-05-22T22:17:13.969Z",\n              "email": "Buddy18@yahoo.com",\n              "emailVerified": null,\n              "followingIds": [\n                "d8026e07-9bb1-4693-8c33-814ed79c5ab4",\n                "5fb6a9a2-ef81-4d19-99c8-b772c56a4617",\n                "f7043a71-8171-4fa0-9686-7a35c1bf3c4c",\n                "ed917b5c-e22e-4d80-ae92-2a578ee2a1e4",\n                "ff829dbc-95ee-462a-a6ae-7ea05f8d2719",\n              ],\n              "hasNotification": null,\n              "hashedPassword": null,\n              "id": "187f77f6-5570-40ae-84f7-bcd28fab78a2",\n              "image": null,\n              "name": "Claudia Tremblay",\n              "profileImage": null,\n              "updatedAt": "2023-05-22T22:17:14.325Z",\n              "username": "Pearl",\n            },\n            "userId": "187f77f6-5570-40ae-84f7-bcd28fab78a2",\n          },\n          {\n            "body": "Deleniti temporibus nesciunt repellat voluptas impedit itaque.",\n            "createdAt": "2023-05-22T22:17:14.466Z",\n            "id": "741d0c85-175d-4476-bca3-a8184625590a",\n            "postId": "0284c330-a9ef-4a09-ae97-d0e0afdf0a1d",\n            "updatedAt": "2023-05-22T22:17:14.466Z",\n            "user": {\n              "bio": null,\n              "coverImage": null,\n              "createdAt": "2023-05-22T22:17:13.969Z",\n              "email": "Buddy18@yahoo.com",\n              "emailVerified": null,\n              "followingIds": [\n                "d8026e07-9bb1-4693-8c33-814ed79c5ab4",\n                "5fb6a9a2-ef81-4d19-99c8-b772c56a4617",\n                "f7043a71-8171-4fa0-9686-7a35c1bf3c4c",\n                "ed917b5c-e22e-4d80-ae92-2a578ee2a1e4",\n                "ff829dbc-95ee-462a-a6ae-7ea05f8d2719",\n              ],\n              "hasNotification": null,\n              "hashedPassword": null,\n              "id": "187f77f6-5570-40ae-84f7-bcd28fab78a2",\n              "image": null,\n              "name": "Claudia Tremblay",\n              "profileImage": null,\n              "updatedAt": "2023-05-22T22:17:14.325Z",\n              "username": "Pearl",\n            },\n            "userId": "187f77f6-5570-40ae-84f7-bcd28fab78a2",\n          },\n          {\n            "body": "Consequatur ducimus illo molestias cum aliquam odit impedit.",\n            "createdAt": "2023-05-22T22:17:14.466Z",\n            "id": "35ca03ce-8933-49d5-9a7f-06cf63546ead",\n            "postId": "0284c330-a9ef-4a09-ae97-d0e0afdf0a1d",\n            "updatedAt": "2023-05-22T22:17:14.466Z",\n            "user": {\n              "bio": null,\n              "coverImage": null,\n              "createdAt": "2023-05-22T22:17:13.969Z",\n              "email": "Austen95@hotmail.com",\n              "emailVerified": null,\n              "followingIds": [\n                "2f865fad-6edd-4bac-9513-5dc381baf873",\n                "ed917b5c-e22e-4d80-ae92-2a578ee2a1e4",\n                "a23ef7c9-789f-46fb-a1b5-5dd072d157c4",\n                "d8026e07-9bb1-4693-8c33-814ed79c5ab4",\n                "f7043a71-8171-4fa0-9686-7a35c1bf3c4c",\n              ],\n              "hasNotification": null,\n              "hashedPassword": null,\n              "id": "ed917b5c-e22e-4d80-ae92-2a578ee2a1e4",\n              "image": null,\n              "name": "Jeanette Jacobson",\n              "profileImage": null,\n              "updatedAt": "2023-05-22T22:17:14.856Z",\n              "username": "Russell",\n            },\n            "userId": "ed917b5c-e22e-4d80-ae92-2a578ee2a1e4",\n          },\n        ],\n        "createdAt": "2023-05-22T22:17:14.338Z",\n        "id": "0284c330-a9ef-4a09-ae97-d0e0afdf0a1d",\n        "image": null,\n        "likedIds": [],\n        "updatedAt": "2023-05-22T22:17:14.338Z",\n        "userId": "187f77f6-5570-40ae-84f7-bcd28fab78a2",\n        "user_fields": {\n          "id": "187f77f6-5570-40ae-84f7-bcd28fab78a2",\n          "name": "Claudia Tremblay",\n        },\n      }\n    '
            );
            return [2 /*return*/];
        }
      });
    });
  });
});
