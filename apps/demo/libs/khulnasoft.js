"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.khulnasoft = void 0;
var khulnasoft_1 = require("khulnasoft");
var prisma_1 = require("@khulnasoft-api/prisma");
var next_1 = require("@khulnasoft-api/next");
var next_auth_1 = require("@khulnasoft-api/next-auth");
var ____nextauth_1 = require("../pages/api/auth/[...nextauth]");
var currentUserPlugin_1 = require("./currentUserPlugin");
var _khulnasoft_codegen_1 = require("../.khulnasoft-codegen");
var plugins = {
  next: (0, next_1.makeNextPlugin)(),
  // @ts-ignore
  nextAuth: (0, next_auth_1.makeNextAuthPlugin)({
    authOptions: ____nextauth_1.authOptions,
  }),
  prisma: (0, prisma_1.makePrismaPlugin)(),
  currentUser: (0, currentUserPlugin_1.makeCurrentUserPlugin)(),
};
exports.khulnasoft = new khulnasoft_1.Khulnasoft({
  plugins: plugins,
  typeSchemas: _khulnasoft_codegen_1.typeSchemas,
});
