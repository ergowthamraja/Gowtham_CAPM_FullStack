"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nodeHandlerConfig = void 0;
const annotation_1 = require("./annotation");
const collection_1 = require("./collection");
const record_1 = require("./record");
const record_property_1 = require("./record-property");
const boolean_1 = require("./boolean");
const enum_1 = require("./enum");
const expression_1 = require("./expression");
const number_1 = require("./number");
const string_1 = require("./string");
const quoted_literal_1 = require("./quoted-literal");
const path_1 = require("./path");
const token_1 = require("./token");
exports.nodeHandlerConfig = {
    [annotation_1.annotationHandler.type]: annotation_1.annotationHandler,
    [record_1.recordHandler.type]: record_1.recordHandler,
    [record_property_1.recordPropertyHandler.type]: record_property_1.recordPropertyHandler,
    [collection_1.collectionHandler.type]: collection_1.collectionHandler,
    [boolean_1.booleanHandler.type]: boolean_1.booleanHandler,
    [string_1.stringHandler.type]: string_1.stringHandler,
    [string_1.multiLineStringHandler.type]: string_1.multiLineStringHandler,
    [enum_1.enumHandler.type]: enum_1.enumHandler,
    [expression_1.correctExpressionHandler.type]: expression_1.correctExpressionHandler,
    [expression_1.unknownOperatorExpressionHandler.type]: expression_1.unknownOperatorExpressionHandler,
    [expression_1.incorrectExpressionHandler.type]: expression_1.incorrectExpressionHandler,
    [number_1.numberHandler.type]: number_1.numberHandler,
    [quoted_literal_1.quotedLiteralHandler.type]: quoted_literal_1.quotedLiteralHandler,
    [path_1.pathHandler.type]: path_1.pathHandler,
    [token_1.tokenHandler.type]: token_1.tokenHandler
};
//# sourceMappingURL=index.js.map