import type { ComplexType, ExpandedComplexType, MarkdownString, ComplexTypeProperty, Term, Vocabulary, VocabularyObject, VocabularyType, EnumValue, CdsVocabulary, TypeDefinition, EnumType } from './types/vocabulary-service';
import { TermApplicability } from './types/vocabulary-service';
import type { VocabularyAlias } from './resources';
import type { TargetKind, FullyQualifiedName, SimpleIdentifier, FullyQualifiedTypeName, NameQualifier, QualifiedName, NamespaceString, AliasInformation } from '@sap-ux/odata-annotation-core-types';
type ElementType = TypeDefinition | EnumType | ComplexType | Term | ComplexTypeProperty | EnumValue;
/**
 * Vocabulary service class
 *
 * @class
 */
export declare class VocabularyService {
    private readonly dictionary;
    private readonly byTarget;
    private readonly supportedVocabularies;
    private readonly namespaceByDefaultAlias;
    private readonly derivedTypesPerType;
    readonly upperCaseNameMap: Map<string, string | Map<string, string>>;
    readonly cdsVocabulary: CdsVocabulary;
    /**
     *
     * @param fullyQualifiedName Fully qualified name
     * @returns Namespace and simple identifier
     */
    private resolveName;
    /**
     * Get alias qualified name.
     * If no matching alias is found, then uses the parameter itself.
     *
     * @param qualifiedName Identifier in <Namespace|Alias>.<Name>  format
     * @param aliasInfo alias information
     * @returns qualified name.
     */
    private toAliasQualifiedName;
    /**
     *
     * @param type Name of the type that will be checked
     * @param complyingType Name of the type to check against
     * @returns True if types are compatible
     */
    private isOfType;
    /**
     *
     * @param includeCds Flag indicating if CDS vocabulary be loaded
     * @param includeCdsAnalytics (for includeCds=true only) Flag indicating if additional vocabularies for CDS analytics should be loaded
     * @returns Vocabulary service instance
     */
    constructor(includeCds?: boolean, includeCdsAnalytics?: boolean);
    /**
     * Add CDS specific annotation terms.
     *
     * CDS documentation recommends using a shortcut with below listed annotation terms.
     *
     * Common.TextArrangement.
     * Capabilities.Insertable.
     * Capabilities.Updatable.
     * Capabilities.Deletable.
     * Capabilities.Readable.
     *
     * @param vocabularyInformation - vocabulary information
     * @returns vocabularyInformation - vocabularyInformation added with shortcut terms
     */
    private addCdsSpecificAnnotations;
    /**
     * Returns default alias.
     *
     * @param namespace Namespace
     * @returns Sap Oasis Vocabulary Alias;
     */
    getDefaultAlias(namespace: string): VocabularyAlias | undefined;
    /**
     * Returns map of all vocabularies supported by this library.
     *
     * @returns - map of vocabularies
     */
    getVocabularies(): Map<NamespaceString, Vocabulary>;
    /**
     * Returns the supported namespace for a qualified name.
     *
     * @param name - Qualified name, i.e. <Namespace|Alias>.<Name>
     * @returns - namespace for a qualified name
     */
    getVocabularyNamespace(name: QualifiedName): NamespaceString | undefined;
    /**
     * Returns information about a vocabulary identified by its name qualifier.
     *
     * @param nameQualifier - Name qualifier.
     * @returns - vocabulary information
     */
    getVocabulary(nameQualifier: NameQualifier): Vocabulary | null;
    /**
     * Returns all terms which are applicable for a given context.
     *
     * The context is defined by the following parameters.
     *
     * @param targetKinds - Target kinds, see symbolic values in http://docs.oasis-open.org/odata/odata-csdl-xml/v4.01/odata-csdl-xml-v4.01.html#sec_Applicability
     * @param targetType  - Type name of the annotated element.
     * @returns - all terms which are applicable for a given context.
     */
    getTermsForTargetKinds(targetKinds: TargetKind[], targetType: FullyQualifiedTypeName): FullyQualifiedName[];
    /**
     * Check if the term is applicable in the given context.
     *
     * The context is described by parameters targetKind and targetType.
     * The result describes whether the term is applicable or gives a reason why it is not applicable.
     *
     * @param termName       - Name of vocabulary term
     * @param targetKinds     - Target kind, see symbolic values in http://docs.oasis-open.org/odata/odata-csdl-xml/v4.01/odata-csdl-xml-v4.01.html#sec_Applicability
     * @param targetType     - Type of the annotated element
     * @returns                TermApplicability: {IsValid|TermNotApplicable|TypeNotApplicable|UnknownTerm|UnknownVocabulary|UnSupportedVocabulary}
     */
    checkTermApplicability(termName: FullyQualifiedName, targetKinds: TargetKind[], targetType: FullyQualifiedTypeName): TermApplicability;
    /**
     * Supplementary function which returns part of documentation describing vocabulary object type.
     *
     * @param element element object
     * @param elementType element type object
     * @param experimentalDescription experimental type description
     * @param aliasInfo - alias information
     * @returns array of markdown lines
     */
    private getElementTypeDescription;
    /**
     * Returns the documentation for an vocabulary element.
     *
     * The result is an array of Markdown strings.
     *
     * @param name           - Fully qualified name of the element.
     * @param [propertyName] - Name of a property of the element (in case fName is a complex type and you want to get
     *                         the documentation of the property instead of the properties element)
     * @param aliasInfo      - Alias information
     * @returns - mark down string.
     */
    getDocumentation(name: FullyQualifiedName, propertyName?: SimpleIdentifier, aliasInfo?: AliasInformation): MarkdownString[];
    /**
     *
     * @param element  - element and element type
     * @param experimentalDescription - description
     * @returns - values
     */
    checkExperimentalElement(element: ElementType, experimentalDescription: string): MarkdownString[];
    /**
     *
     * @param element  - element and element type
     * @returns - values
     */
    checkDeprecatedElement(element: ElementType): MarkdownString[];
    /**
     *
     * @param element  - element and element type
     * @returns - values
     */
    getElementKindIsProperty(element: ElementType): MarkdownString[];
    /**
     *
     * @param element  - element and element type
     * @param elementType - element type
     * @param aliasInfo - alias information
     * @returns - values
     */
    getElementKindIsMemberAndTerm(element: ElementType, elementType: VocabularyObject | undefined, aliasInfo?: AliasInformation): MarkdownString[];
    /**
     *
     * @param element  - element and element type
     * @param languageDependentDesc - string
     * @returns - values
     */
    getElementIsLanguageDependent(element: ElementType, languageDependentDesc: string): MarkdownString[];
    /**
     *
     * @param element  - element and element type
     * @returns - values
     */
    getElementDefaultValue(element: ElementType): MarkdownString[];
    /**
     *
     * @param element  - element and element type
     * @returns - values
     */
    getElementAppliesToValue(element: ElementType): MarkdownString[];
    /**
     *
     * @param element  - element and element type
     * @returns - values
     */
    getElementRequireTypeValue(element: ElementType): MarkdownString[];
    /**
     *
     * @param element  - element and element type
     * @returns - values
     */
    getElementDescription(element: ElementType): MarkdownString[];
    /**
     *
     * @param element  - element and element type
     * @returns - values
     */
    getElementLongDescription(element: ElementType): MarkdownString[];
    /**
     *
     * @param name         - Fully qualified name of the element.
     * @param propertyName - Name of a property of the element.
     * @returns - element and element type
     */
    private resolveDocumentationElement;
    /**
     *
     * @param element Vocabulary object
     * @returns - vocabulary object
     */
    private getElementType;
    /**
     *
     * @param element Vocabulary object
     * @param elementType Vocabulary type object
     * @param aliasInfo - alias information
     * @returns - element type
     */
    private getFormattedTypeText;
    /**
     *
     * @param object Vocabulary object
     * @returns - text
     */
    private getFormattedNullableText;
    /**
     * Returns information about a term.
     *
     * @param termName - Fully qualified name of a term.
     * @returns - Term.
     */
    getTerm(termName: FullyQualifiedName): Term | undefined;
    /**
     * Returns information about a vocabulary type.
     *
     * @param typeName - Fully qualified name of the type.
     * @returns - information about a vocabulary type.
     */
    getType(typeName: FullyQualifiedName): VocabularyType | undefined;
    /**
     * Returns the names of all derived types for a given type (including the provided type name).
     *
     * @param typeName        - Name of the vocabulary type for which you want to get the derived types
     * @param includeAbstract - true: include names of abstract types in addition to concrete types,
     *                          false: return concrete types only
     * @returns - Returns the names of all derived types for a given type (including the provided type name)
     */
    getDerivedTypeNames(typeName: FullyQualifiedName, includeAbstract?: boolean): Set<FullyQualifiedName>;
    /**
     * Returns the complex type information for a given type name.
     *
     * The result also contains the aggregated information of the base type chain.
     *
     * @param typeName - Fully qualified name of the type.
     * @returns complex type information for a given type name.
     */
    getComplexType(typeName: FullyQualifiedName): ExpandedComplexType | undefined;
    /**
     *
     * @param name Fully qualified name of the type
     * @returns Complex type object if it exists
     */
    private _getComplexType;
    /**
     * Returns a property of an complex type.
     *
     * The result also contains the properties of the base type chain.
     *
     * @param typeName     - Fully qualified name of complex type.
     * @param propertyName - Name of the property to return.
     * @returns - property of an complex type.
     */
    getComplexTypeProperty(typeName: FullyQualifiedName, propertyName: SimpleIdentifier): ComplexTypeProperty | undefined;
}
export {};
//# sourceMappingURL=vocabulary-service.d.ts.map