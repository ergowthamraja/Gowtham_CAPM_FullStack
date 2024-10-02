import type { CstNode, IToken, CstNodeLocation } from 'chevrotain';
import { Range, Position } from '@sap-ux/text-document-utils';
import type { AstResult } from './annotation-ast-nodes';
export declare const locationToRange: (location?: CstNodeLocation) => Range | undefined;
export declare const buildAst: (cst: CstNode, tokenVector: IToken[], startPosition?: Position) => AstResult;
//# sourceMappingURL=ast.d.ts.map