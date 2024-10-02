import type { Element, Attribute, Target, NoUndefinedNamespaceData, Position, AliasInformation, FileContent, NamespaceString } from '@sap-ux/odata-annotation-core';
import type { Vocabulary } from '@sap-ux/odata-vocabularies';
/**
 * Serializes reference.
 *
 * @param data namespace data (must not be undefined)
 * @param parentStartPosition
 * @returns string
 */
export declare function serializeReference(data: NoUndefinedNamespaceData, parentStartPosition?: number): string;
/**
 * Serializes attribute.
 *
 * @param attribute
 * @returns string
 */
export declare function serializeAttribute(attribute: Attribute): string;
/**
 * Serializes element.
 *
 * @param element
 * @param parentElementStartPosition
 * @returns string
 */
export declare function serializeElement(element: Element, parentElementStartPosition?: number): string;
/**
 * Serializes target.
 *
 * @param target
 * @param parentStartPostition
 * @returns string
 */
export declare function serializeTarget(target: Target, parentStartPostition?: number): string;
/**
 * Creates new annotation file object.
 *
 * @param aliasInfo
 * @param metadataUri
 * @param vocabularies
 * @returns annotation file object
 */
export declare function getNewAnnotationFile(aliasInfo: AliasInformation, metadataUri: string, vocabularies: Map<NamespaceString, Vocabulary>): {
    fileContent: FileContent;
    position: Position;
};
//# sourceMappingURL=serializer-edmx.d.ts.map