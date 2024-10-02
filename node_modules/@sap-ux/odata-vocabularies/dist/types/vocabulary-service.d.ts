/**
 * All types representing vocabulary objects should go here
 * (expected: one type per $Kind)
 *
 * Vocabularies will be imported from their json format
 *  described here: (https://docs.oasis-open.org/odata/odata-csdl-json/v4.01/odata-csdl-json-v4.01.html)
 *
 * Typescript types should represent at minimum those features of a vocabulary object that are used in
 * annotation-modeler core or annotation modeler APIs
 */
import type { FullyQualifiedName, SimpleIdentifier, TargetKind, COMPLEX_TYPE_KIND, ENUM_TYPE_KIND, TERM_KIND, TYPE_DEFINITION_KIND, PROPERTY_KIND, NamespaceString, TargetKindValue, Facets, Constraints } from '@sap-ux/odata-annotation-core-types';
import type { VocabularyNamespace } from '../resources';
/**
 * OData vocabulary
 */
export interface Vocabulary {
    namespace: NamespaceString;
    defaultAlias: SimpleIdentifier;
    defaultUri: string;
}
export interface CdsVocabulary {
    namespace: string;
    alias: string;
    nameMap: Map<string, string>;
    reverseNameMap: Map<string, string>;
    groupNames: Set<string>;
    singletonNames: Set<string>;
}
export interface AllowedValues {
    value: any;
    description: string;
    longDescription: string;
}
/**
 * Base for all Types and terms contained in vocabularies
 */
export interface BaseVocabularyObject {
    kind: string;
    name: FullyQualifiedName;
    description?: string;
    longDescription?: string;
    deprecated?: boolean;
    deprecatedDescription?: string;
    experimental?: string;
}
export interface PrimitiveType extends BaseVocabularyObject {
    underlyingType?: FullyQualifiedName;
}
/**
 * EnumType definition ("$Kind": "EnumType")
 */
export interface EnumType extends PrimitiveType {
    kind: typeof ENUM_TYPE_KIND;
    isFlags?: boolean;
    values: EnumValue[];
}
export declare const ENUM_VALUE_KIND = "Member";
export declare const CDS_VOCABULARY_NAMESPACE = "com.sap.vocabularies.CDS.v1";
export declare const CDS_VOCABULARY_ALIAS = "CDS";
export interface EnumValue extends BaseVocabularyObject {
    kind: typeof ENUM_VALUE_KIND;
    value: number;
}
/**
 * Type Definition ("$Kind": "TypeDefinition")
 */
export interface TypeDefinition extends PrimitiveType {
    kind: typeof TYPE_DEFINITION_KIND;
    facets?: Facets;
    constraints?: Constraints;
}
/**
 * Property of a complex type ("$Kind": "Property")
 */
export interface ComplexTypeProperty extends BaseVocabularyObject {
    kind: typeof PROPERTY_KIND;
    type: FullyQualifiedName;
    isCollection: boolean;
    isOpenType?: boolean;
    facets?: Facets;
    constraints?: Constraints;
    defaultValue?: unknown;
}
interface ComplexTypeBase extends PrimitiveType {
    kind: typeof COMPLEX_TYPE_KIND;
    isAbstract?: boolean;
    isOpenType?: boolean;
    properties: Map<string, ComplexTypeProperty>;
    constraints?: Constraints;
}
/**
 * ComplexType ("$Kind": "ComplexType")
 */
export interface ComplexType extends ComplexTypeBase {
    baseType?: FullyQualifiedName;
}
/**
 * ComplexType with all base types resolved
 * properties will contain aggregated list of properties
 */
export interface ExpandedComplexType extends ComplexTypeBase {
    baseTypes: FullyQualifiedName[];
}
/**
 * possible results for checking applicability of term
 */
export declare enum TermApplicability {
    Applicable = 0,
    TermNotApplicable = 1,
    TypeNotApplicable = 2,
    UnknownTerm = 3,
    UnknownVocabulary = 4,
    UnSupportedVocabulary = 5,
    NotInApplicableTermsConstraint = 6
}
/**
 * Term ("$Kind": "Term")
 */
export interface Term extends BaseVocabularyObject {
    kind: typeof TERM_KIND;
    type: FullyQualifiedName;
    isCollection: boolean;
    appliesTo?: TargetKindValue[];
    baseTerm?: FullyQualifiedName;
    facets?: Facets;
    constraints?: Constraints;
    defaultValue?: unknown;
    cdsName?: FullyQualifiedName;
}
export interface VocabulariesInformation {
    dictionary: Map<FullyQualifiedName, VocabularyObject>;
    byTarget: Map<TargetKind | '', Set<FullyQualifiedName>>;
    supportedVocabularies: Map<VocabularyNamespace, Vocabulary>;
    namespaceByDefaultAlias: Map<SimpleIdentifier, VocabularyNamespace>;
    derivedTypesPerType: Map<FullyQualifiedName, Map<FullyQualifiedName, boolean>>;
    upperCaseNameMap: Map<string, string | Map<string, string>>;
}
export type VocabularyType = TypeDefinition | EnumType | ComplexType;
export type VocabularyObject = VocabularyType | Term;
export type MarkdownString = string;
export {};
//# sourceMappingURL=vocabulary-service.d.ts.map