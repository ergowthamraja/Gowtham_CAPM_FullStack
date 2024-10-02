"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nodeRange = exports.isContainer = exports.ANNOTATION_GROUP_ITEMS_TYPE = exports.ANNOTATION_GROUP_TYPE = exports.ANNOTATION_TYPE = exports.QUALIFIER_TYPE = exports.COLLECTION_TYPE = exports.RECORD_TYPE = exports.RECORD_PROPERTY_TYPE = exports.EXPRESSION_TYPES = exports.CORRECT_EXPRESSION_TYPE = exports.INCORRECT_EXPRESSION_TYPE = exports.UNSUPPORTED_OPERATOR_EXPRESSION_TYPE = exports.OPERATOR_TYPE = exports.IDENTIFIER_TYPE = exports.SEPARATOR_TYPE = exports.PATH_TYPE = exports.MULTI_LINE_STRING_LITERAL_TYPE = exports.STRING_LITERAL_TYPE = exports.BOOLEAN_TYPE = exports.EMPTY_VALUE_TYPE = exports.QUOTED_LITERAL_TYPE = exports.ENUM_TYPE = exports.NUMBER_LITERAL_TYPE = exports.TOKEN_TYPE = exports.Delimiter = void 0;
const text_document_utils_1 = require("@sap-ux/text-document-utils");
const range_1 = require("./range");
var Delimiter;
(function (Delimiter) {
    Delimiter["none"] = "none";
    Delimiter["quoted"] = "quoted";
    Delimiter["exclamationSquareBrackets"] = "exclamation-square-brackets";
})(Delimiter || (exports.Delimiter = Delimiter = {}));
exports.TOKEN_TYPE = 'token';
exports.NUMBER_LITERAL_TYPE = 'number';
exports.ENUM_TYPE = 'enum';
exports.QUOTED_LITERAL_TYPE = 'quoted-literal';
exports.EMPTY_VALUE_TYPE = 'empty-value';
exports.BOOLEAN_TYPE = 'boolean';
exports.STRING_LITERAL_TYPE = 'string';
exports.MULTI_LINE_STRING_LITERAL_TYPE = 'multi-line-string';
exports.PATH_TYPE = 'path';
exports.SEPARATOR_TYPE = 'separator';
exports.IDENTIFIER_TYPE = 'identifier';
exports.OPERATOR_TYPE = 'operator';
exports.UNSUPPORTED_OPERATOR_EXPRESSION_TYPE = 'unsupported-operator-expression';
exports.INCORRECT_EXPRESSION_TYPE = 'incorrect-expression';
exports.CORRECT_EXPRESSION_TYPE = 'correct-expression';
exports.EXPRESSION_TYPES = [
    exports.UNSUPPORTED_OPERATOR_EXPRESSION_TYPE,
    exports.INCORRECT_EXPRESSION_TYPE,
    exports.CORRECT_EXPRESSION_TYPE
];
exports.RECORD_PROPERTY_TYPE = 'record-property';
exports.RECORD_TYPE = 'record';
exports.COLLECTION_TYPE = 'collection';
exports.QUALIFIER_TYPE = 'qualifier';
exports.ANNOTATION_TYPE = 'annotation';
exports.ANNOTATION_GROUP_TYPE = 'annotation-group';
exports.ANNOTATION_GROUP_ITEMS_TYPE = 'annotation-group-items';
const CONTAINER_TYPES = new Set([exports.ANNOTATION_GROUP_ITEMS_TYPE, exports.RECORD_TYPE, exports.COLLECTION_TYPE]);
const isContainer = (node) => CONTAINER_TYPES.has(node.type);
exports.isContainer = isContainer;
const nodeRange = (node, includeDelimiters) => {
    if (!node.range) {
        return undefined;
    }
    if (includeDelimiters) {
        return (0, range_1.copyRange)(node.range);
    }
    switch (node.type) {
        case exports.ANNOTATION_GROUP_ITEMS_TYPE:
        case exports.RECORD_TYPE:
        case exports.COLLECTION_TYPE:
        case exports.STRING_LITERAL_TYPE:
        case exports.INCORRECT_EXPRESSION_TYPE:
        case exports.UNSUPPORTED_OPERATOR_EXPRESSION_TYPE:
        case exports.CORRECT_EXPRESSION_TYPE: {
            // if delimiter tokens exist adjust range accordingly
            const start = node.openToken?.range ? (0, range_1.copyRange)(node.openToken.range).end : (0, range_1.copyRange)(node.range).start;
            const end = node.closeToken?.range ? (0, range_1.copyRange)(node.closeToken.range).start : (0, range_1.copyRange)(node.range).end;
            return text_document_utils_1.Range.create(start, end);
        }
        default:
            break;
    }
    return (0, range_1.copyRange)(node.range);
};
exports.nodeRange = nodeRange;
//# sourceMappingURL=annotation-ast-nodes.js.map