import type { EDM_NAMESPACE_ALIAS, EDMX_NAMESPACE_ALIAS } from './annotation-file';
import type { Alias, NamespaceString } from './specification';
export type NamespaceAlias = typeof EDMX_NAMESPACE_ALIAS | typeof EDM_NAMESPACE_ALIAS;
/**
 * String types used for documentation purposes
 */
export type TargetKind = string;
export type TargetPath = string;
/**
 * generic context used in value handling (check/completion of annotation values)
 */
export interface AliasMap {
    [aliasOrNamespace: string]: NamespaceString;
}
/**
 * Maps of alias-namespace of current and metadata file.
 *
 */
export interface AliasInformation {
    currentFileNamespace: NamespaceString;
    currentFileAlias?: Alias;
    aliasMap: AliasMap;
    reverseAliasMap: {
        [namespace: string]: Alias | NamespaceString;
    };
    aliasMapMetadata: AliasMap;
    aliasMapVocabulary: AliasMap;
}
/**
 * Target Kinds
 *
 * used for finding allowed vocabulary terms (kinds are restricted via AppliesTo attribute) to service meta data objects
 */
export declare const TYPE_DEFINITION_KIND = "TypeDefinition";
export declare const ENUM_TYPE_KIND = "EnumType";
export declare const COMPLEX_TYPE_KIND = "ComplexType";
export declare const TERM_KIND = "Term";
export declare const ENTITY_TYPE_KIND = "EntityType";
export declare const ACTION_KIND = "Action";
export declare const FUNCTION_KIND = "Function";
export declare const ASSOCIATION_KIND = "Association";
export declare const ENTITY_CONTAINER_KIND = "EntityContainer";
export declare const PROPERTY_KIND = "Property";
export declare const NAVIGATION_PROPERTY_KIND = "NavigationProperty";
export declare const ENTITY_SET_KIND = "EntitySet";
export declare const SINGLETON_KIND = "Singleton";
export declare const ACTION_IMPORT_KIND = "ActionImport";
export declare const FUNCTION_IMPORT_KIND = "FunctionImport";
export declare const ASSOCIATION_SET_KIND = "AssociationSet";
export declare const COLLECTION_KIND = "Collection";
/**
 * target kinds - available values for AppliesTo
 */
export type TargetKindValue = 'Action' | 'ActionImport' | 'Annotation' | 'Apply' | 'Cast' | 'Collection' | 'ComplexType' | 'EntityContainer' | 'EntitySet' | 'EntityType' | 'EnumType' | 'Function' | 'FunctionImport' | 'If' | 'Include' | 'IsOf' | 'LabeledElement' | 'Member' | 'NavigationProperty' | 'Null' | 'OnDelete' | 'Parameter' | 'Property' | 'PropertyValue' | 'Record' | 'Reference' | 'ReferentialConstraint' | 'ReturnType' | 'Schema' | 'Singleton' | 'Term' | 'TypeDefinition' | 'UrlRef';
export declare const cacheKeyAnyTermName = "Impl.AnyTerm";
//# sourceMappingURL=base.d.ts.map