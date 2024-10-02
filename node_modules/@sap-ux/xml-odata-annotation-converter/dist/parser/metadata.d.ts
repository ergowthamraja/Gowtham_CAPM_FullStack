import type { XMLDocument } from '@xml-tools/ast';
import type { MetadataElement } from '@sap-ux/odata-annotation-core-types';
/**
 * Traverses the XML document and collects metadata element definitions.
 *
 * @param uri Uri of the document.
 * @param document XML document containing metadata.
 * @returns an array of MetadataElements extracted from the XML document.
 */
export declare function convertMetadataDocument(uri: string, document: XMLDocument): MetadataElement[];
//# sourceMappingURL=metadata.d.ts.map