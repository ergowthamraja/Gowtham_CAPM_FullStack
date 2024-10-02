"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertNameToEdmxInternal = exports.EdmxNameConverter = exports.Converter = exports.generateMetadata = exports.collectMetadataForRelativePath = exports.collectMetadataForAbsolutePath = exports.getMetadataElementsFromMap = exports.createMetadataCollector = exports.getMetadataCollector = void 0;
var types_1 = require("./types");
Object.defineProperty(exports, "getMetadataCollector", { enumerable: true, get: function () { return types_1.getMetadataCollector; } });
Object.defineProperty(exports, "createMetadataCollector", { enumerable: true, get: function () { return types_1.createMetadataCollector; } });
Object.defineProperty(exports, "getMetadataElementsFromMap", { enumerable: true, get: function () { return types_1.getMetadataElementsFromMap; } });
var collection_1 = require("./collection");
Object.defineProperty(exports, "collectMetadataForAbsolutePath", { enumerable: true, get: function () { return collection_1.collectMetadataForAbsolutePath; } });
Object.defineProperty(exports, "collectMetadataForRelativePath", { enumerable: true, get: function () { return collection_1.collectMetadataForRelativePath; } });
var generation_1 = require("./generation");
Object.defineProperty(exports, "generateMetadata", { enumerable: true, get: function () { return generation_1.generateMetadata; } });
var conversion_1 = require("./conversion");
Object.defineProperty(exports, "Converter", { enumerable: true, get: function () { return conversion_1.Converter; } });
var edmxNameConverter_1 = require("./edmxNameConverter");
Object.defineProperty(exports, "EdmxNameConverter", { enumerable: true, get: function () { return edmxNameConverter_1.EdmxNameConverter; } });
Object.defineProperty(exports, "convertNameToEdmxInternal", { enumerable: true, get: function () { return edmxNameConverter_1.convertNameToEdmxInternal; } });
//# sourceMappingURL=index.js.map