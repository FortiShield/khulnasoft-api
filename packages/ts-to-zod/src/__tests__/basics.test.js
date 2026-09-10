"use strict";
var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError(
          "Class extends value " + String(b) + " is not a constructor or null"
        );
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g = Object.create(
        (typeof Iterator === "function" ? Iterator : Object).prototype
      );
    return (
      (g.next = verb(0)),
      (g["throw"] = verb(1)),
      (g["return"] = verb(2)),
      typeof Symbol === "function" &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while ((g && ((g = 0), op[0] && (_ = 0)), _))
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y["return"]
                  : op[0]
                  ? y["throw"] || ((t = y["return"]) && t.call(y), 0)
                  : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateTransformDefaultSchema =
  exports.ValidateTransformSchema =
  exports.ValidateSchema =
  exports.TransformSchema =
  exports.objectSchema =
    void 0;
var testCase_1 = require("./testCase");
var multiFileTestCase_1 = require("./multiFileTestCase");
var khulnasoft_1 = require("khulnasoft");
it("any", function () {
  return expect(
    (0, testCase_1.testCase)({ __filename: __filename, nodeName: "anyType" })
  ).toMatchInlineSnapshot('"z.any()"');
});
it("unknown", function () {
  return expect(
    (0, testCase_1.testCase)({
      __filename: __filename,
      nodeName: "unknownType",
    })
  ).toMatchInlineSnapshot('"z.unknown()"');
});
it("never", function () {
  return expect(
    (0, testCase_1.testCase)({ __filename: __filename, nodeName: "neverType" })
  ).toMatchInlineSnapshot('"z.never()"');
});
it("void", function () {
  return expect(
    (0, testCase_1.testCase)({ __filename: __filename, nodeName: "voidType" })
  ).toMatchInlineSnapshot('"z.void()"');
});
it("null", function () {
  return expect(
    (0, testCase_1.testCase)({ __filename: __filename, nodeName: "nullType" })
  ).toMatchInlineSnapshot('"z.null()"');
});
it("undefined", function () {
  return expect(
    (0, testCase_1.testCase)({
      __filename: __filename,
      nodeName: "undefinedType",
    })
  ).toMatchInlineSnapshot('"z.undefined()"');
});
it("string", function () {
  return expect(
    (0, testCase_1.testCase)({ __filename: __filename, nodeName: "stringType" })
  ).toMatchInlineSnapshot('"z.string()"');
});
it("string literal", function () {
  return expect(
    (0, testCase_1.testCase)({
      __filename: __filename,
      nodeName: "stringLiteralType",
    })
  ).toMatchInlineSnapshot('"z.literal("a")"');
});
it("number", function () {
  return expect(
    (0, testCase_1.testCase)({ __filename: __filename, nodeName: "numberType" })
  ).toMatchInlineSnapshot('"z.number()"');
});
it("number literal", function () {
  return expect(
    (0, testCase_1.testCase)({
      __filename: __filename,
      nodeName: "numberLiteralType",
    })
  ).toMatchInlineSnapshot('"z.literal("5")"');
});
it("boolean", function () {
  return expect(
    (0, testCase_1.testCase)({
      __filename: __filename,
      nodeName: "booleanType",
    })
  ).toMatchInlineSnapshot('"z.boolean()"');
});
it("true", function () {
  return expect(
    (0, testCase_1.testCase)({ __filename: __filename, nodeName: "trueType" })
  ).toMatchInlineSnapshot('"z.literal(true)"');
});
it("false", function () {
  return expect(
    (0, testCase_1.testCase)({ __filename: __filename, nodeName: "falseType" })
  ).toMatchInlineSnapshot('"z.literal(false)"');
});
it("bigint", function () {
  return expect(
    (0, testCase_1.testCase)({ __filename: __filename, nodeName: "bigintType" })
  ).toMatchInlineSnapshot('"z.bigint()"');
});
it("bigint literal", function () {
  return expect(
    (0, testCase_1.testCase)({
      __filename: __filename,
      nodeName: "bigintLiteralType",
    })
  ).toMatchInlineSnapshot('"z.literal("5n")"');
});
it("Array<number>", function () {
  return expect(
    (0, testCase_1.testCase)({
      __filename: __filename,
      nodeName: "arrayNumberType",
    })
  ).toMatchInlineSnapshot('"z.array(z.number())"');
});
it("{a: number, b?: string}", function () {
  return expect(
    (0, testCase_1.testCase)({
      __filename: __filename,
      nodeName: "basicObjectType",
    })
  ).toMatchInlineSnapshot(
    '"z.object({ a: z.number(), b: z.string().optional() })"'
  );
});
it("Date", function () {
  return expect(
    (0, testCase_1.testCase)({
      __filename: __filename,
      nodeName: "dateType",
    })
  ).toMatchInlineSnapshot('"z.date()"');
});
it("discriminated union", function () {
  return expect(
    (0, testCase_1.testCase)({
      __filename: __filename,
      nodeName: "discriminatedUnionType",
    })
  ).toMatchInlineSnapshot(
    '"z.discriminatedUnion("type", [z.object({ type: z.literal("a"), summary: z.literal("b") }), z.object({ type: z.enum(["b", "c"]), summary: z.string() })])"'
  );
});
it("interface T { a: number, b?: string }", function () {
  return expect(
    (0, testCase_1.testCase)({
      __filename: __filename,
      nodeName: "interfaceType",
    })
  ).toMatchInlineSnapshot(
    '"z.object({ a: z.number(), b: z.string().optional() })"'
  );
});
it("Map<string, number>", function () {
  return expect(
    (0, testCase_1.testCase)({
      __filename: __filename,
      nodeName: "mapType",
    })
  ).toMatchInlineSnapshot('"z.map(z.string(), z.number())"');
});
it("{ [k: string]: number; [z: symbol]: string }", function () {
  return expect(
    (0, testCase_1.testCase)({
      __filename: __filename,
      nodeName: "mixedRecordType",
    })
  ).toMatchInlineSnapshot(
    '"z.union([z.record(z.symbol(), z.string()), z.record(z.string(), z.number())])"'
  );
});
it("{a: number} & {b: string}", function () {
  return expect(
    (0, testCase_1.testCase)({
      __filename: __filename,
      nodeName: "objIntersectionType",
    })
  ).toMatchInlineSnapshot(
    '"z.object({ a: z.number() }).and(z.object({ b: z.string() }))"'
  );
});
it("Promise<string>", function () {
  return expect(
    (0, testCase_1.testCase)({
      __filename: __filename,
      nodeName: "promiseStringType",
    })
  ).toMatchInlineSnapshot('"z.promise(z.string())"');
});
it("readonly number[]", function () {
  return expect(
    (0, testCase_1.testCase)({
      __filename: __filename,
      nodeName: "readonlyNumberArrayType1",
    })
  ).toMatchInlineSnapshot('"z.array(z.number())"');
});
it("ReadonlyArray<number>", function () {
  return expect(
    (0, testCase_1.testCase)({
      __filename: __filename,
      nodeName: "readonlyNumberArrayType2",
    })
  ).toMatchInlineSnapshot('"z.array(z.number())"');
});
it("{[k: string | number]: number}", function () {
  return expect(
    (0, testCase_1.testCase)({
      __filename: __filename,
      nodeName: "record1",
    })
  ).toMatchInlineSnapshot(
    '"z.record(z.union([z.string(), z.number()]), z.number())"'
  );
});
it("{[k: string]: number}", function () {
  return expect(
    (0, testCase_1.testCase)({
      __filename: __filename,
      nodeName: "record2",
    })
  ).toMatchInlineSnapshot('"z.record(z.string(), z.number())"');
});
it("number | [T]", function () {
  return expect(
    (0, testCase_1.testCase)({
      __filename: __filename,
      nodeName: "recursiveType",
    })
  ).toMatchInlineSnapshot(
    '"z.union([z.number(), z.tuple([z.lazy(() => recursiveType)])])"'
  );
});
it("'a' | 'b'", function () {
  return expect(
    (0, testCase_1.testCase)({
      __filename: __filename,
      nodeName: "enumType",
    })
  ).toMatchInlineSnapshot('"z.enum(["a", "b"])"');
});
it("Set<string>", function () {
  return expect(
    (0, testCase_1.testCase)({
      __filename: __filename,
      nodeName: "setStringType",
    })
  ).toMatchInlineSnapshot('"z.set(z.string())"');
});
it("[string, number]", function () {
  return expect(
    (0, testCase_1.testCase)({
      __filename: __filename,
      nodeName: "tupleType",
    })
  ).toMatchInlineSnapshot('"z.tuple([z.string(), z.number()])"');
});
it("[number, ...string[]]", function () {
  return expect(
    (0, testCase_1.testCase)({
      __filename: __filename,
      nodeName: "variadicTupleType",
    })
  ).toMatchInlineSnapshot('"z.tuple([z.number()]).rest(z.string())"');
});
it("Foo | Bar | null", function () {
  return expect(
    (0, testCase_1.testCase)({
      __filename: __filename,
      nodeName: "unionNestedTypeAliasesType",
    })
  ).toMatchInlineSnapshot(
    '"z.union([z.lazy(() => Foo), z.lazy(() => Bar)]).nullable()"'
  );
});
it("string | number | null", function () {
  return expect(
    (0, testCase_1.testCase)({
      __filename: __filename,
      nodeName: "unionStringNumberNullType",
    })
  ).toMatchInlineSnapshot('"z.union([z.string(), z.number()]).nullable()"');
});
it("string | number | null | undefined", function () {
  return expect(
    (0, testCase_1.testCase)({
      __filename: __filename,
      nodeName: "unionStringNumberNullUndefinedType",
    })
  ).toMatchInlineSnapshot(
    '"z.union([z.string(), z.number()]).nullable().optional()"'
  );
});
it("string | number | undefined", function () {
  return expect(
    (0, testCase_1.testCase)({
      __filename: __filename,
      nodeName: "unionStringNumberUndefinedType",
    })
  ).toMatchInlineSnapshot('"z.union([z.string(), z.number()]).optional()"');
});
it("string | number", function () {
  return expect(
    (0, testCase_1.testCase)({
      __filename: __filename,
      nodeName: "unionStringNumberType",
    })
  ).toMatchInlineSnapshot('"z.union([z.string(), z.number()])"');
});
it("mapped type", function () {
  return expect(
    (0, testCase_1.testCase)({
      __filename: __filename,
      nodeName: "mappedType",
    })
  ).toMatchInlineSnapshot(
    '"z.object({ a: z.object({ other: z.number() }), b: z.object({ string: z.literal("x") }).optional() })"'
  );
});
exports.objectSchema = khulnasoft_1.z.object({ a: khulnasoft_1.z.string() });
it("zod schema property", function () {
  return __awaiter(void 0, void 0, void 0, function () {
    var _a;
    return __generator(this, function (_b) {
      switch (_b.label) {
        case 0:
          _a = expect;
          return [
            4 /*yield*/,
            (0, multiFileTestCase_1.multiFileTestCase)({
              __filename: __filename,
              getNode: function (sourceFile) {
                return sourceFile.getTypeAlias("zodSchemaProperty");
              },
            }),
          ];
        case 1:
          return [
            2 /*return*/,
            _a
              .apply(void 0, [_b.sent()])
              .toMatchInlineSnapshot(
                '\n{\n  "src/__tests__/basics.test.codegen.ts": "import { z } from "zod";\nimport * as BasicsTest from "./basics.test";\nconst zodSchemaProperty: z.ZodTypeAny = z.object({ zod: z.lazy(() => BasicsTest.objectSchema) });\n",\n}\n'
              ),
          ];
      }
    });
  });
});
var TransformSchema = /** @class */ (function (_super) {
  __extends(TransformSchema, _super);
  function TransformSchema() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  TransformSchema.prototype.transform = function (value) {
    return String(value);
  };
  return TransformSchema;
})(khulnasoft_1.z.Schema);
exports.TransformSchema = TransformSchema;
it("schema with transform", function () {
  return __awaiter(void 0, void 0, void 0, function () {
    var _a;
    return __generator(this, function (_b) {
      switch (_b.label) {
        case 0:
          _a = expect;
          return [
            4 /*yield*/,
            (0, multiFileTestCase_1.multiFileTestCase)({
              __filename: __filename,
              getNode: function (sourceFile) {
                return sourceFile.getClass("TransformSchema");
              },
            }),
          ];
        case 1:
          return [
            2 /*return*/,
            _a
              .apply(void 0, [_b.sent()])
              .toMatchInlineSnapshot(
                '\n{\n  "src/__tests__/basics.test.codegen.ts": "import { z } from "zod";\nimport * as BasicsTest from "./basics.test";\nexport const TransformSchema: z.ZodTypeAny = z.number().khulnasoftTransform(new BasicsTest.TransformSchema().transform);\n",\n}\n'
              ),
          ];
      }
    });
  });
});
var ValidateSchema = /** @class */ (function (_super) {
  __extends(ValidateSchema, _super);
  function ValidateSchema() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  ValidateSchema.prototype.validate = function (input) {
    return input.length % 2 === 0;
  };
  return ValidateSchema;
})(khulnasoft_1.z.Schema);
exports.ValidateSchema = ValidateSchema;
it("schema with transform", function () {
  return __awaiter(void 0, void 0, void 0, function () {
    var _a;
    return __generator(this, function (_b) {
      switch (_b.label) {
        case 0:
          _a = expect;
          return [
            4 /*yield*/,
            (0, multiFileTestCase_1.multiFileTestCase)({
              __filename: __filename,
              getNode: function (sourceFile) {
                return sourceFile.getClass("ValidateSchema");
              },
            }),
          ];
        case 1:
          return [
            2 /*return*/,
            _a
              .apply(void 0, [_b.sent()])
              .toMatchInlineSnapshot(
                '\n{\n  "src/__tests__/basics.test.codegen.ts": "import { z } from "zod";\nimport * as BasicsTest from "./basics.test";\nexport const ValidateSchema: z.ZodTypeAny = z.string().refine(new BasicsTest.ValidateSchema().validate);\n",\n}\n'
              ),
          ];
      }
    });
  });
});
var ValidateTransformSchema = /** @class */ (function (_super) {
  __extends(ValidateTransformSchema, _super);
  function ValidateTransformSchema() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  ValidateTransformSchema.prototype.validate = function (input) {
    return input % 2 === 0;
  };
  ValidateTransformSchema.prototype.transform = function (input) {
    return String(input);
  };
  return ValidateTransformSchema;
})(khulnasoft_1.z.Schema);
exports.ValidateTransformSchema = ValidateTransformSchema;
it("schema with validate, transform", function () {
  return __awaiter(void 0, void 0, void 0, function () {
    var _a;
    return __generator(this, function (_b) {
      switch (_b.label) {
        case 0:
          _a = expect;
          return [
            4 /*yield*/,
            (0, multiFileTestCase_1.multiFileTestCase)({
              __filename: __filename,
              getNode: function (sourceFile) {
                return sourceFile.getClass("ValidateTransformSchema");
              },
            }),
          ];
        case 1:
          return [
            2 /*return*/,
            _a
              .apply(void 0, [_b.sent()])
              .toMatchInlineSnapshot(
                '\n{\n  "src/__tests__/basics.test.codegen.ts": "import { z } from "zod";\nimport * as BasicsTest from "./basics.test";\nexport const ValidateTransformSchema: z.ZodTypeAny = z.number().refine(new BasicsTest.ValidateTransformSchema().validate).khulnasoftTransform(new BasicsTest.ValidateTransformSchema().transform);\n",\n}\n'
              ),
          ];
      }
    });
  });
});
var ValidateTransformDefaultSchema = /** @class */ (function (_super) {
  __extends(ValidateTransformDefaultSchema, _super);
  function ValidateTransformDefaultSchema() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.default = "42";
    return _this;
  }
  ValidateTransformDefaultSchema.prototype.validate = function (input) {
    return input % 2 === 0;
  };
  ValidateTransformDefaultSchema.prototype.transform = function (input) {
    return String(input);
  };
  return ValidateTransformDefaultSchema;
})(khulnasoft_1.z.Schema);
exports.ValidateTransformDefaultSchema = ValidateTransformDefaultSchema;
it("schema with validate, transform, default", function () {
  return __awaiter(void 0, void 0, void 0, function () {
    var _a;
    return __generator(this, function (_b) {
      switch (_b.label) {
        case 0:
          _a = expect;
          return [
            4 /*yield*/,
            (0, multiFileTestCase_1.multiFileTestCase)({
              __filename: __filename,
              getNode: function (sourceFile) {
                return sourceFile.getClass("ValidateTransformDefaultSchema");
              },
            }),
          ];
        case 1:
          return [
            2 /*return*/,
            _a
              .apply(void 0, [_b.sent()])
              .toMatchInlineSnapshot(
                '\n{\n  "src/__tests__/basics.test.codegen.ts": "import { z } from "zod";\nimport * as BasicsTest from "./basics.test";\nexport const ValidateTransformDefaultSchema: z.ZodTypeAny = z.number().refine(new BasicsTest.ValidateTransformDefaultSchema().validate).khulnasoftTransform(new BasicsTest.ValidateTransformDefaultSchema().transform).default(new BasicsTest.ValidateTransformDefaultSchema().default);\n",\n}\n'
              ),
          ];
      }
    });
  });
});
