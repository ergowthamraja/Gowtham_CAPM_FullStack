import type { AliasInformation } from '@sap-ux/odata-annotation-core';
import type { AnnotationListWithOrigins, AnnotationWithOrigin, CollectionExpressionWithOrigins, RecordWithOrigins } from './annotations';
import type { AVTNode } from './types';
export interface NamespaceMap {
    [aliasOrNamespace: string]: string;
}
/**
 *  Converts path to fully qualified path.
 *
 * @param namespaceMap - Namespace or alias to namespace map.
 * @param currentNamespace - Current files namespace.
 * @param path - Path to be converted.
 * @returns Fully qualified path.
 */
export declare function resolvePath(namespaceMap: NamespaceMap, currentNamespace: string, path: string): string;
/**
 * Converts enum member to fully qualified name.
 *
 * @param namespaceMap - Namespace or alias to namespace map.
 * @param currentNamespace - Current files namespace.
 * @param enumMemberString - Enum member name.
 * @returns Fully qualified enum member name.
 */
export declare function resolveEnumMemberValue(namespaceMap: NamespaceMap, currentNamespace: string, enumMemberString: string): string;
/**
 * Converts enum member name to alias qualified name.
 *
 * @param aliasInfo - Alias information.
 * @param enumMember - Enum member name
 * @returns Alias qualified enum member name.
 */
export declare function getAliasedEnumMember(aliasInfo: AliasInformation, enumMember: string): string;
/**
 * Checks if AVT node is an annotation list.
 *
 * @param node - AVT node.
 * @returns True if node is an annotation list.
 */
export declare function isAnnotationList(node: AVTNode): node is AnnotationListWithOrigins;
/**
 * Checks if AVT node is an annotation.
 *
 * @param node - AVT node.
 * @returns True if node is an annotation.
 */
export declare function isAnnotation(node: AVTNode): node is AnnotationWithOrigin;
/**
 * Checks if AVT node is a record.
 *
 * @param node - AVT node.
 * @returns True if node is a record.
 */
export declare function isRecord(node: AVTNode): node is RecordWithOrigins;
/**
 * Checks if AVT node is a collection.
 *
 * @param node - AVT node.
 * @returns True if node is a collection.
 */
export declare function isCollection(node: AVTNode): node is CollectionExpressionWithOrigins;
//# sourceMappingURL=utils.d.ts.map