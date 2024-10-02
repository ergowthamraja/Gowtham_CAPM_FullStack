"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRange = exports.copyRange = exports.copyPosition = void 0;
const odata_annotation_core_1 = require("@sap-ux/odata-annotation-core");
const copyPosition = (position) => odata_annotation_core_1.Position.create(position.line, position.character);
exports.copyPosition = copyPosition;
const copyRange = (range) => range ? odata_annotation_core_1.Range.create((0, exports.copyPosition)(range.start), (0, exports.copyPosition)(range.end)) : undefined;
exports.copyRange = copyRange;
const createRange = (start, end) => start && end ? odata_annotation_core_1.Range.create((0, exports.copyPosition)(start), (0, exports.copyPosition)(end)) : undefined;
exports.createRange = createRange;
//# sourceMappingURL=range.js.map