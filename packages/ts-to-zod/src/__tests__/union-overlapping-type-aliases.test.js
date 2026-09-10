"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testCase_1 = require("./testCase");
it("Foo | Bar | null", function () {
  return expect(
    (0, testCase_1.testCase)({
      __filename: __filename,
    })
  ).toMatchInlineSnapshot('"z.enum(["a", "b", "c"]).nullable()"');
});
