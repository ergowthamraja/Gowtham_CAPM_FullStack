import type { AstNode, CDSDocument } from './document';
import type { CompilerToken } from './cds-compiler-tokens';
/**
 * Finds the indentation level matching to the node of a pointer.
 *
 * @param document - CDS document root.
 * @param tokens - All tokens in the document.
 * @param pointer - Pointer to a node for which indentation will be returned.
 * @returns Indentation level of the node matching the pointer.
 */
export declare function getIndentLevelFromPointer(document: CDSDocument, tokens: CompilerToken[], pointer: string): number;
/**
 * Finds the indentation level of a node.
 *
 * @param tokens - All tokens in the document.
 * @param node - Node for which indentation will be returned.
 * @returns Indentation level of the node.
 */
export declare function getIndentLevelFromNode(tokens: CompilerToken[], node: AstNode): number;
//# sourceMappingURL=indent.d.ts.map