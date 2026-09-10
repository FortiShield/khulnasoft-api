"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.testClientAppCatchAll =
  exports.testClientPagesCatchAll =
  exports.testClient =
  exports.baseUrl =
    void 0;
var khulnasoft_1 = require("khulnasoft");
var api_route_map_1 = require("./api-route-map");
var node_fetch_1 = __importDefault(require("node-fetch"));
exports.baseUrl = "http://".concat(
  process.env.CI ? "0.0.0.0:3005" : "localhost:3000",
  "/api"
);
exports.testClient = (0, khulnasoft_1.createClient)(exports.baseUrl, {
  fetch: node_fetch_1.default,
  routeMap: api_route_map_1.api,
});
exports.testClientPagesCatchAll = (0, khulnasoft_1.createClient)(
  exports.baseUrl,
  {
    fetch: node_fetch_1.default,
    routeMap: api_route_map_1.api,
    basePathMap: {
      "/api": "/api/v2",
    },
  }
);
exports.testClientAppCatchAll = (0, khulnasoft_1.createClient)(
  exports.baseUrl,
  {
    fetch: node_fetch_1.default,
    routeMap: api_route_map_1.api,
    basePathMap: {
      "/api": "/api/v3",
    },
  }
);
