import type { AnnotationFile } from '@sap-ux/odata-annotation-core-types';
import { Range, Position } from '@sap-ux/odata-annotation-core-types';
type Segment = string | number;
export interface VisitorReturnValue {
    path: Segment[];
    range?: Range;
    startString?: string;
    remainingString?: string;
}
export interface FindPathResult extends StartAndRemainingString {
    found: boolean;
    /**
     * JSON path
     */
    path: string;
}
export interface StartAndRemainingString {
    startString: string;
    remainingString: string;
}
/**
 * Finds a path to a node by the given position.
 *
 * @param annotationFile File in which to search the node. This can be mutated and empty nodes
 * added in case position is in a whitespace.
 * @param position Position used to match nodes.
 * @param forCompletion Position needs to be interpreted differently for completion cases.
 * Cursor position at the edges of the nodes can require a different behavior.
 * @returns path to node and its range (if defined)
 */
export declare function findPathToPosition(annotationFile: AnnotationFile, position: Position, forCompletion?: boolean): {
    path: string;
    range?: Range;
} | undefined;
/**
 * Verifies that position pointer points to a node in the given file and converts the pointer to
 * JSON path.
 *
 * @param annotationFile File in which the target node is located.
 * @param positionPointer Pointer in the form /\<propertyName\>/\<arrayIndex\>/.. to specify position inside object tree.
 * Node: last segment can have special meanings:
 *
 * - when last segment starts with $ followed by an integer value to be applied on a string: integer value specifies character index in that string
 * @returns
 */
export declare function getPositionData(annotationFile: AnnotationFile, positionPointer: string): FindPathResult;
export {};
//# sourceMappingURL=find-by-position.d.ts.map