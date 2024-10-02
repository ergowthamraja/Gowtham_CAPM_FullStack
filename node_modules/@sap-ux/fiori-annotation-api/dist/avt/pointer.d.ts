import type { Element } from '@sap-ux/odata-annotation-core-types';
import type { JsonPointer } from '../types';
/**
 * Convert path in annotation to internal representation.
 *
 * @param annotation - Internal representation element.
 * @param pointer - path in external representation
 * @param valueType - Current value type
 * @returns Pointer to an internal representation node.
 */
export declare function convertPointerInAnnotationToInternal(annotation: Element, pointer: JsonPointer, valueType?: string): JsonPointer;
//# sourceMappingURL=pointer.d.ts.map