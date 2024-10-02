"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.collectionHandler = void 0;
const cds_annotation_parser_1 = require("@sap-ux/cds-annotation-parser");
const odata_annotation_core_types_1 = require("@sap-ux/odata-annotation-core-types");
const odata_vocabularies_1 = require("@sap-ux/odata-vocabularies");
const enum_1 = require("./enum");
exports.collectionHandler = {
    type: cds_annotation_parser_1.COLLECTION_TYPE,
    getChildren,
    convert(state, node) {
        const valueType = state.context.valueType;
        const vocabularyType = valueType ? state.vocabularyService.getType(valueType) : undefined;
        state.pushContext({ ...state.context, isCollection: false });
        if (valueType && vocabularyType?.kind === odata_vocabularies_1.ENUM_TYPE_KIND) {
            return (0, enum_1.convertFlags)(state, node, valueType);
        }
        const element = (0, odata_annotation_core_types_1.createElementNode)({
            name: "Collection" /* Edm.Collection */,
            range: (0, cds_annotation_parser_1.nodeRange)(node, true),
            contentRange: (0, cds_annotation_parser_1.nodeRange)(node, false)
        });
        return element;
    }
};
/**
 * Gets the children of a collection node based on the provided visitor state and collection node.
 *
 * @param state - The visitor state.
 * @param node - The collection node.
 * @returns The array of children nodes.
 */
function getChildren(state, node) {
    const valueType = state.context.valueType;
    const vocabularyType = valueType ? state.vocabularyService.getType(valueType) : undefined;
    if (vocabularyType?.kind === odata_vocabularies_1.ENUM_TYPE_KIND) {
        return [];
    }
    return node.items;
}
//# sourceMappingURL=collection.js.map