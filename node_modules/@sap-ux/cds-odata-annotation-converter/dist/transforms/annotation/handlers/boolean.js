"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.booleanHandler = void 0;
const cds_annotation_parser_1 = require("@sap-ux/cds-annotation-parser");
const odata_annotation_core_types_1 = require("@sap-ux/odata-annotation-core-types");
exports.booleanHandler = {
    type: cds_annotation_parser_1.BOOLEAN_TYPE,
    convert(state, node) {
        let text = '';
        if (node.value === true) {
            text = 'true';
        }
        else if (node.value === false) {
            text = 'false';
        }
        const element = (0, odata_annotation_core_types_1.createElementNode)({
            name: "Bool" /* Edm.Bool */,
            range: (0, cds_annotation_parser_1.nodeRange)(node, true),
            contentRange: (0, cds_annotation_parser_1.nodeRange)(node, false),
            content: [(0, odata_annotation_core_types_1.createTextNode)(text, (0, cds_annotation_parser_1.nodeRange)(node, false))]
        });
        return element;
    }
};
//# sourceMappingURL=boolean.js.map