"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testCase_1 = require("./testCase");
it("function property", function () {
  return expect(
    (0, testCase_1.testCase)({
      __filename: __filename,
      nodeName: "functionProp",
    })
  ).toMatchInlineSnapshot(
    '"z.object({ a: z.string(), b: z.function(z.tuple([]), z.number()) })"'
  );
});
it("functions converted to any", function () {
  return expect(
    (0, testCase_1.testCase)({
      __filename: __filename,
      nodeName: "stringFunction",
    })
  ).toMatchInlineSnapshot('"z.function(z.tuple([]), z.string())"');
});
function complexFunction(a) {
  return a.toString();
}
it("multi-signature function", function () {
  return expect(
    (0, testCase_1.testCase)({
      __filename: __filename,
      nodeName: "multiSigFunction",
    })
  ).toMatchInlineSnapshot(
    '"z.function(z.tuple([z.number()]), z.string()).and(z.function(z.tuple([z.string()]), z.string()))"'
  );
});
function generic(_) {
  throw new Error();
}
it("resolved function", function () {
  return expect(
    (0, testCase_1.testCase)({
      __filename: __filename,
      nodeName: "instantiatedGeneric",
    })
  ).toMatchInlineSnapshot('"z.function(z.tuple([z.number()]), z.never())"');
});
it("generic function any", function () {
  return expect(
    (0, testCase_1.testCase)({
      __filename: __filename,
      nodeName: "genericFunction",
    })
  ).toMatchInlineSnapshot('"z.any()"');
});
