"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recordPropertyHandler = void 0;
const cds_annotation_parser_1 = require("@sap-ux/cds-annotation-parser");
const odata_annotation_core_types_1 = require("@sap-ux/odata-annotation-core-types");
const flattened_1 = require("../flattened");
const type_resolver_1 = require("../type-resolver");
const creators_1 = require("../creators");
exports.recordPropertyHandler = {
    type: cds_annotation_parser_1.RECORD_PROPERTY_TYPE,
    getChildren(state, node) {
        if (node.value) {
            return [node.value];
        }
        return [];
    },
    convert(state, node) {
        if (state.context.inValueContainer) {
            // Since only annotations are allowed here, we assume it is one
            const element = (0, odata_annotation_core_types_1.createElementNode)({
                name: "Annotation" /* Edm.Annotation */,
                range: (0, cds_annotation_parser_1.nodeRange)(node, true)
            });
            element.attributes["Term" /* Edm.Term */] = (0, creators_1.createTermAttribute)(node.name.value, (0, cds_annotation_parser_1.nodeRange)(node.name, false));
            if (node.value) {
                element.contentRange = (0, cds_annotation_parser_1.nodeRange)(node.value, true);
            }
            return element;
        }
        if (node.name.segments.length === 1) {
            const element = (0, odata_annotation_core_types_1.createElementNode)({
                name: "PropertyValue" /* Edm.PropertyValue */,
                range: (0, cds_annotation_parser_1.nodeRange)(node, true)
            });
            element.attributes["Property" /* Edm.Property */] = (0, creators_1.createPropertyAttribute)(node.name.value, (0, cds_annotation_parser_1.nodeRange)(node.name, false));
            const recordPropertyType = (0, type_resolver_1.getImplicitPropertyType)(state.vocabularyService, state.context, node.name.value)?.type;
            state.pushContext({ ...state.context, valueType: recordPropertyType, propertyName: node.name.value });
            if (node.value) {
                element.contentRange = (0, cds_annotation_parser_1.nodeRange)(node.value, true);
                // take into account colon
                if (node.colon && element.contentRange) {
                    const colonPosition = node?.colon?.range?.end;
                    // position right after colon should be counted as part of the elements content
                    element.contentRange.start = colonPosition
                        ? odata_annotation_core_types_1.Position.create(colonPosition.line, colonPosition.character)
                        : odata_annotation_core_types_1.Position.create(0, 0);
                }
            }
            return element;
        }
        else {
            return (0, flattened_1.convertFlattenedPath)(state, node.name.segments, node.value);
        }
    }
};
//# sourceMappingURL=record-property.js.map