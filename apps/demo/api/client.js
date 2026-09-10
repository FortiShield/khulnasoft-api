"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useClient = void 0;
var api_route_map_1 = require("./api-route-map");
var react_query_1 = require("@khulnasoft-api/react-query");
exports.useClient = (0, react_query_1.createUseReactQueryClient)("/api", {
  routeMap: api_route_map_1.api,
});
