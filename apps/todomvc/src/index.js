"use strict";
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (
          !desc ||
          ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)
        ) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k];
            },
          };
        }
        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      }
    : function (o, v) {
        o["default"] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  (function () {
    var ownKeys = function (o) {
      ownKeys =
        Object.getOwnPropertyNames ||
        function (o) {
          var ar = [];
          for (var k in o)
            if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
          return ar;
        };
      return ownKeys(o);
    };
    return function (mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null)
        for (var k = ownKeys(mod), i = 0; i < k.length; i++)
          if (k[i] !== "default") __createBinding(result, mod, k[i]);
      __setModuleDefault(result, mod);
      return result;
    };
  })();
var __spreadArray =
  (this && this.__spreadArray) ||
  function (to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from));
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var crypto = __importStar(require("crypto"));
var app = (0, express_1.default)();
app.use(express_1.default.json());
var items = new Map();
app.get("/items/:id", function (req, res) {
  var id = req.params.id;
  var item = items.get(id);
  if (item) {
    res.send(JSON.stringify(item));
  } else {
    res.status(404).send("item with id not found");
  }
});
app.get("/items", function (req, res) {
  res.send(JSON.stringify(__spreadArray([], items.values(), true)));
});
app.post("/items", function (req, res) {
  // Note: no validation here!
  var id =
    items.size === 0
      ? "ed76baac-7b44-4a11-b345-56384ffa8ad8"
      : crypto.randomUUID();
  console.log("got body", req.body);
  var newItem = __assign({ id: id }, req.body);
  items.set(id, newItem);
  res.send(JSON.stringify(newItem));
});
app.put("/items/:id", function (req, res) {
  var id = req.params.id;
  if (!items.has(id)) {
    res.status(404).send("item with id not found");
    return;
  }
  items.set(id, __assign(__assign({}, req.body), { id: id }));
});
app.patch("/items/:id", function (req, res) {
  var id = req.params.id;
  var item = items.get(id);
  if (!item) {
    res.status(404).send("item with id not found");
    return;
  }
  var newItem = __assign(__assign(__assign({}, item), req.body), {
    id: item.id,
  });
  items.set(id, newItem);
  res.send(JSON.stringify(newItem));
});
app.delete("/item/:id", function (req, res) {
  var id = req.params.id;
  if (!items.has(id)) {
    res.status(404).send("item with id not found");
    return;
  }
  items.delete(id);
});
app.listen(3000, function () {
  console.log("Server is running at http://localhost:3000");
});
