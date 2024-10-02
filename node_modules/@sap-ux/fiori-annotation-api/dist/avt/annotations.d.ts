import type { TargetPath, AnnotationFile, Range } from '@sap-ux/odata-annotation-core-types';
import type { AnnotationList, AnnotationRecord, CollectionExpression, RawAnnotation } from '@sap-ux/vocabularies-types';
import type { VocabularyService } from '@sap-ux/odata-vocabularies';
/**
 * Types for adding more origin information to annotations
 * (all added properties are optional so these types can also be used when no origin information shall be added)
 */
export interface AnnotationListWithOrigins extends AnnotationList {
    /**
     *  Path identifying the targeted metadata element (e.g. \<namespace\>.\<EntityType\>/\<PropertyName\> )
     */
    target: TargetPath;
    /**
     * Generated type!! It is assumed that no introspection is required to interpret the content!
     */
    annotations: AnnotationWithOrigin[];
    /**
     * Origins for annotations (look for same index)
     */
    origins?: (Range | undefined)[];
}
export interface AnnotationWithOrigin extends RawAnnotation {
    /**
     * Range of annotation (for non embedded annotations this is also contained in TargetAnnotationsWithOrigins.origins)
     */
    origin?: Range;
    /**
     * Ranges of entries in Annotation.collection (if present)
     */
    collectionOrigins?: (Range | undefined)[];
    /**
     * Extend existing property with origin information
     */
    record?: RecordWithOrigins;
    /**
     * Extend existing property with origin information
     */
    annotations?: AnnotationWithOrigin[];
}
export interface CollectionExpressionWithOrigins extends CollectionExpression {
    /**
     * Ranges of collection entries when Collection is used as expression
     */
    collectionOrigins?: (Range | undefined)[];
}
export interface RecordWithOrigins extends AnnotationRecord {
    /**
     * Ranges of propertyValues
     */
    propertyValuesOrigins?: (Range | undefined)[];
    /**
     * Extend existing property with origin information
     */
    annotations?: AnnotationWithOrigin[];
}
/**
 * Converts internal representation annotation files to AVT format.
 *
 * @param file - Internal representation root.
 * @param serviceName - Service Name.
 * @param options - Conversion options.
 * @returns AVT annotations.
 */
export declare function convertAnnotationFile(file: AnnotationFile, serviceName: string, options?: ConversionOptions): AnnotationListWithOrigins[];
type ConversionOptions = {
    addOrigins?: boolean;
    vocabularyService?: VocabularyService;
    mergeSplitAnnotations: boolean;
    mergeMap: Record<string, string>;
};
export {};
//# sourceMappingURL=annotations.d.ts.map