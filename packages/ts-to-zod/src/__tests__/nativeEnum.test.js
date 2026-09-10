"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.T = void 0;
var testCase_1 = require("./testCase");
var T;
(function (T) {
  T["a"] = "a";
  T["b"] = "b";
})(T || (exports.T = T = {}));
it("enum T { a = 'a', b = 'b' }", function () {
  return expect(
    (0, testCase_1.testCase)({
      __filename: __filename,
    })
  ).toMatchInlineSnapshot('"z.nativeEnum(modulePlaceholder.T)"');
});
