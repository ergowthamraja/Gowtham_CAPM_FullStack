import type { Assignment } from '@sap-ux/cds-annotation-parser';
import type { Element, Position, Range } from '@sap-ux/odata-annotation-core';
export interface MatchedNode {
    pointer: string;
    range?: Range;
}
/**
 * Builds a pointer to a node in annotations,
 * which has the most specific range matching to the given position.
 *
 * @param assignment CDS annotation AST assignment node.
 * @param annotations Annotation elements.
 * @param position Position used to match nodes.
 * @returns matching node or undefined.
 */
export declare function findNode(assignment: Assignment, annotations: Element[], position: Position): MatchedNode | undefined;
export interface PositionVisitorOptions {
    position: Position;
}
//# sourceMappingURL=find-node.d.ts.map