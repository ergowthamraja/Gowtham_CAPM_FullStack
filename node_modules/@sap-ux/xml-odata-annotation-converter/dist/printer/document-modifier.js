"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertWithOptions = exports.insert = void 0;
const odata_annotation_core_1 = require("@sap-ux/odata-annotation-core");
const csdl_to_xml_1 = require("./csdl-to-xml");
const namespaces_1 = require("./namespaces");
const insert = (options) => (target, element) => (0, exports.insertWithOptions)(target, element, options);
exports.insert = insert;
const insertWithOptions = (target, element, { printWidth, tabWidth, useTabs }) => {
    let result;
    const prettierOptions = {
        printWidth,
        useTabs,
        tabWidth
    };
    if (target.syntax.openBody) {
        const startColumn = target.syntax.openBody.startColumn - 1;
        const targetCursorIndentLevel = startColumn === 0 ? 0 : startColumn / tabWidth;
        const namespaces = target.namespaces && createNamespaceAliasMap(target);
        const printContext = {
            cursorIndentLevel: targetCursorIndentLevel + 1,
            namespaces
        };
        const textParts = ['\n', (0, csdl_to_xml_1.printCsdlNodeToXmlString)(element, prettierOptions, printContext)];
        const text = String.prototype.concat.apply('', textParts);
        result = odata_annotation_core_1.TextEdit.insert(odata_annotation_core_1.Position.create(target.syntax.openBody.endLine - 1, // -1 because chevrotain is 1 based,
        target.syntax.openBody.endColumn // -1 chevrotain offset + 1 next symbol after closing bracket
        ), text);
    }
    return result;
};
exports.insertWithOptions = insertWithOptions;
const createNamespaceAliasMap = (element) => Object.keys(element.namespaces).reduce((map, prefix) => {
    const namespace = element.namespaces[prefix];
    switch (namespace) {
        case namespaces_1.EDMX_V4_NAMESPACE: {
            map[odata_annotation_core_1.EDMX_NAMESPACE_ALIAS] = prefix;
            break;
        }
        case namespaces_1.EDM_V4_NAMESPACE: {
            map[odata_annotation_core_1.EDM_NAMESPACE_ALIAS] = prefix;
            break;
        }
        default:
            return map;
    }
    return map;
}, {});
//# sourceMappingURL=document-modifier.js.map