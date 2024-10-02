import type { AliasInformation, Namespace, Reference } from '@sap-ux/odata-annotation-core-types';
/**
 *  Builds alias maps for current file, include namespaces as alias names to enable unified handling
 *  also distinguish metadata and annotation references.
 *
 * @param namespaces collection of all the namespaces and references from file.
 * @param metadataNamespaces unique namespaces of metadata file.
 * @returns `alias - namespace` and `namespace- alias` map of the file.
 */
export declare function getAliasInformation(namespaces: (Namespace | Reference)[], metadataNamespaces: Set<string>): AliasInformation;
/**
 *  Collects namespace and references and returns the collection.
 *
 * @param namespace namespace of current file.
 * @param references references of the file.
 * @returns collection of namespace and references.
 */
export declare function getAllNamespacesAndReferences(namespace: Namespace | undefined, references: Reference[] | undefined): (Namespace | Reference)[];
//# sourceMappingURL=namespaces.d.ts.map