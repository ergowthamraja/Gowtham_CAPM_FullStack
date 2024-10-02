import type { XMLDocument } from '@xml-tools/ast';
import type { AnnotationFile } from '@sap-ux/odata-annotation-core';
/**
 * Convert AST of an XML document to annotation document.
 *
 * @param uri Uri of the document.
 * @param ast XML document containing annotations.
 * @returns annotation file.
 */
export declare function convertDocument(uri: string, ast: XMLDocument): AnnotationFile;
//# sourceMappingURL=document.d.ts.map