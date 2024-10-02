"use strict";
// Temporary exposed for reuse in legacy code
// Once it is deprecated they will no longer be exposed.
Object.defineProperty(exports, "__esModule", { value: true });
exports.addAllVocabulariesToAliasInformation = exports.ApiErrorCode = exports.ApiError = void 0;
var error_1 = require("./error");
Object.defineProperty(exports, "ApiError", { enumerable: true, get: function () { return error_1.ApiError; } });
Object.defineProperty(exports, "ApiErrorCode", { enumerable: true, get: function () { return error_1.ApiErrorCode; } });
var vocabularies_1 = require("./vocabularies");
Object.defineProperty(exports, "addAllVocabulariesToAliasInformation", { enumerable: true, get: function () { return vocabularies_1.addAllVocabulariesToAliasInformation; } });
//# sourceMappingURL=protected.js.map