import type { Position } from '@sap-ux/text-document-utils';
import type { AnnotationNode } from './transformer/annotation-ast-nodes';
export interface PositionVisitorOptions {
    /**
     * Position by which each node is matched.
     */
    position: Position;
    /**
     * Some nodes has delimiters e.g string with ''.
     * Setting this option to true will make the visitor also consider these delimiters as part of the node
     * and will match the node if the position is inside the delimiter.
     */
    includeDelimiterCharacters: boolean;
}
/**
 * Searches for an AST node in the given AST tree based on provided search options.
 *
 * @param assignment AST root element
 * @param options Search options (element position, flag whether delimiter characters should be considered)
 * @returns Path to the found AST node or empty string
 */
export declare const findAnnotationNode: (assignment: AnnotationNode | undefined, options: PositionVisitorOptions) => string;
export type ChildNode = AnnotationNode | AnnotationNode[];
/**
 * Traverses the nodes using path and returns last matching node.
 *
 * @param root Node from which to start the traversal.
 * @param path Path used to traverse.
 * @returns Node matching path
 */
export declare const getNode: (root: AnnotationNode, path: string) => ChildNode | undefined;
/**
 * Converts path to an array of nodes matching each segment of the path.
 *
 * @param root Node from which to start the traversal
 * @param path Path to a node
 * @returns Array containing all the matched nodes
 */
export declare function getAstNodes(root: AnnotationNode, path: string): ChildNode[] | undefined;
//# sourceMappingURL=find-annotation-node.d.ts.map