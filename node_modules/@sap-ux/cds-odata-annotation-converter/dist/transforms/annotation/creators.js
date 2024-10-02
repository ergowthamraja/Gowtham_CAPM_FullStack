"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPropertyAttribute = exports.createQualifierAttribute = exports.createTermAttribute = void 0;
const odata_annotation_core_types_1 = require("@sap-ux/odata-annotation-core-types");
/**
 * Factory function that creates an attribute node with the specified attribute name, value, and value range.
 *
 * @param attributeName - The name of the attribute to be created.
 * @returns A function that creates an AttributeNode.
 */
function createAttributeFactory(attributeName) {
    return (value, valueRange) => (0, odata_annotation_core_types_1.createAttributeNode)(attributeName, value, undefined, valueRange);
}
exports.createTermAttribute = createAttributeFactory("Term" /* Edm.Term */);
exports.createQualifierAttribute = createAttributeFactory("Qualifier" /* Edm.Qualifier */);
exports.createPropertyAttribute = createAttributeFactory("Property" /* Edm.Property */);
//# sourceMappingURL=creators.js.map