"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Visitor = exports.parser = exports.lexer = void 0;
const chevrotain_1 = require("chevrotain");
const tokens_1 = require("./tokens");
const parser_1 = require("./parser");
exports.lexer = new chevrotain_1.Lexer(tokens_1.lexerDefinition, {
    // Enable validation for debugging
    skipValidations: true
});
exports.parser = new parser_1.AnnotationParser();
exports.Visitor = exports.parser.getBaseCstVisitorConstructor();
//# sourceMappingURL=factory.js.map