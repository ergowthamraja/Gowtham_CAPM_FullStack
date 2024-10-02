import type { AnyNode } from '@sap-ux/odata-annotation-core-types';
import type { JsonPointer } from '../types';
/**
 *  Traverses the object tree and finds a node based on the pointer.
 *
 * @param root - Root of the object tree.
 * @param pointer - Pointer pointing to a specific node.
 * @returns A node.
 */
export declare function getGenericNodeFromPointer(root: AnyNode, pointer: JsonPointer): AnyNode | undefined;
//# sourceMappingURL=pointer.d.ts.map