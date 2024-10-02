"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiLineStringHandler = exports.stringHandler = void 0;
const cds_annotation_parser_1 = require("@sap-ux/cds-annotation-parser");
const odata_annotation_core_types_1 = require("@sap-ux/odata-annotation-core-types");
const path_utils_1 = require("../path-utils");
exports.stringHandler = {
    type: cds_annotation_parser_1.STRING_LITERAL_TYPE,
    convert: convertString
};
exports.multiLineStringHandler = {
    type: cds_annotation_parser_1.MULTI_LINE_STRING_LITERAL_TYPE,
    convert: convertString
};
/**
 * Converts a string literal or multiline string literal node to an Element.
 *
 * @param state - The visitor state.
 * @param node - The string or multiline string literal node.
 * @returns The converted Element or undefined if the conversion is not performed.
 */
function convertString(state, node) {
    const elementName = (0, path_utils_1.pathLikeTypeElementName)(state.context.valueType) ?? "String" /* Edm.String */;
    const element = (0, odata_annotation_core_types_1.createElementNode)({
        name: elementName,
        range: (0, cds_annotation_parser_1.nodeRange)(node, true),
        contentRange: (0, cds_annotation_parser_1.nodeRange)(node, false),
        content: [(0, odata_annotation_core_types_1.createTextNode)((0, path_utils_1.unescapeText)(node.value), (0, cds_annotation_parser_1.nodeRange)(node, false), undefined, getMultiLineType(node))]
    });
    if (elementName !== "String" /* Edm.String */) {
        state.addPath(node.value);
    }
    else if (state.context.propertyName === 'Action') {
        // Assuming that this string is content for property Action of UI.DataFieldForAction
        // --> add value as absolute path to trigger collection of function/action metadata
        state.addPath('/' + node.value);
    }
    else if (state.context.propertyName === 'TargetProperties') {
        state.addPath(node.value);
    }
    return element;
}
/**
 * Determines the multiline type based on the provided string or multiline string literal node.
 *
 * @param node - The string or multiline string literal node.
 * @returns The determined multiline type, or undefined if the node is not a multiline string literal.
 */
function getMultiLineType(node) {
    if (node.type === cds_annotation_parser_1.STRING_LITERAL_TYPE) {
        return undefined;
    }
    return node.stripIndentation ? "StripIndentation" /* MultilineType.StripIndentation */ : "KeepIndentation" /* MultilineType.KeepIndentation */;
}
//# sourceMappingURL=string.js.map