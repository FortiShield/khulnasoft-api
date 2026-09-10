"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeRouteMatcher = makeRouteMatcher;
exports.isValidRouteMatch = isValidRouteMatch;
var trie_router_1 = require("hono/router/trie-router");
var khulnasoft_1 = require("khulnasoft");
/**
 * Converts an endpoint from a format like 'GET /users/{id}'
 * to ['GET', '/users/:id']
 */
function endpointToHono(endpoint) {
  var _a = (0, khulnasoft_1.parseEndpoint)(endpoint),
    method = _a[0],
    path = _a[1];
  var pathParts = path.split("/").map(function (el) {
    return el.replace(/^\{([^}]+)\}$/, ":$1");
  });
  var unsupportedEl = pathParts.find(function (el) {
    return el.includes("{");
  });
  if (unsupportedEl) {
    // TODO: hono routers don't support variables in the middle of a
    // path element, but they do support regexes, so we'd need to convert
    // this
    throw new Error(
      "path element isn't currently supported: ".concat(unsupportedEl)
    );
  }
  return [method, pathParts.join("/")];
}
function makeRouteMatcher(endpoints) {
  var routeMatcher = new trie_router_1.TrieRouter();
  for (var _i = 0, endpoints_1 = endpoints; _i < endpoints_1.length; _i++) {
    var endpoint = endpoints_1[_i];
    var _a = endpointToHono(endpoint.endpoint),
      method = _a[0],
      path = _a[1];
    routeMatcher.add(method, path, endpoint);
  }
  return routeMatcher;
}
function isValidRouteMatch(m) {
  if (!m) return false;
  if (m[0].length === 0) return false;
  return true;
}
