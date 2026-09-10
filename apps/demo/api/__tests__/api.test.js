"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = require("../api");
var khulnasoft_1 = require("khulnasoft");
// @todo: get includable working again!
it.skip("getApiRouteMap(api)", function () {
  expect((0, khulnasoft_1.getApiRouteMap)(api_1.api)).toMatchInlineSnapshot(
    '\n    {\n      "actions": {\n        "getOpenapi": {\n          "endpoint": "GET /api/openapi",\n        },\n      },\n      "namespacedResources": {\n        "test": {\n          "actions": {\n            "foo": {\n              "endpoint": "PUT /api/foo/{value}",\n            },\n          },\n        },\n      },\n    }\n  '
  );
});
