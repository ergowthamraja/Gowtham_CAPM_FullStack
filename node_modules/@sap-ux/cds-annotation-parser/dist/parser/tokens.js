"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lexerDefinition = exports.tokenMap = exports.OPERATOR = exports.UP_TO_KEYWORD = exports.SPREAD_OPERATOR = exports.TIMESTAMP_TOKEN_TYPE = exports.TIME_TOKEN_TYPE = exports.DATE_TOKEN_TYPE = exports.BINARY_TOKEN_TYPE = exports.FALSE_TOKEN_TYPE = exports.TRUE_TOKEN_TYPE = exports.NULL_TOKEN_TYPE = exports.NUMBER_TOKEN_TYPE = exports.WHITE_SPACE_TOKEN_TYPE = exports.R_PAREN_TOKEN_TYPE = exports.L_PAREN_TOKEN_TYPE = exports.R_CURLY_TOKEN_TYPE = exports.L_CURLY_TOKEN_TYPE = exports.R_BRACKET_TOKEN_TYPE = exports.L_BRACKET_TOKEN_TYPE = exports.IDENTIFIER_START_TOKEN_TYPE = exports.DOUBLE_QUOTE_TOKEN_TYPE = exports.SINGLE_QUOTE_TOKEN_TYPE = exports.PATH_SEGMENT_SEPARATOR_TOKEN_TYPE = exports.COMMA_TOKEN_TYPE = exports.COLON_TOKEN_TYPE = exports.NUMBER_SIGN_TOKEN_TYPE = exports.LINE_COMMENT_TOKEN_TYPE = exports.COMMENT_TOKEN_TYPE = exports.STRING_EXIT_TOKEN_TYPE = exports.STRING_TOKEN_TYPE = exports.MULTI_LINE_STRING_STRIP_INDENT_EXIT_TOKEN_TYPE = exports.MULTI_LINE_STRING_TOKEN_TYPE = exports.MULTI_LINE_STRING_EXIT_TOKEN_TYPE = exports.TRIPLE_BACKTICK_TOKEN_TYPE = exports.BACKTICK_TOKEN_TYPE = exports.IDENTIFIER_TOKEN_TYPE = exports.TERM_CAST_IDENTIFIER_TOKEN_TYPE = exports.DELIMITED_IDENTIFIER_EXIT_TOKEN_TYPE = exports.DELIMITED_IDENTIFIER_TOKEN_TYPE = exports.QUOTED_IDENTIFIER_EXIT_TOKEN_TYPE = exports.QUOTED_IDENTIFIER_TOKEN_TYPE = exports.EXPRESSION_MODE = exports.DELIMITED_IDENTIFIER_MODE = exports.MULTI_LINE_STRING_STRIP_INDENT_MODE = exports.MULTI_LINE_STRING_MODE = exports.STRING_MODE = exports.QUOTED_IDENTIFIER_MODE = exports.DEFAULT_MODE = void 0;
const chevrotain_1 = require("chevrotain");
exports.DEFAULT_MODE = 'default_mode';
exports.QUOTED_IDENTIFIER_MODE = 'quoted_mode';
exports.STRING_MODE = 'string_mode';
exports.MULTI_LINE_STRING_MODE = 'multi_line_string_mode';
exports.MULTI_LINE_STRING_STRIP_INDENT_MODE = 'multi_line_string_strip_indent_mode';
exports.DELIMITED_IDENTIFIER_MODE = 'delimited_mode';
exports.EXPRESSION_MODE = 'expression_mode';
exports.QUOTED_IDENTIFIER_TOKEN_TYPE = 'QuotedIdentifier';
const QuotedIdentifier = (0, chevrotain_1.createToken)({ name: exports.QUOTED_IDENTIFIER_TOKEN_TYPE, pattern: /[^/\u0022\n\r\u2028\u2029.]+/ });
exports.QUOTED_IDENTIFIER_EXIT_TOKEN_TYPE = 'QuotedIdentifierExit';
const QuotedIdentifierExit = (0, chevrotain_1.createToken)({
    name: exports.QUOTED_IDENTIFIER_EXIT_TOKEN_TYPE,
    pattern: /[\u0022\n\r\u2028\u2029]/,
    pop_mode: true
});
exports.DELIMITED_IDENTIFIER_TOKEN_TYPE = 'DelimitedIdentifier';
const DelimitedIdentifier = (0, chevrotain_1.createToken)({
    name: exports.DELIMITED_IDENTIFIER_TOKEN_TYPE,
    pattern: /[^\u005d\n\r\u2028\u2029./]+/
});
exports.DELIMITED_IDENTIFIER_EXIT_TOKEN_TYPE = 'DelimitedIdentifierExit';
const DelimitedIdentifierExit = (0, chevrotain_1.createToken)({
    name: exports.DELIMITED_IDENTIFIER_EXIT_TOKEN_TYPE,
    pattern: /[\u005d\n\r\u2028\u2029]/,
    pop_mode: true
});
exports.TERM_CAST_IDENTIFIER_TOKEN_TYPE = 'TermCastIdentifier';
const TermCastIdentifier = (0, chevrotain_1.createToken)({
    name: exports.TERM_CAST_IDENTIFIER_TOKEN_TYPE,
    pattern: /[@$_a-zA-Z][$_a-zA-Z0-9]*/
});
exports.IDENTIFIER_TOKEN_TYPE = 'Identifier';
const Identifier = (0, chevrotain_1.createToken)({
    name: exports.IDENTIFIER_TOKEN_TYPE,
    pattern: /[$_a-zA-Z][$_a-zA-Z0-9]*/,
    longer_alt: TermCastIdentifier
});
exports.BACKTICK_TOKEN_TYPE = 'Backtick';
const Backtick = (0, chevrotain_1.createToken)({ name: exports.BACKTICK_TOKEN_TYPE, pattern: '`', push_mode: exports.MULTI_LINE_STRING_MODE });
exports.TRIPLE_BACKTICK_TOKEN_TYPE = 'TripleBacktick';
const TripleBacktick = (0, chevrotain_1.createToken)({
    name: exports.TRIPLE_BACKTICK_TOKEN_TYPE,
    pattern: '```',
    push_mode: exports.MULTI_LINE_STRING_STRIP_INDENT_MODE
});
exports.MULTI_LINE_STRING_EXIT_TOKEN_TYPE = 'MultiLineStringExit';
const MultiLineStringExit = (0, chevrotain_1.createToken)({ name: exports.MULTI_LINE_STRING_EXIT_TOKEN_TYPE, pattern: /`/, pop_mode: true });
exports.MULTI_LINE_STRING_TOKEN_TYPE = 'MultiLineString';
const MultiLineString = (0, chevrotain_1.createToken)({ name: exports.MULTI_LINE_STRING_TOKEN_TYPE, pattern: /(([^`]+|'')+)/ });
exports.MULTI_LINE_STRING_STRIP_INDENT_EXIT_TOKEN_TYPE = 'MultiLineStringStripIndentExit';
const MultiLineStringStripIndentExit = (0, chevrotain_1.createToken)({
    name: exports.MULTI_LINE_STRING_STRIP_INDENT_EXIT_TOKEN_TYPE,
    pattern: /`{3}/,
    pop_mode: true
});
exports.STRING_TOKEN_TYPE = 'String';
const StringToken = (0, chevrotain_1.createToken)({ name: exports.STRING_TOKEN_TYPE, pattern: /(([^\n\r']+|'')+)/ });
exports.STRING_EXIT_TOKEN_TYPE = 'StringExit';
const StringExit = (0, chevrotain_1.createToken)({ name: exports.STRING_EXIT_TOKEN_TYPE, pattern: /[\n\r']/, pop_mode: true });
exports.COMMENT_TOKEN_TYPE = 'Comment';
const Comment = (0, chevrotain_1.createToken)({
    name: exports.COMMENT_TOKEN_TYPE,
    pattern: /\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*\/+/,
    line_breaks: true,
    group: 'comments'
});
exports.LINE_COMMENT_TOKEN_TYPE = 'LineComment';
const LineComment = (0, chevrotain_1.createToken)({
    name: exports.LINE_COMMENT_TOKEN_TYPE,
    pattern: /\/\/[^\n\r\f]*/,
    group: 'comments'
});
exports.NUMBER_SIGN_TOKEN_TYPE = 'NumberSign';
const NumberSign = (0, chevrotain_1.createToken)({ name: exports.NUMBER_SIGN_TOKEN_TYPE, pattern: '#' });
exports.COLON_TOKEN_TYPE = 'Colon';
const Colon = (0, chevrotain_1.createToken)({ name: exports.COLON_TOKEN_TYPE, pattern: ':' });
exports.COMMA_TOKEN_TYPE = 'Comma';
const Comma = (0, chevrotain_1.createToken)({ name: exports.COMMA_TOKEN_TYPE, pattern: ',' });
exports.PATH_SEGMENT_SEPARATOR_TOKEN_TYPE = 'PathSegmentSeparator';
const PathSegmentSeparator = (0, chevrotain_1.createToken)({ name: exports.PATH_SEGMENT_SEPARATOR_TOKEN_TYPE, pattern: /[./]/ });
exports.SINGLE_QUOTE_TOKEN_TYPE = 'SingleQuote';
const SingleQuote = (0, chevrotain_1.createToken)({ name: exports.SINGLE_QUOTE_TOKEN_TYPE, pattern: "'", push_mode: exports.STRING_MODE });
exports.DOUBLE_QUOTE_TOKEN_TYPE = 'DoubleQuote';
const DoubleQuote = (0, chevrotain_1.createToken)({ name: exports.DOUBLE_QUOTE_TOKEN_TYPE, pattern: '"', push_mode: exports.QUOTED_IDENTIFIER_MODE });
exports.IDENTIFIER_START_TOKEN_TYPE = 'IdentifierStart';
const IdentifierStart = (0, chevrotain_1.createToken)({
    name: exports.IDENTIFIER_START_TOKEN_TYPE,
    pattern: '![',
    push_mode: exports.DELIMITED_IDENTIFIER_MODE
});
exports.L_BRACKET_TOKEN_TYPE = 'LBracket';
const LBracket = (0, chevrotain_1.createToken)({ name: exports.L_BRACKET_TOKEN_TYPE, pattern: '[' });
exports.R_BRACKET_TOKEN_TYPE = 'RBracket';
const RBracket = (0, chevrotain_1.createToken)({ name: exports.R_BRACKET_TOKEN_TYPE, pattern: ']' });
exports.L_CURLY_TOKEN_TYPE = 'LCurly';
const LCurly = (0, chevrotain_1.createToken)({ name: exports.L_CURLY_TOKEN_TYPE, pattern: '{' });
exports.R_CURLY_TOKEN_TYPE = 'RCurly';
const RCurly = (0, chevrotain_1.createToken)({ name: exports.R_CURLY_TOKEN_TYPE, pattern: '}' });
exports.L_PAREN_TOKEN_TYPE = 'LParen';
const LParen = (0, chevrotain_1.createToken)({ name: exports.L_PAREN_TOKEN_TYPE, pattern: '(', push_mode: exports.EXPRESSION_MODE });
exports.R_PAREN_TOKEN_TYPE = 'RParen';
const RParen = (0, chevrotain_1.createToken)({ name: exports.R_PAREN_TOKEN_TYPE, pattern: ')', pop_mode: true });
exports.WHITE_SPACE_TOKEN_TYPE = 'WhiteSpace';
const WhiteSpace = (0, chevrotain_1.createToken)({
    name: exports.WHITE_SPACE_TOKEN_TYPE,
    pattern: /\s+/,
    group: chevrotain_1.Lexer.SKIPPED,
    line_breaks: true
});
exports.NUMBER_TOKEN_TYPE = 'Number';
const NumberToken = (0, chevrotain_1.createToken)({ name: exports.NUMBER_TOKEN_TYPE, pattern: /([+-])?\d+(\.\d+)?([eE]([+-])?\d+)?/ });
// keywords
exports.NULL_TOKEN_TYPE = 'Null';
const Null = (0, chevrotain_1.createToken)({ name: exports.NULL_TOKEN_TYPE, pattern: /null/i, longer_alt: Identifier });
exports.TRUE_TOKEN_TYPE = 'True';
const True = (0, chevrotain_1.createToken)({ name: exports.TRUE_TOKEN_TYPE, pattern: /true/i, longer_alt: Identifier });
exports.FALSE_TOKEN_TYPE = 'False';
const False = (0, chevrotain_1.createToken)({ name: exports.FALSE_TOKEN_TYPE, pattern: /false/i, longer_alt: Identifier });
exports.BINARY_TOKEN_TYPE = 'Binary';
const Binary = (0, chevrotain_1.createToken)({
    name: exports.BINARY_TOKEN_TYPE,
    pattern: /x'[^\n\r']+'?/i
});
exports.DATE_TOKEN_TYPE = 'Date';
const DateToken = (0, chevrotain_1.createToken)({
    name: exports.DATE_TOKEN_TYPE,
    pattern: /Date'[^\n\r']+'?/i
});
exports.TIME_TOKEN_TYPE = 'Time';
const Time = (0, chevrotain_1.createToken)({ name: exports.TIME_TOKEN_TYPE, pattern: /Time'[^\n\r']+'?/i });
exports.TIMESTAMP_TOKEN_TYPE = 'Timestamp';
const Timestamp = (0, chevrotain_1.createToken)({
    name: exports.TIMESTAMP_TOKEN_TYPE,
    pattern: /Timestamp'[^\n\r']+'?/i
});
exports.SPREAD_OPERATOR = 'SpreadOperator';
const SpreadOperator = (0, chevrotain_1.createToken)({
    name: exports.SPREAD_OPERATOR,
    pattern: /[.]{3}/i
});
exports.UP_TO_KEYWORD = 'UpToKeyword';
const UpToKeyword = (0, chevrotain_1.createToken)({
    name: exports.UP_TO_KEYWORD,
    pattern: /up to/i
});
// cap documentation refers to db operators - HANA DB operators https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/20a380977519101494ceddd944e87527.html
// for each operator token: maintain operator metadata (operatorMap, operatorImageMap in /transformer/expressions.ts)
exports.OPERATOR = 'Operator';
const words = (...values) => values.map((value) => '\\b' + value + '\\b');
const regEx = new RegExp([
    '=',
    '!=',
    '<>',
    '>=?',
    '<=?',
    '\\?',
    ':',
    '\\|\\|',
    '\\+',
    '-',
    '\\*',
    '\\/',
    ...words('IS NULL', 'IS NOT NULL', 'NOT LIKE', 'LIKE', 'NOT BETWEEN', 'BETWEEN', 'NOT', 'AND', 'OR')
].join('|'), 'i');
const Operator = (0, chevrotain_1.createToken)({
    name: exports.OPERATOR,
    pattern: regEx
});
exports.tokenMap = {
    Comment,
    LineComment,
    NumberSign,
    Colon,
    Comma,
    PathSegmentSeparator,
    SingleQuote,
    DoubleQuote,
    IdentifierStart,
    LBracket,
    RBracket,
    LCurly,
    RCurly,
    LParen,
    RParen,
    WhiteSpace,
    Number: NumberToken,
    Binary,
    Date: DateToken,
    Time,
    Timestamp,
    Null,
    True,
    False,
    Identifier,
    TermCastIdentifier,
    DelimitedIdentifier,
    QuotedIdentifier,
    String: StringToken,
    StringExit,
    QuotedIdentifierExit,
    DelimitedIdentifierExit,
    SpreadOperator,
    UpToKeyword,
    MultiLineString,
    MultiLineStringExit,
    MultiLineStringStripIndentExit,
    Backtick,
    TripleBacktick,
    Operator
};
exports.lexerDefinition = {
    modes: {
        [exports.DEFAULT_MODE]: [
            SpreadOperator,
            UpToKeyword,
            Comment,
            LineComment,
            NumberSign,
            Colon,
            Comma,
            PathSegmentSeparator,
            TripleBacktick,
            Backtick,
            SingleQuote,
            DoubleQuote,
            IdentifierStart,
            LBracket,
            RBracket,
            LCurly,
            RCurly,
            LParen,
            WhiteSpace,
            NumberToken,
            Binary,
            DateToken,
            Time,
            Timestamp,
            Null,
            True,
            False,
            Operator,
            Identifier,
            TermCastIdentifier
        ],
        [exports.QUOTED_IDENTIFIER_MODE]: [QuotedIdentifier, PathSegmentSeparator, QuotedIdentifierExit],
        [exports.DELIMITED_IDENTIFIER_MODE]: [DelimitedIdentifier, PathSegmentSeparator, DelimitedIdentifierExit],
        [exports.STRING_MODE]: [StringToken, StringExit],
        [exports.MULTI_LINE_STRING_STRIP_INDENT_MODE]: [MultiLineString, MultiLineStringStripIndentExit],
        [exports.MULTI_LINE_STRING_MODE]: [MultiLineString, MultiLineStringExit],
        [exports.EXPRESSION_MODE]: [
            LParen,
            Comment,
            LineComment,
            NumberSign,
            TripleBacktick,
            Backtick,
            SingleQuote,
            DoubleQuote,
            IdentifierStart,
            LBracket,
            RBracket,
            LCurly,
            RCurly,
            WhiteSpace,
            Operator,
            NumberToken,
            Binary,
            DateToken,
            Time,
            Timestamp,
            Null,
            True,
            False,
            PathSegmentSeparator,
            Identifier,
            TermCastIdentifier,
            RParen
        ],
        delimited: []
    },
    defaultMode: exports.DEFAULT_MODE
};
//# sourceMappingURL=tokens.js.map