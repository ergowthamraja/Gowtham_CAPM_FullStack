"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllNamespacesAndReferences = exports.getAliasInformation = exports.toAliasQualifiedName = exports.resolveName = exports.toFullyQualifiedName = exports.COLLECTION_PREFIX = exports.parseIdentifier = void 0;
var parse_1 = require("./parse");
Object.defineProperty(exports, "parseIdentifier", { enumerable: true, get: function () { return parse_1.parseIdentifier; } });
Object.defineProperty(exports, "COLLECTION_PREFIX", { enumerable: true, get: function () { return parse_1.COLLECTION_PREFIX; } });
var normalization_1 = require("./normalization");
Object.defineProperty(exports, "toFullyQualifiedName", { enumerable: true, get: function () { return normalization_1.toFullyQualifiedName; } });
Object.defineProperty(exports, "resolveName", { enumerable: true, get: function () { return normalization_1.resolveName; } });
Object.defineProperty(exports, "toAliasQualifiedName", { enumerable: true, get: function () { return normalization_1.toAliasQualifiedName; } });
var namespaces_1 = require("./namespaces");
Object.defineProperty(exports, "getAliasInformation", { enumerable: true, get: function () { return namespaces_1.getAliasInformation; } });
Object.defineProperty(exports, "getAllNamespacesAndReferences", { enumerable: true, get: function () { return namespaces_1.getAllNamespacesAndReferences; } });
//# sourceMappingURL=index.js.map