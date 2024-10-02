import type { IToken, ILexingError, IRecognitionException } from 'chevrotain';
import type { DeclarationCstNode } from './parser';
interface ParseResult {
    cst: DeclarationCstNode;
    tokens: IToken[];
    lexErrors: ILexingError[];
    parseErrors: IRecognitionException[];
}
export declare const parse: (text: string) => ParseResult;
export {};
//# sourceMappingURL=index.d.ts.map