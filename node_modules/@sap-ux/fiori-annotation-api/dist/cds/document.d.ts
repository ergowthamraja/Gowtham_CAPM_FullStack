import type { AnnotationFile, Namespace, Reference } from '@sap-ux/odata-annotation-core-types';
import { Range } from '@sap-ux/odata-annotation-core-types';
import type { Target } from '@sap-ux/cds-odata-annotation-converter';
import type { Assignment, AnnotationNode, AnnotationGroupItems, Collection, Record } from '@sap-ux/cds-annotation-parser';
import { type CdsCompilerFacade, type MetadataCollector, type PropagatedTargetMap } from '@sap/ux-cds-compiler-facade';
import type { VocabularyService } from '@sap-ux/odata-vocabularies';
import type { TextFile } from '../types';
import type { Comment } from './comments';
import type { CompilerToken } from './cds-compiler-tokens';
export declare const CDS_DOCUMENT_TYPE = "document";
export type CDSDocument = {
    type: typeof CDS_DOCUMENT_TYPE;
    uri: string;
    namespace?: Namespace;
    references: Reference[];
    targets: Target[];
    range?: Range;
};
export interface Document {
    uri: string;
    ast: CDSDocument;
    comments: Comment[];
    tokens: CompilerToken[];
    annotationFile: AnnotationFile;
}
export type AstNode = Reference | Target | Assignment | AnnotationNode | CDSDocument;
/**
 * Creates CDS document.
 *
 * @param serviceName - Name of the service.
 * @param vocabularyService - Vocabulary API.
 * @param facade - CDS compiler facade instance.
 * @param fileCache - File content cache.
 * @param file - File
 * @param metadataCollector - Metadata collector instance.
 * @returns CDS document.
 */
export declare function getDocument(serviceName: string, vocabularyService: VocabularyService, facade: CdsCompilerFacade, fileCache: Map<string, string>, file: TextFile, metadataCollector: MetadataCollector): Document;
/**
 * Creates ghost file document.
 *
 * @param serviceName - Name of the service.
 * @param vocabularyService - Vocabulary API.
 * @param facade - CDS compiler facade instance.
 * @param fileCache - File content cache.
 * @param file - File
 * @param metadataCollector - Metadata collector instance.
 * @param propagatedTargetMap - Propagation map.
 * @returns Ghost file document.
 */
export declare function getGhostFileDocument(serviceName: string, vocabularyService: VocabularyService, facade: CdsCompilerFacade, fileCache: Map<string, string>, file: TextFile, metadataCollector: MetadataCollector, propagatedTargetMap: PropagatedTargetMap): Document;
export type ContainerNode = Target | AnnotationGroupItems | Collection | Record;
/**
 * Returns the number of children in the container node.
 *
 * @param container - Container AST node.
 * @returns Number of children.
 */
export declare function getChildCount(container: ContainerNode): number;
/**
 * Returns child nodes for the given container node.
 *
 * @param container - Container AST node.
 * @returns All child nodes of the container.
 */
export declare function getItems(container: ContainerNode): AstNode[];
//# sourceMappingURL=document.d.ts.map