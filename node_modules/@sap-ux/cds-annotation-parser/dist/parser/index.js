"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parse = void 0;
const factory_1 = require("./factory");
const parse = (text) => {
    const { tokens, errors: lexErrors } = factory_1.lexer.tokenize(text);
    factory_1.parser.text = text;
    factory_1.parser.input = tokens;
    return {
        cst: factory_1.parser.declaration(),
        tokens,
        lexErrors,
        parseErrors: factory_1.parser.errors
    };
};
exports.parse = parse;
//# sourceMappingURL=index.js.map