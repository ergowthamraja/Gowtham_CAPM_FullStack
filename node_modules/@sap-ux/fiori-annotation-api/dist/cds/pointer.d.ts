import type { AnnotationFile } from '@sap-ux/odata-annotation-core-types';
import type { CDSDocument, AstNode } from './document';
/**
 * Finds a matching node to the pointer.
 *
 * @param document - CDS document root.
 * @param pointer - Pointer matching a node in the document.
 * @returns All the nodes in path to the matching node.
 */
export declare function getAstNodesFromPointer(document: CDSDocument, pointer: string): AstNode[];
/**
 * Converts pointer from internal representation to CDS AST pointer.
 *
 * @param annotationFile - Internal representation root.
 * @param pointer - Pointer pointing to a node in the internal representation tree.
 * @param cdsDocument - Internal representation root.
 * @returns Converted pointer.
 */
export declare function convertPointer(annotationFile: AnnotationFile, pointer: string, cdsDocument: CDSDocument): {
    pointer: string;
    containsFlattenedNodes: boolean;
};
//# sourceMappingURL=pointer.d.ts.map