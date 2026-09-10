"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = void 0;
exports.api = {
  actions: {
    getOpenapi: {
      endpoint: "GET /api/openapi",
    },
  },
  namespacedResources: {
    test: {
      actions: {
        foo: {
          endpoint: "PUT /api/foo/{value}",
        },
      },
    },
  },
};
