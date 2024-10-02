"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenHandler = void 0;
const cds_annotation_parser_1 = require("@sap-ux/cds-annotation-parser");
const odata_annotation_core_types_1 = require("@sap-ux/odata-annotation-core-types");
exports.tokenHandler = {
    type: cds_annotation_parser_1.TOKEN_TYPE,
    convert(state, node) {
        if (node.value === 'null') {
            return (0, odata_annotation_core_types_1.createElementNode)({
                name: "Null" /* Edm.Null */,
                nameRange: (0, cds_annotation_parser_1.nodeRange)(node, false),
                range: (0, cds_annotation_parser_1.nodeRange)(node, true)
            });
        }
        return undefined;
    }
};
//# sourceMappingURL=token.js.map