import type { AliasMap, ResolvedName, QualifiedName, AliasInformation } from '@sap-ux/odata-annotation-core-types';
import type { ParsedName } from '.';
/**
 * Normalize qualified name string to fully qualified name, based on the available namespaces.
 * If no matching namespaces will be found, then undefined is returned.
 *
 * @param namespaceMap Mapping from alias or namespace to namespace.
 * If namespace to namespace mappings are omitted, then converting identifiers which use namespaces will fail.
 * @param currentNamespace Namespace which will be used if the given name has not specified one.
 * @param identifier Identifier
 * @returns fully qualified name of the identifier or undefined if namespace could not be resolved.
 */
export declare function toFullyQualifiedName(namespaceMap: {
    [aliasOrNamespace: string]: string;
}, currentNamespace: string, identifier: ParsedName): string | undefined;
/**
 * Normalize parsed name to fully qualified name, based on the available namespaces.
 * If no matching namespaces will be found, then undefined is returned.
 *
 * @param qualifiedName Identifier in <Namespace|Alias>.<Name>  format
 * @param aliasMap `alias - namespace` and `namespace- alias` map of the file.
 * @returns segmented qualifiedName based on the aliasMap used in the current file.
 */
export declare function resolveName(qualifiedName: QualifiedName, aliasMap?: AliasMap): ResolvedName;
/**
 * Get alias qualified name.
 * If no matching alias is found, then uses the parameter itself.
 *
 * @param qualifiedName Identifier in <Namespace|Alias>.<Name>  format
 * @param aliasInfo alias information
 * @returns qualified name.
 */
export declare function toAliasQualifiedName(qualifiedName: QualifiedName, aliasInfo: AliasInformation): string;
//# sourceMappingURL=normalization.d.ts.map