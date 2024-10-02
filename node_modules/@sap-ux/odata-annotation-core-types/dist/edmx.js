"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EDMX_ELEMENT_NAMES = exports.EdmxIncludeElementAttributeName = exports.EdmxReferenceElementAttributeName = exports.EdmxElementName = exports.Edmx = void 0;
var Edmx;
(function (Edmx) {
    Edmx["Alias"] = "Alias";
    Edmx["DataServices"] = "DataServices";
    Edmx["Edmx"] = "Edmx";
    Edmx["Import"] = "Import";
    Edmx["Include"] = "Include";
    Edmx["Namespace"] = "Namespace";
    Edmx["Reference"] = "Reference";
    Edmx["Uri"] = "Uri";
    Edmx["Version"] = "Version"; // as attribute name only
})(Edmx || (exports.Edmx = Edmx = {}));
/**
 * tag/attribute names defined for edm namespace (url://docs.oasis-open.org/odata/odata/v4.0/errata03/os/complete/schemas/edmx.xsd)
 */
var EdmxElementName;
(function (EdmxElementName) {
    EdmxElementName["DataServices"] = "DataServices";
    EdmxElementName["Edmx"] = "Edmx";
    EdmxElementName["Include"] = "Include";
    EdmxElementName["IncludeAnnotations"] = "IncludeAnnotations";
    EdmxElementName["Reference"] = "Reference";
})(EdmxElementName || (exports.EdmxElementName = EdmxElementName = {}));
var EdmxReferenceElementAttributeName;
(function (EdmxReferenceElementAttributeName) {
    EdmxReferenceElementAttributeName["Uri"] = "Uri";
})(EdmxReferenceElementAttributeName || (exports.EdmxReferenceElementAttributeName = EdmxReferenceElementAttributeName = {}));
var EdmxIncludeElementAttributeName;
(function (EdmxIncludeElementAttributeName) {
    EdmxIncludeElementAttributeName["Alias"] = "Alias";
    EdmxIncludeElementAttributeName["Namespace"] = "Namespace";
})(EdmxIncludeElementAttributeName || (exports.EdmxIncludeElementAttributeName = EdmxIncludeElementAttributeName = {}));
exports.EDMX_ELEMENT_NAMES = new Set([
    EdmxElementName.DataServices,
    EdmxElementName.Edmx,
    EdmxElementName.Include,
    EdmxElementName.IncludeAnnotations,
    EdmxElementName.Reference
]);
//# sourceMappingURL=edmx.js.map