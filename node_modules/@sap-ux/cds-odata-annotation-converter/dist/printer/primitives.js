"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CDS_NULL_EXPRESSION_LITERAL = exports.keyAlone = exports.valuePair = exports.delimitedIdentifier = exports.stringLiteral = exports.collection = exports.struct = exports.container = exports.list = exports.PRIMITIVE_VALUE_ATTRIBUTE_NAMES = void 0;
exports.PRIMITIVE_VALUE_ATTRIBUTE_NAMES = new Set([
    "Bool" /* Edm.Bool */,
    "Decimal" /* Edm.Decimal */,
    "Duration" /* Edm.Duration */,
    "Float" /* Edm.Float */,
    "Int" /* Edm.Int */,
    "Null" /* Edm.Null */,
    "DateTimeOffset" /* Edm.DateTimeOffset */,
    "TimeOfDay" /* Edm.TimeOfDay */,
    "Date" /* Edm.Date */,
    "String" /* Edm.String */,
    "EnumMember" /* Edm.EnumMember */,
    "Guid" /* Edm.Guid */,
    "Binary" /* Edm.Binary */,
    "AnnotationPath" /* Edm.AnnotationPath */,
    "ModelElementPath" /* Edm.ModelElementPath */,
    "NavigationPropertyPath" /* Edm.NavigationPropertyPath */,
    "PropertyPath" /* Edm.PropertyPath */,
    "Path" /* Edm.Path */
]);
const list = (entries, useTrailingComma = true) => entries.map((entry, i, arr) => {
    const comma = i + 1 !== arr.length || useTrailingComma ? ',' : '';
    if (typeof entry === 'string') {
        return entry + comma;
    }
    else {
        if (entry.placeholder) {
            return entry.value;
        }
        return entry.value + comma;
    }
});
exports.list = list;
const container = (open, close, entries) => [open, ...(0, exports.list)(entries), close].join('\n');
exports.container = container;
const struct = (properties) => (0, exports.container)('{', '}', properties);
exports.struct = struct;
const collection = (items) => (0, exports.container)('[', ']', items);
exports.collection = collection;
const stringLiteral = (value) => value.indexOf('\n') !== -1 ? `\`\`\`${value}\`\`\`` : `'${value}'`;
exports.stringLiteral = stringLiteral;
const delimitedIdentifier = (value) => `![${value}]`;
exports.delimitedIdentifier = delimitedIdentifier;
const valuePair = (key, value) => `${key} : ${value}`;
exports.valuePair = valuePair;
const keyAlone = (key) => `${key}`;
exports.keyAlone = keyAlone;
exports.CDS_NULL_EXPRESSION_LITERAL = 'null';
//# sourceMappingURL=primitives.js.map