"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Test = exports.X = exports.EnumTest = void 0;
var khulnasoft_1 = require("khulnasoft");
var khulnasoft = new khulnasoft_1.Khulnasoft({
  plugins: {},
});
var index_1 = require("../.khulnasoft-codegen/src/index");
var additional_1 = require("../.khulnasoft-codegen/src/additional");
var EnumTest;
(function (EnumTest) {
  EnumTest[(EnumTest["A"] = 0)] = "A";
  EnumTest[(EnumTest["B"] = 1)] = "B";
  EnumTest[(EnumTest["C"] = 2)] = "C";
})(EnumTest || (exports.EnumTest = EnumTest = {}));
var X = /** @class */ (function () {
  function X() {}
  return X;
})();
exports.X = X;
// khulnasoft.codegenSchema<X>(__class_X);
// khulnasoft.codegenSchema<ExternalInterface>(__symbol_ExternalInterface);
var Test = /** @class */ (function () {
  function Test() {}
  return Test;
})();
exports.Test = Test;
khulnasoft.codegenSchema(
  khulnasoft_1.z.object({
    nested: khulnasoft_1.z.lazy(function () {
      return index_1.EnumTest;
    }),
    nested2: khulnasoft_1.z.lazy(function () {
      return additional_1.TestEnumAdditional;
    }),
  })
);
// khulnasoft.endpoint({
//   endpoint: "GET /users",
//   response: khulnasoft.codegenSchema<InThisFile>(__symbol_InThisFile),
//   handler: (request, ctx) => {
//     throw new Error("dummy");
//   },
// });
