import type { AliasInformation, MetadataElement, IMetadataService, PathValue } from '@sap-ux/odata-annotation-core-types';
/**
 * Gets outermost Metadata element which represents an entity type or complex type or has a structured type.
 *
 * @param metadata - metadataService instance
 * @param targetPath - segments separated by '/'; absolute (starts with /) or relative path
 * @param aliasInfo - object containing `alias - namespace` and `namespace - alias` maps of the file.
 * @returns metadata element or null
 */
export declare function getPathBaseMetadataElement(metadata: IMetadataService, targetPath: PathValue, aliasInfo?: AliasInformation): MetadataElement | null;
/**
 * Get segment without alias.
 *
 * @param aliasInfo  - object containing `alias - namespace` and `namespace - alias` maps of the file.
 * @param segment -  value separated by '/'
 * @returns segment text
 */
export declare function getSegmentWithoutAlias(aliasInfo: AliasInformation, segment: string): string;
//# sourceMappingURL=metadata.d.ts.map