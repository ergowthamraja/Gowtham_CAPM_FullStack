import type { Identifier, AnnotationValue } from '@sap-ux/cds-annotation-parser';
import type { Subtree } from './handler';
import type { VisitorState } from './visitor-state';
/**
 * Builds a tree from a flattened annotation structure and updates context with the final value type.
 *
 * @param state VisitorSate for which context will be updated with the inferred value types.
 * @param segments Array of identifiers representing flattened record structure.
 * @param value annotation value.
 * @returns subtree representing flattened structure
 */
export declare function convertFlattenedPath(state: VisitorState, segments: Identifier[], value: AnnotationValue | undefined): Subtree | undefined;
//# sourceMappingURL=flattened.d.ts.map