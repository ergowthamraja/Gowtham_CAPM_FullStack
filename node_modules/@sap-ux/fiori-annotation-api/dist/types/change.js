"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeType = exports.MOD_TYPE_EMBEDDED_ANNOTATION = exports.MOD_TYPE_ANNOTATION = exports.MOD_TYPE_COLLECTION = exports.MOD_TYPE_RECORD = exports.MOD_TYPE_PROP_VALUE = exports.MOD_TYPE_EXPRESSION = exports.MOD_TYPE_PRIMITIVE = exports.ExpressionType = void 0;
var ExpressionType;
(function (ExpressionType) {
    ExpressionType["String"] = "String";
    ExpressionType["Bool"] = "Bool";
    ExpressionType["Decimal"] = "Decimal";
    ExpressionType["Date"] = "Date";
    ExpressionType["DateTimeOffset"] = "DateTimeOffset";
    ExpressionType["Float"] = "Float";
    ExpressionType["Guid"] = "Guid";
    ExpressionType["Int"] = "Int";
    ExpressionType["Path"] = "Path";
    ExpressionType["PropertyPath"] = "PropertyPath";
    ExpressionType["AnnotationPath"] = "AnnotationPath";
    ExpressionType["NavigationPropertyPath"] = "NavigationPropertyPath";
    ExpressionType["EnumMember"] = "EnumMember";
    ExpressionType["Collection"] = "Collection";
    ExpressionType["Record"] = "Record";
    ExpressionType["Unknown"] = "Unknown";
    ExpressionType["Null"] = "Null";
})(ExpressionType || (exports.ExpressionType = ExpressionType = {}));
exports.MOD_TYPE_PRIMITIVE = 'primitive';
exports.MOD_TYPE_EXPRESSION = 'expression';
exports.MOD_TYPE_PROP_VALUE = 'property-value';
exports.MOD_TYPE_RECORD = 'record';
exports.MOD_TYPE_COLLECTION = 'collection';
exports.MOD_TYPE_ANNOTATION = 'annotation';
exports.MOD_TYPE_EMBEDDED_ANNOTATION = 'embedded-annotation';
var ChangeType;
(function (ChangeType) {
    ChangeType["InsertAnnotation"] = "insert-annotation";
    ChangeType["InsertEmbeddedAnnotation"] = "insert-embedded-annotation";
    /**
     * Path should point to collection entry, property value or embedded annotation
     */
    ChangeType["Insert"] = "insert";
    /**
     * Path should point to collection entry, property value or embedded annotation
     */
    ChangeType["Delete"] = "delete";
    /**
     * Existing path target will be replaced; formatting/comments of original target gets lost -> only use for primitive values
     */
    ChangeType["Update"] = "update";
    /**
     * Move elements in collection
     */
    ChangeType["Move"] = "Move"; // path should point to collection entry that is moved
})(ChangeType || (exports.ChangeType = ChangeType = {}));
//# sourceMappingURL=change.js.map